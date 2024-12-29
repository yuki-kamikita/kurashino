// チェックボックスをブラウザ上で変更可能にする
document.addEventListener('DOMContentLoaded', () => {
    // タスクリストの<li>要素をすべて取得
    const tasks = document.querySelectorAll('li.task-list-item');
    tasks.forEach(item => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        // チェックボックスがない行は無視
        if (!checkbox) return;

        // デフォルトでdisabledが付いている場合は外す
        checkbox.removeAttribute('disabled');

        // リストアイテム全体をクリック時にチェック切り替え
        item.style.cursor = 'pointer';
        item.addEventListener('click', e => {
            // もしクリック対象がまさにチェックボックスだったら、そのままブラウザ標準動作
            if (e.target === checkbox) {
                return;
            }
            // それ以外の要素をクリックしたらチェックを反転
            checkbox.checked = !checkbox.checked;
        });
    });
});
