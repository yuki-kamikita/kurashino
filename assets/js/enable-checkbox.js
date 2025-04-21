document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('li.task-list-item');
    tasks.forEach(item => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      if (!checkbox) return;
  
      // disabledを外してクリック操作可能に
      checkbox.removeAttribute('disabled');
      checkbox.style.cursor = "pointer";
  
      // 親li全体をクリックした時のリスナー
      item.style.cursor = 'pointer';
      item.addEventListener('click', e => {
        // クリック先がそのままcheckboxならブラウザ標準動作でOK
        if (e.target === checkbox) {
          return;
        }
        // もし「最も近い li.task-list-item」がこのitem自身でないならスキップ
        // （= 子リスト等をクリックした）
        if (e.target.closest('li.task-list-item') !== item) {
          return;
        }
        // ここでチェックを反転
        checkbox.checked = !checkbox.checked;
      });
    });
  });
  