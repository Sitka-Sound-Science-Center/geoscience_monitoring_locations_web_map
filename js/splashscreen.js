const close_btn = document.querySelector('.close-popup');
const popup = document.querySelector('.popup')
const main_popup = document.querySelector('.main-popup');

close_btn.addEventListener('click', () => {
    popup.style.visibility = 'hidden';
})