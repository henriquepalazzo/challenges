console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttonDarkMode = document.querySelector('[data-js="dark-mode-button"]');
const buttonLightMode = document.querySelector('[data-js="light-mode-button"]');
const buttonToggle = document.querySelector('[data-js="toggle-button"]');

buttonDarkMode.addEventListener('click', () => {
    bodyElement.classList.add('dark')
    bodyElement.classList.remove('light')
})

buttonLightMode.addEventListener('click', () => {
    bodyElement.classList.add('light')
    bodyElement.classList.remove('dark')
})

buttonToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('dark')
})