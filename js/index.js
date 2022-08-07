const menu = document.querySelector('svg.menu');
const close = document.querySelector('svg.close');
const nav = document.querySelector('nav');


menu.addEventListener('click', () => {
    nav.classList.add("open-nav")
})

close.addEventListener('click', () => {
    nav.classList.remove("open-nav")
})