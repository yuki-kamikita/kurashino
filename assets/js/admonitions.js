document.addEventListener('DOMContentLoaded', function(){
  const blockquotes = document.querySelectorAll('.markdown-body blockquote');
  const patterns = {
    '[!NOTE]':     { icon:'📝',  label:'NOTE / メモ',      color:'#2196F3' },
    '[!TIP]':      { icon:'💡',  label:'TIP / ヒント',     color:'#4CAF50' },
    '[!IMPORTANT]':{ icon:'❗',  label:'IMPORTANT / 重要', color:'#FFEB3B' },
    '[!WARNING]':  { icon:'⚠️',  label:'WARNING / 警告',   color:'#FF9800' },
    '[!CAUTION]':  { icon:'⚠️',  label:'CAUTION / 注意',   color:'#E91E63' }
  };

  blockquotes.forEach(bq => {
    const firstP = bq.querySelector('p');
    if (!firstP) return;
    const text = firstP.innerHTML.trim();
    for (let key in patterns) {
      if (text.startsWith(key)) {
        const {icon, label, color} = patterns[key];
        // キー部分除去
        const newText = text.replace(key, '').trim();
        // ラベル行を挿入
        firstP.innerHTML = `<span class="admonition-label"><strong>${icon} ${label}</strong></span><br>${newText}`;
        // クラス付与
        bq.classList.add('admonition-block');
        bq.style.borderLeftColor = color;
        break; 
      }
    }
  });
});
