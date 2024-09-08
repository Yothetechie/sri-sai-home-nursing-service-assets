// JavaScript to toggle the menu
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    btn.classList.toggle('open');
});  