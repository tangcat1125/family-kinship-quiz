// treeRenderer.js - 家族族人樹狀圖渲染與亮燈互動模組
import { AVATAR_SVGS, getAvatarSvg } from './avatars.js';

export class TreeRenderer {
  constructor(containerEl, onNodeClick = null) {
    this.container = containerEl;
    this.onNodeClick = onNodeClick;
    this.targetNodeId = null;
    this.unlockedNodeIds = new Set();
  }

  // 家族樹所有節點定義（對齊課本架構）
  static TREE_NODES = {
    // 爸爸一側 (綠色系)
    node_yeye: {
      id: 'node_yeye',
      title: '祖父（爺爺）',
      shortTitle: '爺爺',
      relation: '爸爸的爸爸',
      side: 'father',
      avatarKey: 'grandpa_paternal'
    },
    node_nainai: {
      id: 'node_nainai',
      title: '祖母（奶奶）',
      shortTitle: '奶奶',
      relation: '爸爸的媽媽',
      side: 'father',
      avatarKey: 'grandma_paternal'
    },
    node_bobo: {
      id: 'node_bobo',
      title: '伯伯',
      shortTitle: '伯伯',
      relation: '爸爸的哥哥',
      side: 'father',
      avatarKey: 'uncle_bobo'
    },
    node_bomu: {
      id: 'node_bomu',
      title: '伯母',
      shortTitle: '伯母',
      relation: '伯伯的太太',
      side: 'father',
      avatarKey: 'aunt_bomu'
    },
    node_shushu: {
      id: 'node_shushu',
      title: '叔叔',
      shortTitle: '叔叔',
      relation: '爸爸的弟弟',
      side: 'father',
      avatarKey: 'uncle_shushu'
    },
    node_shenshen: {
      id: 'node_shenshen',
      title: '嬸嬸',
      shortTitle: '嬸嬸',
      relation: '叔叔的太太',
      side: 'father',
      avatarKey: 'aunt_shenshen'
    },
    node_gugu: {
      id: 'node_gugu',
      title: '姑姑',
      shortTitle: '姑姑',
      relation: '爸爸的姐妹',
      side: 'father',
      avatarKey: 'aunt_gugu'
    },
    node_guzhang: {
      id: 'node_guzhang',
      title: '姑丈',
      shortTitle: '姑丈',
      relation: '姑姑的先生',
      side: 'father',
      avatarKey: 'uncle_guzhang'
    },
    node_tang_bro: {
      id: 'node_tang_bro',
      title: '堂兄弟姐妹',
      shortTitle: '堂兄弟',
      relation: '伯父叔叔的子女',
      side: 'father',
      avatarKey: 'cousin_tang_boy'
    },

    // 核心自我 (黃橘色系 - 預設已點亮)
    node_dad: {
      id: 'node_dad',
      title: '爸爸',
      shortTitle: '爸爸',
      relation: '我的父親',
      side: 'core',
      avatarKey: 'dad',
      isDefaultUnlocked: true
    },
    node_mom: {
      id: 'node_mom',
      title: '媽媽',
      shortTitle: '媽媽',
      relation: '我的母親',
      side: 'core',
      avatarKey: 'mom',
      isDefaultUnlocked: true
    },
    node_me: {
      id: 'node_me',
      title: '我',
      shortTitle: '我',
      relation: '中心探索者',
      side: 'core',
      avatarKey: 'me',
      isDefaultUnlocked: true
    },
    node_siblings: {
      id: 'node_siblings',
      title: '親兄弟姐妹',
      shortTitle: '手足',
      relation: '我的親兄弟姐妹',
      side: 'core',
      avatarKey: 'siblings',
      isDefaultUnlocked: true
    },

    // 媽媽一側 (粉紫色系)
    node_waigong: {
      id: 'node_waigong',
      title: '祖父（外公）',
      shortTitle: '外公',
      relation: '媽媽的爸爸',
      side: 'mother',
      avatarKey: 'grandpa_maternal'
    },
    node_waipo: {
      id: 'node_waipo',
      title: '祖母（外婆）',
      shortTitle: '外婆',
      relation: '媽媽的媽媽',
      side: 'mother',
      avatarKey: 'waipo'
    },
    node_jiujiu: {
      id: 'node_jiujiu',
      title: '舅舅',
      shortTitle: '舅舅',
      relation: '媽媽的兄弟',
      side: 'mother',
      avatarKey: 'uncle_jiujiu'
    },
    node_jiuma: {
      id: 'node_jiuma',
      title: '舅媽',
      shortTitle: '舅媽',
      relation: '舅舅的太太',
      side: 'mother',
      avatarKey: 'aunt_jiuma'
    },
    node_ayi: {
      id: 'node_ayi',
      title: '阿姨',
      shortTitle: '阿姨',
      relation: '媽媽的姐妹',
      side: 'mother',
      avatarKey: 'aunt_ayi'
    },
    node_yizhang: {
      id: 'node_yizhang',
      title: '姨丈',
      shortTitle: '姨丈',
      relation: '阿姨的先生',
      side: 'mother',
      avatarKey: 'uncle_yizhang'
    },
    node_biao_bro: {
      id: 'node_biao_bro',
      title: '表兄弟姐妹',
      shortTitle: '表兄弟',
      relation: '姑姑/舅姨的子女',
      side: 'mother',
      avatarKey: 'cousin_biao_boy'
    }
  };

  init() {
    this.render();
  }

  // 渲染整棵樹狀圖
  render() {
    this.container.innerHTML = `
      <div class="family-tree-wrapper">
        <!-- 頂部世代導覽指示 -->
        <div class="tree-legend">
          <span class="legend-item legend-father"><span class="legend-dot"></span> 爸爸的親人（綠）</span>
          <span class="legend-item legend-core"><span class="legend-dot"></span> 核心家族（橘）</span>
          <span class="legend-item legend-mother"><span class="legend-dot"></span> 媽媽的親人（紫）</span>
        </div>

        <div class="tree-layout">
          <!-- 爸爸支系 (左翼) -->
          <div class="tree-branch branch-father">
            <div class="branch-label">爸爸的親人</div>
            
            <!-- 第一代：爺爺奶奶 -->
            <div class="tree-row gen-1">
              <div class="couple-group">
                ${this.createNodeHtml('node_yeye')}
                <span class="couple-connector">⚭</span>
                ${this.createNodeHtml('node_nainai')}
              </div>
            </div>

            <!-- 第二代：伯叔姑 -->
            <div class="tree-row gen-2">
              <div class="relative-pair">
                ${this.createNodeHtml('node_bobo')}
                ${this.createNodeHtml('node_bomu')}
              </div>
              <div class="relative-pair">
                ${this.createNodeHtml('node_shushu')}
                ${this.createNodeHtml('node_shenshen')}
              </div>
              <div class="relative-pair">
                ${this.createNodeHtml('node_gugu')}
                ${this.createNodeHtml('node_guzhang')}
              </div>
            </div>

            <!-- 第三代：堂親 -->
            <div class="tree-row gen-3">
              ${this.createNodeHtml('node_tang_bro')}
            </div>
          </div>

          <!-- 中央核心 (我、手足與父母) -->
          <div class="tree-branch branch-core">
            <div class="branch-label">核心家庭</div>

            <div class="tree-row gen-2">
              <div class="couple-group core-couple">
                ${this.createNodeHtml('node_dad')}
                <span class="couple-connector">⚭</span>
                ${this.createNodeHtml('node_mom')}
              </div>
            </div>

            <div class="tree-row gen-3">
              <div class="me-group">
                ${this.createNodeHtml('node_me')}
                ${this.createNodeHtml('node_siblings')}
              </div>
            </div>
          </div>

          <!-- 媽媽支系 (右翼) -->
          <div class="tree-branch branch-mother">
            <div class="branch-label">媽媽的親人</div>

            <!-- 第一代：外公外婆 -->
            <div class="tree-row gen-1">
              <div class="couple-group">
                ${this.createNodeHtml('node_waigong')}
                <span class="couple-connector">⚭</span>
                ${this.createNodeHtml('node_waipo')}
              </div>
            </div>

            <!-- 第二代：舅姨 -->
            <div class="tree-row gen-2">
              <div class="relative-pair">
                ${this.createNodeHtml('node_jiujiu')}
                ${this.createNodeHtml('node_jiuma')}
              </div>
              <div class="relative-pair">
                ${this.createNodeHtml('node_ayi')}
                ${this.createNodeHtml('node_yizhang')}
              </div>
            </div>

            <!-- 第三代：表親 -->
            <div class="tree-row gen-3">
              ${this.createNodeHtml('node_biao_bro')}
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  // 生成節點 HTML
  createNodeHtml(nodeId) {
    const node = TreeRenderer.TREE_NODES[nodeId];
    if (!node) return '';

    const isUnlocked = node.isDefaultUnlocked || this.unlockedNodeIds.has(nodeId);
    const isTarget = (this.targetNodeId === nodeId);

    let stateClass = 'node-locked';
    if (isUnlocked) stateClass = 'node-unlocked';
    if (isTarget) stateClass += ' node-target-pulse';

    const avatarSvg = getAvatarSvg(node.avatarKey, isUnlocked);
    const displayName = isUnlocked ? node.title : (isTarget ? '🔍 猜猜他是誰' : '？？？');
    const relationHint = isUnlocked ? node.relation : '尚未解鎖';

    return `
      <div class="tree-node ${node.side}-node ${stateClass}" id="${nodeId}" data-id="${nodeId}" title="${node.relation}">
        <div class="node-avatar-box">
          ${avatarSvg}
          ${isUnlocked ? '<span class="light-badge">💡</span>' : '<span class="lock-badge">🔒</span>'}
        </div>
        <div class="node-info">
          <div class="node-title">${displayName}</div>
          <div class="node-relation">${relationHint}</div>
        </div>
      </div>
    `;
  }

  // 綁定節點點擊回饋
  bindEvents() {
    const nodes = this.container.querySelectorAll('.tree-node');
    nodes.forEach(el => {
      el.addEventListener('click', () => {
        const nodeId = el.dataset.id;
        const node = TreeRenderer.TREE_NODES[nodeId];
        const isUnlocked = node.isDefaultUnlocked || this.unlockedNodeIds.has(nodeId);
        if (this.onNodeClick) {
          this.onNodeClick(node, isUnlocked);
        }
      });
    });
  }

  // 設定當前作答的目標節點（引導呼吸燈特效）
  setTargetNode(nodeId) {
    // 移除前一個 target 的動畫
    if (this.targetNodeId) {
      const prevEl = this.container.querySelector(`#${this.targetNodeId}`);
      if (prevEl) {
        prevEl.classList.remove('node-target-pulse');
      }
    }

    this.targetNodeId = nodeId;
    if (nodeId) {
      const targetEl = this.container.querySelector(`#${nodeId}`);
      if (targetEl) {
        targetEl.classList.add('node-target-pulse');
        // 輕微滾動到視野中（若有縮放或滾動）
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }
  }

  // 答對亮燈特效
  unlockNode(nodeId) {
    this.unlockedNodeIds.add(nodeId);
    const nodeEl = this.container.querySelector(`#${nodeId}`);
    if (nodeEl) {
      nodeEl.classList.remove('node-locked', 'node-target-pulse');
      nodeEl.classList.add('node-unlocked', 'node-just-lit');

      // 更新內容
      const node = TreeRenderer.TREE_NODES[nodeId];
      if (node) {
        const avatarBox = nodeEl.querySelector('.node-avatar-box');
        const titleBox = nodeEl.querySelector('.node-title');
        const relationBox = nodeEl.querySelector('.node-relation');

        if (avatarBox) {
          avatarBox.innerHTML = `
            ${getAvatarSvg(node.avatarKey, true)}
            <span class="light-badge star-sparkle">⭐</span>
          `;
        }
        if (titleBox) titleBox.textContent = node.title;
        if (relationBox) relationBox.textContent = node.relation;
      }

      // 移除瞬間閃爍 class
      setTimeout(() => {
        nodeEl.classList.remove('node-just-lit');
      }, 1500);
    }
  }

  // 取得所有可解鎖的總數量（扣除預設已解鎖的核心家庭）
  getTargetTotalCount() {
    return Object.values(TreeRenderer.TREE_NODES).filter(n => !n.isDefaultUnlocked).length;
  }

  // 取得目前已點亮的數量
  getUnlockedCount() {
    return this.unlockedNodeIds.size;
  }

  reset() {
    this.unlockedNodeIds.clear();
    this.targetNodeId = null;
    this.render();
  }
}
