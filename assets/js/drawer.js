// assets/js/drawer.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const drawer = document.querySelector('.drawer');
    const overlay = document.querySelector('.drawer-overlay');
    const closeButton = document.querySelector('.drawer-close');

    function openDrawer() {
        drawer.style.left = '0';
        overlay.style.display = 'block';
    }

    function closeDrawer() {
        drawer.style.left = '-250px';
        overlay.style.display = 'none';
    }

    menuButton.addEventListener('click', openDrawer);
    closeButton.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
});
