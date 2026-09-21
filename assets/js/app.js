// app.js - 主控制器，整合題庫、家族樹渲染、語音音效與卡牌互動

import { soundManager } from './audio.js';
import { QuizManager } from './quizManager.js';
import { TreeRenderer } from './treeRenderer.js';
import { getAvatarSvg } from './avatars.js';

class KinshipGameApp {
  constructor() {
    this.quiz = new QuizManager();
    this.tree = null;
    this.showZhuyin = true;
    this.isSubmitting = false;

    // DOM 元素快取
    this.els = {
      // NPC 區域
      npcAvatarBox: document.getElementById('npc-avatar-box'),
      dialogueText: document.getElementById('dialogue-text'),
      btnSpeak: document.getElementById('btn-speak'),
      btnHint: document.getElementById('btn-hint'),
      hintsBox: document.getElementById('hints-box'),
      hintsList: document.getElementById('hints-list'),

      // 樹狀圖區域
      treeContainer: document.getElementById('family-tree-container'),
      foundCount: document.getElementById('found-count'),
      totalCount: document.getElementById('total-count'),
      progressBarFill: document.getElementById('progress-bar-fill'),

      // 下方卡牌區
      choiceCardsGroup: document.getElementById('choice-cards-group'),
      btnSubmit: document.getElementById('btn-submit'),

      // 提示與回饋視窗
      feedbackToast: document.getElementById('feedback-toast'),
      toastIcon: document.getElementById('toast-icon'),
      toastMsg: document.getElementById('toast-msg'),

      // 勝利畫面
      victoryModal: document.getElementById('victory-modal'),
      btnRestartVictory: document.getElementById('btn-restart-victory'),

      // 頂部功能工具按鈕
      btnMute: document.getElementById('btn-mute'),
      btnSpeechToggle: document.getElementById('btn-speech-toggle'),
      btnZhuyinToggle: document.getElementById('btn-zhuyin-toggle'),
      btnRestart: document.getElementById('btn-restart')
    };
  }

  async start() {
    // 初始化家族樹
    this.tree = new TreeRenderer(this.els.treeContainer, (node, isUnlocked) => {
      this.handleNodeInspect(node, isUnlocked);
    });
    this.tree.init();

    // 初始化題庫
    await this.quiz.init();

    // 綁定事件監聽
    this.bindEvents();

    // 更新介面
    this.updateProgressDisplay();
    this.loadQuestionUI();
  }

  // 載入當前題目介面
  loadQuestionUI() {
    const q = this.quiz.getCurrentQuestion();
    if (!q) {
      this.triggerVictory();
      return;
    }

    this.isSubmitting = false;
    this.els.btnSubmit.disabled = true;

    // 1. 更新 NPC 大頭像 (左上)
    this.els.npcAvatarBox.innerHTML = `
      ${getAvatarSvg(q.avatar, true)}
      <span class="npc-tag">${q.relation}</span>
    `;

    // 2. 更新對談泡泡 (自我介紹.json 文字)
    this.els.dialogueText.textContent = q.dialogue;

    // 清空並隱藏提示框
    this.els.hintsBox.classList.remove('show');
    this.els.hintsList.innerHTML = '';
    this.els.btnHint.textContent = '💡 提示線索 (3)';

    // 3. 在右上家族樹上點亮當前目標呼吸燈！
    this.tree.setTargetNode(q.treeNodeId);

    // 4. 渲染下方 4 張稱謂卡牌
    this.renderChoiceCards();

    // 5. 自動啟動語音朗讀 (若已啟用)
    if (soundManager.speechEnabled) {
      this.playDialogueSpeech();
    }
  }

  // 渲染下方 4 張卡牌
  renderChoiceCards() {
    this.els.choiceCardsGroup.innerHTML = '';
    const cards = this.quiz.currentCards;

    cards.forEach((card, idx) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'choice-card';
      cardEl.dataset.index = idx;

      // 尋找此選項的注音
      let zhuyinHtml = '';
      if (this.showZhuyin) {
        // 若題庫有提供注音則顯示
        const matchingQ = this.quiz.questions.find(item => item.role === card.text);
        const zhuyin = card.zhuyin || (matchingQ ? matchingQ.zhuyin : '');
        if (zhuyin) {
          zhuyinHtml = `<div class="card-zhuyin">${zhuyin}</div>`;
        }
      }

      cardEl.innerHTML = `
        <span class="card-num-badge">${idx + 1}</span>
        <div class="card-role-text">${card.text}</div>
        ${zhuyinHtml}
      `;

      cardEl.addEventListener('click', () => {
        this.selectCard(cardEl, card);
      });

      this.els.choiceCardsGroup.appendChild(cardEl);
    });
  }

  // 選擇某張卡牌
  selectCard(cardEl, cardData) {
    if (this.isSubmitting) return;

    soundManager.playSelectCard();

    // 移除其他卡牌的選中狀態
    const allCards = this.els.choiceCardsGroup.querySelectorAll('.choice-card');
    allCards.forEach(c => c.classList.remove('selected'));

    // 設為選中
    cardEl.classList.add('selected');
    this.quiz.selectCard(cardData);
    this.els.btnSubmit.disabled = false;
  }

  // 送出驗證答案
  handleAnswerSubmit() {
    if (this.isSubmitting) return;
    const result = this.quiz.submitAnswer();

    if (!result.success && result.reason === 'unselected') {
      this.showToast('⚠️ 請先點選一張稱謂卡牌喔！', 'wrong');
      return;
    }

    this.isSubmitting = true;

    if (result.success) {
      // 答對了！
      soundManager.playCorrect();
      soundManager.playLightUpShimmer();

      // 樹狀圖亮燈！
      this.tree.unlockNode(result.nodeId);
      this.updateProgressDisplay();

      this.showToast(`🎉 答對了！恭喜認出【${result.question.role}】！`, 'correct');

      setTimeout(() => {
        if (result.isCompleted) {
          this.triggerVictory();
        } else {
          this.quiz.nextQuestion();
          this.loadQuestionUI();
        }
      }, 1600);
    } else {
      // 答錯了
      soundManager.playWrong();
      this.showToast(`🤔 差一點點喔！再仔細讀讀對話中的線索吧！`, 'wrong');

      // 自動提供一條提示協助學童
      this.revealNextHint();

      setTimeout(() => {
        this.isSubmitting = false;
      }, 800);
    }
  }

  // 顯示下一條線索提示
  revealNextHint() {
    const hint = this.quiz.getNextHint();
    if (hint) {
      this.els.hintsBox.classList.add('show');
      const itemEl = document.createElement('div');
      itemEl.className = 'hint-item';
      itemEl.innerHTML = `🔍 <strong>線索 ${hint.step}：</strong> ${hint.text}`;
      this.els.hintsList.appendChild(itemEl);

      const remaining = hint.total - hint.step;
      this.els.btnHint.textContent = `💡 提示線索 (${remaining})`;
    } else {
      this.showToast('已揭示全部提示囉！看看樹狀圖的位置想一想～', 'correct');
    }
  }

  // 語音朗讀對白
  playDialogueSpeech() {
    const q = this.quiz.getCurrentQuestion();
    if (!q) return;

    this.els.btnSpeak.classList.add('btn-speaking');
    soundManager.speak(q.dialogue, () => {
      this.els.btnSpeak.classList.remove('btn-speaking');
    });
  }

  // 浮動訊息提示 (Toast)
  showToast(message, type = 'correct') {
    this.els.toastMsg.textContent = message;
    this.els.toastIcon.textContent = type === 'correct' ? '🌟' : '💡';
    this.els.feedbackToast.className = `feedback-toast show ${type}`;

    setTimeout(() => {
      this.els.feedbackToast.classList.remove('show');
    }, 2200);
  }

  // 更新「找到多少家人」進度條與數字
  updateProgressDisplay() {
    const progress = this.quiz.getProgress();
    this.els.foundCount.textContent = progress.unlocked;
    this.els.totalCount.textContent = progress.total;
    this.els.progressBarFill.style.width = `${progress.percentage}%`;
  }

  // 點擊樹狀圖節點的資訊查看
  handleNodeInspect(node, isUnlocked) {
    if (isUnlocked) {
      soundManager.playClick();
      this.showToast(`✨【${node.title}】是 ${node.relation}！`, 'correct');
    } else {
      this.showToast(`🔒 這位親人還沒點亮喔！請根據 NPC 對話找出他吧！`, 'wrong');
    }
  }

  // 全員找齊大獲全勝
  triggerVictory() {
    soundManager.playVictory();
    this.els.victoryModal.classList.add('show');
  }

  // 重新開始遊戲
  restart() {
    soundManager.playClick();
    this.els.victoryModal.classList.remove('show');
    this.tree.reset();
    this.quiz.resetQuiz();
    this.updateProgressDisplay();
    this.loadQuestionUI();
  }

  // 綁定所有互動事件與鍵盤快速鍵
  bindEvents() {
    // 送出按鈕
    this.els.btnSubmit.addEventListener('click', () => {
      this.handleAnswerSubmit();
    });

    // 朗讀按鈕
    this.els.btnSpeak.addEventListener('click', () => {
      soundManager.playClick();
      this.playDialogueSpeech();
    });

    // 提示線索按鈕
    this.els.btnHint.addEventListener('click', () => {
      soundManager.playClick();
      this.revealNextHint();
    });

    // 重新開始
    this.els.btnRestart.addEventListener('click', () => this.restart());
    this.els.btnRestartVictory.addEventListener('click', () => this.restart());

    // 靜音切換
    this.els.btnMute.addEventListener('click', () => {
      const isMuted = soundManager.toggleMute();
      this.els.btnMute.classList.toggle('active', !isMuted);
      this.els.btnMute.innerHTML = isMuted ? '🔇 音效：關' : '🔊 音效：開';
    });

    // 語音朗讀切換
    this.els.btnSpeechToggle.addEventListener('click', () => {
      const enabled = soundManager.toggleSpeech();
      this.els.btnSpeechToggle.classList.toggle('active', enabled);
      this.els.btnSpeechToggle.innerHTML = enabled ? '🗣️ 朗讀：開' : '🤐 朗讀：關';
      if (!enabled) soundManager.stopSpeaking();
    });

    // 注音切換
    this.els.btnZhuyinToggle.addEventListener('click', () => {
      soundManager.playClick();
      this.showZhuyin = !this.showZhuyin;
      this.els.btnZhuyinToggle.classList.toggle('active', this.showZhuyin);
      this.els.btnZhuyinToggle.innerHTML = this.showZhuyin ? '🔤 注音：開' : '🔤 注音：關';
      this.renderChoiceCards();
    });

    // 鍵盤快速鍵支援 (1, 2, 3, 4 號鍵選牌，Enter 確認送出，Space 重聽語音)
    window.addEventListener('keydown', (e) => {
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        const cards = this.els.choiceCardsGroup.querySelectorAll('.choice-card');
        if (cards[idx] && this.quiz.currentCards[idx]) {
          this.selectCard(cards[idx], this.quiz.currentCards[idx]);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        this.handleAnswerSubmit();
      } else if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        this.playDialogueSpeech();
      } else if (e.key.toLowerCase() === 'h') {
        this.revealNextHint();
      }
    });
  }
}

// 啟動主應用
window.addEventListener('DOMContentLoaded', () => {
  const app = new KinshipGameApp();
  app.start();
});
