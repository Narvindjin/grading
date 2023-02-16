const header = document.querySelector('.header');
const main = document.querySelector('.main');
const headerButton = document.querySelector('.main-nav__menu');
const headerList = document.querySelector('.main-nav__link-list');
const buttonOpen = document.querySelector('.main-nav__open');
const buttonClose = document.querySelector('.main-nav__close');

header.classList.add('header--fixed');
main.classList.add('main--fixed-header');
headerButton.classList.remove('main-nav__hide');
headerList.classList.add('main-nav__hide');

let closeMenuHandler = () => {
  let controller = new AbortController();
  headerButton.addEventListener('click', () => {
    buttonClose.classList.add('main-nav__hide');
    buttonOpen.classList.remove('main-nav__hide');
    headerList.classList.add('main-nav__hide');
    controller.abort();
    openMenuHandler();
  }, { signal: controller.signal })
}

let openMenuHandler = () => {
  let controller = new AbortController();
  headerButton.addEventListener('click', () => {
    buttonClose.classList.remove('main-nav__hide');
    buttonOpen.classList.add('main-nav__hide');
    headerList.classList.remove('main-nav__hide');
    controller.abort();
    closeMenuHandler();
  }, { signal: controller.signal })
}

openMenuHandler();
