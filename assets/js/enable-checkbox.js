// チェックボックスをブラウザ上で変更可能にする
document.addEventListener('DOMContentLoaded', () => {
    // Markdownのタスクリストで生成されたチェックボックスを取得
    const checkboxes = document.querySelectorAll('.task-list-item input[type="checkbox"]');
  
    checkboxes.forEach(checkbox => {
      // disabled属性が付いていれば削除
      if (checkbox.hasAttribute('disabled')) {
        checkbox.removeAttribute('disabled');
      }
  
      // 見た目操作しやすいよう cursor: pointer; を追加
      checkbox.style.cursor = "pointer";
    });
  });
  