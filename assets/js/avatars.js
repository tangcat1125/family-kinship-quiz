// avatars.js - 國小風格矢量 SVG 親人頭像生成器
// 零依賴、全向量高解析度，支援表情光暈與動態高亮

export const AVATAR_SVGS = {
  // 爺爺 (祖父 - 爸爸的爸爸)
  grandpa_paternal: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <!-- 頭髮白髮 -->
      <path d="M22,46 C20,24 80,24 78,46 C74,28 26,28 22,46 Z" fill="#cfd8dc"/>
      <!-- 臉部 -->
      <ellipse cx="50" cy="54" rx="26" ry="28" fill="#ffdfba"/>
      <!-- 眉毛 (白長眉) -->
      <path d="M32,42 Q40,38 45,43" stroke="#90a4ae" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M68,42 Q60,38 55,43" stroke="#90a4ae" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 老花眼鏡 -->
      <circle cx="38" cy="50" r="8" fill="#ffffff" fill-opacity="0.4" stroke="#78909c" stroke-width="2.5"/>
      <circle cx="62" cy="50" r="8" fill="#ffffff" fill-opacity="0.4" stroke="#78909c" stroke-width="2.5"/>
      <line x1="46" y1="50" x2="54" y2="50" stroke="#78909c" stroke-width="2.5"/>
      <!-- 眼睛 (瞇瞇笑眼) -->
      <path d="M34,50 Q38,46 42,50" stroke="#37474f" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M58,50 Q62,46 66,50" stroke="#37474f" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- 慈祥微笑與小鬍子 -->
      <path d="M42,66 Q50,73 58,66" stroke="#c2185b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M43,62 Q50,60 57,62" stroke="#b0bec5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- 衣服領口 (綠色毛背心) -->
      <path d="M26,82 Q50,96 74,82 L78,100 L22,100 Z" fill="#2e7d32"/>
      <polygon points="50,86 42,76 58,76" fill="#fff9c4"/>
    </svg>
  `,

  // 奶奶 (祖母 - 爸爸的媽媽)
  grandma_paternal: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <!-- 捲捲銀白頭髮 -->
      <circle cx="26" cy="40" r="10" fill="#b0bec5"/>
      <circle cx="36" cy="28" r="11" fill="#b0bec5"/>
      <circle cx="50" cy="24" r="12" fill="#cfd8dc"/>
      <circle cx="64" cy="28" r="11" fill="#b0bec5"/>
      <circle cx="74" cy="40" r="10" fill="#b0bec5"/>
      <!-- 臉部 -->
      <ellipse cx="50" cy="55" rx="25" ry="27" fill="#ffdfba"/>
      <!-- 慈祥眼睛與腮紅 -->
      <path d="M34,49 Q38,44 42,49" stroke="#37474f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M58,49 Q62,44 66,49" stroke="#37474f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="32" cy="56" rx="4" ry="2.5" fill="#ff8a80" opacity="0.6"/>
      <ellipse cx="68" cy="56" rx="4" ry="2.5" fill="#ff8a80" opacity="0.6"/>
      <!-- 溫暖笑容 -->
      <path d="M42,65 Q50,73 58,65" stroke="#d81b60" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- 珍珠耳環 -->
      <circle cx="24" cy="56" r="3.5" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
      <circle cx="76" cy="56" r="3.5" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
      <!-- 衣服 (典雅紅色毛衣) -->
      <path d="M26,82 Q50,96 74,82 L78,100 L22,100 Z" fill="#c2185b"/>
    </svg>
  `,

  // 外公 (祖父 - 媽媽的爸爸)
  grandpa_maternal: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#f3e5f5" stroke="#ab47bc" stroke-width="4"/>
      <!-- 紳士帽 / 短灰髮 -->
      <path d="M24,42 C22,22 78,22 76,42 Z" fill="#90a4ae"/>
      <ellipse cx="50" cy="54" rx="26" ry="27" fill="#ffdfba"/>
      <!-- 粗框金絲眼鏡 -->
      <rect x="30" y="44" width="16" height="13" rx="3" fill="#ffffff" fill-opacity="0.3" stroke="#ffb300" stroke-width="2"/>
      <rect x="54" y="44" width="16" height="13" rx="3" fill="#ffffff" fill-opacity="0.3" stroke="#ffb300" stroke-width="2"/>
      <line x1="46" y1="50" x2="54" y2="50" stroke="#ffb300" stroke-width="2"/>
      <!-- 亮晶晶眼睛 -->
      <circle cx="38" cy="50" r="2.5" fill="#263238"/>
      <circle cx="62" cy="50" r="2.5" fill="#263238"/>
      <!-- 開心笑容 -->
      <path d="M42,66 Q50,74 58,66" stroke="#c2185b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- 襯衫與領帶 (紫系) -->
      <path d="M25,82 Q50,95 75,82 L80,100 L20,100 Z" fill="#7b1fa2"/>
      <polygon points="50,83 46,98 54,98" fill="#ffd54f"/>
    </svg>
  `,

  // 外婆 (祖母 - 媽媽的媽媽)
  waipo: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#f3e5f5" stroke="#ab47bc" stroke-width="4"/>
      <!-- 盤髮 / 髮髻 -->
      <circle cx="50" cy="22" r="11" fill="#78909c"/>
      <path d="M24,45 C20,24 80,24 76,45 C70,30 30,30 24,45 Z" fill="#607d8b"/>
      <!-- 臉部 -->
      <ellipse cx="50" cy="55" rx="25" ry="26" fill="#ffe0b2"/>
      <!-- 眉毛與眼睛 -->
      <path d="M33,45 Q38,41 43,45" stroke="#455a64" stroke-width="2" fill="none"/>
      <path d="M57,45 Q62,41 67,45" stroke="#455a64" stroke-width="2" fill="none"/>
      <path d="M35,50 Q39,46 43,50" stroke="#263238" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M57,50 Q61,46 65,50" stroke="#263238" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- 粉紅腮紅與大笑臉 -->
      <circle cx="31" cy="58" r="4" fill="#f48fb1" opacity="0.6"/>
      <circle cx="69" cy="58" r="4" fill="#f48fb1" opacity="0.6"/>
      <path d="M41,65 Q50,74 59,65" stroke="#ad1457" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 絲巾 (紫粉色) -->
      <path d="M26,82 Q50,96 74,82 L78,100 L22,100 Z" fill="#8e24aa"/>
      <path d="M42,80 Q50,88 58,80 Q50,94 42,80 Z" fill="#f06292"/>
    </svg>
  `,

  // 伯伯 (爸爸的哥哥)
  uncle_bobo: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <!-- 短黑髮帶少許微白 (成熟穩重) -->
      <path d="M24,44 C22,20 78,20 76,44 C72,26 28,26 24,44 Z" fill="#37474f"/>
      <ellipse cx="50" cy="54" rx="25" ry="26" fill="#ffdfba"/>
      <!-- 濃眉與眼睛 -->
      <path d="M32,43 L44,43" stroke="#263238" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M56,43 L68,43" stroke="#263238" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="38" cy="51" r="3" fill="#263238"/>
      <circle cx="62" cy="51" r="3" fill="#263238"/>
      <path d="M42,65 Q50,72 58,65" stroke="#bf360c" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 綠色成熟夾克 -->
      <path d="M24,82 Q50,95 76,82 L80,100 L20,100 Z" fill="#1b5e20"/>
      <polygon points="50,85 45,74 55,74" fill="#ffffff"/>
    </svg>
  `,

  // 伯母 (伯伯的妻子)
  aunt_bomu: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <!-- 氣質捲髮 -->
      <path d="M22,50 C18,22 82,22 78,50 C82,65 76,68 76,55 C74,28 26,28 24,55 C24,68 18,65 22,50 Z" fill="#4e342e"/>
      <ellipse cx="50" cy="54" rx="24" ry="26" fill="#ffe0b2"/>
      <circle cx="37" cy="50" r="3" fill="#263238"/>
      <circle cx="63" cy="50" r="3" fill="#263238"/>
      <path d="M43,65 Q50,71 57,65" stroke="#d81b60" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- 耳環 -->
      <circle cx="23" cy="58" r="3" fill="#ffd700"/>
      <circle cx="77" cy="58" r="3" fill="#ffd700"/>
      <!-- 綠花洋裝 -->
      <path d="M25,82 Q50,94 75,82 L78,100 L22,100 Z" fill="#388e3c"/>
    </svg>
  `,

  // 叔叔 (爸爸的弟弟)
  uncle_shushu: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <!-- 年輕帥氣短髮 -->
      <path d="M25,42 C24,20 76,20 75,42 C70,24 30,24 25,42 Z" fill="#212121"/>
      <ellipse cx="50" cy="54" rx="24" ry="25" fill="#ffdfba"/>
      <!-- 活力眼神 -->
      <circle cx="38" cy="49" r="3.2" fill="#212121"/>
      <circle cx="62" cy="49" r="3.2" fill="#212121"/>
      <path d="M40,63 Q50,72 60,63" stroke="#e65100" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 運動綠色連帽 T -->
      <path d="M25,82 Q50,95 75,82 L79,100 L21,100 Z" fill="#43a047"/>
    </svg>
  `,

  // 嬸嬸 (叔叔的妻子)
  aunt_shenshen: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <!-- 俏麗短髮 -->
      <path d="M22,46 C20,20 80,20 78,46 C76,60 72,60 70,48 C68,26 32,26 30,48 C28,60 24,60 22,46 Z" fill="#5d4037"/>
      <ellipse cx="50" cy="53" rx="23" ry="25" fill="#ffdfba"/>
      <circle cx="38" cy="49" r="3" fill="#263238"/>
      <circle cx="62" cy="49" r="3" fill="#263238"/>
      <circle cx="32" cy="56" rx="3.5" ry="2" fill="#ff8a80" opacity="0.6"/>
      <circle cx="68" cy="56" rx="3.5" ry="2" fill="#ff8a80" opacity="0.6"/>
      <path d="M43,63 Q50,70 57,63" stroke="#c2185b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M25,82 Q50,95 75,82 L78,100 L22,100 Z" fill="#66bb6a"/>
    </svg>
  `,

  // 姑姑 (爸爸的姐妹)
  aunt_gugu: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <!-- 優雅波浪長髮 -->
      <path d="M20,52 C18,20 82,20 80,52 C84,72 74,75 74,56 C72,26 28,26 26,56 C26,75 16,72 20,52 Z" fill="#3e2723"/>
      <!-- 髮夾飾品 -->
      <circle cx="28" cy="36" r="4.5" fill="#ffd54f" stroke="#ff8f00" stroke-width="1.5"/>
      <ellipse cx="50" cy="53" rx="24" ry="25" fill="#ffe0b2"/>
      <circle cx="37" cy="48" r="3" fill="#212121"/>
      <circle cx="63" cy="48" r="3" fill="#212121"/>
      <path d="M42,63 Q50,71 58,63" stroke="#d81b60" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 洋裝 -->
      <path d="M24,82 Q50,94 76,82 L80,100 L20,100 Z" fill="#2e7d32"/>
    </svg>
  `,

  // 姑丈 (姑姑的先生)
  uncle_guzhang: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <path d="M24,42 C22,22 78,22 76,42 Z" fill="#263238"/>
      <ellipse cx="50" cy="53" rx="25" ry="26" fill="#ffdfba"/>
      <!-- 粗框眼鏡 -->
      <rect x="30" y="44" width="16" height="12" rx="3" fill="#ffffff" fill-opacity="0.3" stroke="#37474f" stroke-width="2.5"/>
      <rect x="54" y="44" width="16" height="12" rx="3" fill="#ffffff" fill-opacity="0.3" stroke="#37474f" stroke-width="2.5"/>
      <line x1="46" y1="50" x2="54" y2="50" stroke="#37474f" stroke-width="2.5"/>
      <circle cx="38" cy="50" r="2.5" fill="#212121"/>
      <circle cx="62" cy="50" r="2.5" fill="#212121"/>
      <path d="M43,65 Q50,71 57,65" stroke="#bf360c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M25,82 Q50,95 75,82 L79,100 L21,100 Z" fill="#1b5e20"/>
    </svg>
  `,

  // 舅舅 (媽媽的兄弟)
  uncle_jiujiu: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#f3e5f5" stroke="#ab47bc" stroke-width="4"/>
      <!-- 陽光短髮 -->
      <path d="M24,40 C22,18 78,18 76,40 C70,22 30,22 24,40 Z" fill="#263238"/>
      <ellipse cx="50" cy="53" rx="24" ry="25" fill="#ffdfba"/>
      <!-- 活潑笑臉與濃眉 -->
      <path d="M33,42 L43,42" stroke="#212121" stroke-width="3" stroke-linecap="round"/>
      <path d="M57,42 L67,42" stroke="#212121" stroke-width="3" stroke-linecap="round"/>
      <circle cx="38" cy="49" r="3.2" fill="#212121"/>
      <circle cx="62" cy="49" r="3.2" fill="#212121"/>
      <path d="M40,62 Q50,72 60,62" stroke="#8e24aa" stroke-width="3" fill="none" stroke-linecap="round"/>
      <!-- 紫色 Polo 衫 -->
      <path d="M25,82 Q50,95 75,82 L79,100 L21,100 Z" fill="#6a1b9a"/>
      <polygon points="50,85 43,75 57,75" fill="#ffffff"/>
    </svg>
  `,

  // 舅媽 (舅舅的妻子)
  aunt_jiuma: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#f3e5f5" stroke="#ab47bc" stroke-width="4"/>
      <!-- 中長棕髮 -->
      <path d="M22,48 C20,20 80,20 78,48 C80,66 74,68 74,52 C72,25 28,25 26,52 C26,68 20,66 22,48 Z" fill="#4e342e"/>
      <ellipse cx="50" cy="53" rx="23" ry="25" fill="#ffe0b2"/>
      <circle cx="37" cy="49" r="3" fill="#212121"/>
      <circle cx="63" cy="49" r="3" fill="#212121"/>
      <circle cx="32" cy="56" r="3" fill="#f48fb1" opacity="0.6"/>
      <circle cx="68" cy="56" r="3" fill="#f48fb1" opacity="0.6"/>
      <path d="M42,63 Q50,71 58,63" stroke="#ad1457" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- 紫色洋裝 -->
      <path d="M25,82 Q50,95 75,82 L79,100 L21,100 Z" fill="#8e24aa"/>
    </svg>
  `,

  // 阿姨 (媽媽的姐妹)
  aunt_ayi: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#f3e5f5" stroke="#ab47bc" stroke-width="4"/>
      <!-- 高馬尾 / 活潑長髮 -->
      <ellipse cx="74" cy="30" rx="9" ry="14" fill="#3e2723" transform="rotate(30 74 30)"/>
      <path d="M23,46 C20,20 80,20 77,46 C74,24 26,24 23,46 Z" fill="#3e2723"/>
      <ellipse cx="50" cy="53" rx="24" ry="25" fill="#ffe0b2"/>
      <circle cx="38" cy="48" r="3" fill="#212121"/>
      <circle cx="62" cy="48" r="3" fill="#212121"/>
      <path d="M41,62 Q50,72 59,62" stroke="#d81b60" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M25,82 Q50,95 75,82 L79,100 L21,100 Z" fill="#ab47bc"/>
    </svg>
  `,

  // 姨丈 (阿姨的先生)
  uncle_yizhang: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#f3e5f5" stroke="#ab47bc" stroke-width="4"/>
      <path d="M25,42 C24,20 76,20 75,42 Z" fill="#37474f"/>
      <ellipse cx="50" cy="54" rx="25" ry="26" fill="#ffdfba"/>
      <circle cx="38" cy="50" r="3" fill="#212121"/>
      <circle cx="62" cy="50" r="3" fill="#212121"/>
      <!-- 溫和鬍渣或笑容 -->
      <path d="M42,65 Q50,72 58,65" stroke="#4a148c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M25,82 Q50,95 75,82 L79,100 L21,100 Z" fill="#7b1fa2"/>
    </svg>
  `,

  // 堂兄弟 (伯伯或叔叔的兒子)
  cousin_tang_boy: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#e8f5e9" stroke="#4caf50" stroke-width="4"/>
      <!-- 小男生棒球帽/短髮 -->
      <path d="M24,40 C22,22 78,22 76,40 Z" fill="#1b5e20"/>
      <ellipse cx="50" cy="54" rx="23" ry="24" fill="#ffdfba"/>
      <!-- 大眼睛 -->
      <circle cx="37" cy="50" r="4" fill="#212121"/>
      <circle cx="38.5" cy="48.5" r="1.5" fill="#ffffff"/>
      <circle cx="63" cy="50" r="4" fill="#212121"/>
      <circle cx="64.5" cy="48.5" r="1.5" fill="#ffffff"/>
      <!-- 開朗大笑 -->
      <path d="M40,64 Q50,74 60,64" stroke="#e65100" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M26,82 Q50,95 74,82 L78,100 L22,100 Z" fill="#4caf50"/>
    </svg>
  `,

  // 表兄弟 (姑姑、舅舅或阿姨的兒子)
  cousin_biao_boy: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#f3e5f5" stroke="#ab47bc" stroke-width="4"/>
      <!-- 帥氣劉海 -->
      <path d="M25,38 C24,20 76,20 75,38 L65,42 L55,38 L45,43 L35,38 Z" fill="#4e342e"/>
      <ellipse cx="50" cy="54" rx="23" ry="24" fill="#ffdfba"/>
      <circle cx="37" cy="50" r="4" fill="#212121"/>
      <circle cx="38.5" cy="48.5" r="1.5" fill="#ffffff"/>
      <circle cx="63" cy="50" r="4" fill="#212121"/>
      <circle cx="64.5" cy="48.5" r="1.5" fill="#ffffff"/>
      <path d="M41,64 Q50,73 59,64" stroke="#8e24aa" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M26,82 Q50,95 74,82 L78,100 L22,100 Z" fill="#ba68c8"/>
    </svg>
  `,

  // 爸爸 (中央核心)
  dad: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#fff8e1" stroke="#ffa000" stroke-width="4"/>
      <path d="M25,42 C24,20 76,20 75,42 Z" fill="#37474f"/>
      <ellipse cx="50" cy="54" rx="24" ry="25" fill="#ffdfba"/>
      <circle cx="38" cy="50" r="3.2" fill="#212121"/>
      <circle cx="62" cy="50" r="3.2" fill="#212121"/>
      <path d="M41,64 Q50,72 59,64" stroke="#e65100" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M25,82 Q50,95 75,82 L79,100 L21,100 Z" fill="#f57c00"/>
    </svg>
  `,

  // 媽媽 (中央核心)
  mom: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#fff8e1" stroke="#ffa000" stroke-width="4"/>
      <path d="M22,48 C20,20 80,20 78,48 C80,66 75,66 74,52 C72,25 28,25 26,52 C25,66 20,66 22,48 Z" fill="#4e342e"/>
      <ellipse cx="50" cy="53" rx="23" ry="25" fill="#ffe0b2"/>
      <circle cx="38" cy="49" r="3" fill="#212121"/>
      <circle cx="62" cy="49" r="3" fill="#212121"/>
      <path d="M42,63 Q50,71 58,63" stroke="#e91e63" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M25,82 Q50,95 75,82 L79,100 L21,100 Z" fill="#ff7043"/>
    </svg>
  `,

  // 我 (小主角 - 探索者)
  me: `
    <svg viewBox="0 0 100 100" class="avatar-svg me-pulse">
      <circle cx="50" cy="50" r="46" fill="#fff3e0" stroke="#ff9800" stroke-width="5"/>
      <path d="M24,40 C22,18 78,18 76,40 Z" fill="#3e2723"/>
      <ellipse cx="50" cy="54" rx="24" ry="24" fill="#ffdfba"/>
      <!-- 大大的好奇眼睛 -->
      <circle cx="37" cy="49" r="4.5" fill="#212121"/>
      <circle cx="38.5" cy="47" r="1.8" fill="#ffffff"/>
      <circle cx="63" cy="49" r="4.5" fill="#212121"/>
      <circle cx="64.5" cy="47" r="1.8" fill="#ffffff"/>
      <circle cx="30" cy="57" r="3" fill="#ff8a80" opacity="0.7"/>
      <circle cx="70" cy="57" r="3" fill="#ff8a80" opacity="0.7"/>
      <path d="M41,63 Q50,74 59,63" stroke="#e65100" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <!-- 偵探領巾 -->
      <path d="M26,82 Q50,95 74,82 L78,100 L22,100 Z" fill="#ff9800"/>
      <polygon points="50,84 44,95 56,95" fill="#ffd54f"/>
    </svg>
  `,

  // 兄弟姐妹
  siblings: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#fff8e1" stroke="#ffa000" stroke-width="4"/>
      <!-- 雙人迷你剪影 -->
      <circle cx="38" cy="44" r="15" fill="#ffcc80"/>
      <circle cx="62" cy="48" r="14" fill="#ffe082"/>
      <path d="M22,82 Q38,92 50,84 L50,100 L20,100 Z" fill="#fb8c00"/>
      <path d="M50,84 Q62,92 78,82 L80,100 L50,100 Z" fill="#fbc02d"/>
    </svg>
  `,

  // 預設鎖定剪影
  locked: `
    <svg viewBox="0 0 100 100" class="avatar-svg">
      <circle cx="50" cy="50" r="46" fill="#eceff1" stroke="#b0bec5" stroke-width="3" stroke-dasharray="6,4"/>
      <!-- 神秘問號剪影 -->
      <circle cx="50" cy="40" r="18" fill="#cfd8dc"/>
      <path d="M30,84 Q50,92 70,84 L74,100 L26,100 Z" fill="#b0bec5"/>
      <text x="50" y="58" font-size="28" font-weight="900" fill="#78909c" text-anchor="middle" font-family="system-ui, sans-serif">？</text>
    </svg>
  `
};

export function getAvatarSvg(avatarKey, isUnlocked = false) {
  if (!isUnlocked) {
    return AVATAR_SVGS.locked;
  }
  return AVATAR_SVGS[avatarKey] || AVATAR_SVGS.locked;
}
