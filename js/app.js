const menu = document.querySelector('.menu');
const heading = document.querySelector('.heading');
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    heading.classList.toggle('active');
});