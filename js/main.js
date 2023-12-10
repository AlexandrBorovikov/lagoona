// Бургер меню=============================================

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav');
const headerTop = document.querySelector('.header-top');

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.classList.toggle('lock');
  });
}

// Плавная прокрутка

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      let gotoBlockValue;
      gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY;

      if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.classList.remove('lock');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
// скрытие шапки при скроле--------------------------------
let lastScroll = 0;
const defaultOffset = 100;

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const containHide = () => headerTop.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(window.innerWidth < 769 && scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        headerTop.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        headerTop.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})
// Актуальная дата в форме------------------------------
document.getElementById('date').valueAsDate = new Date()