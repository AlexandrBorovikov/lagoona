// Бургер меню=============================================

const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav');

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
      const headerTop = document.querySelector('.header__top');
      let gotoBlockValue;
      if (window.innerWidth < 768) {
        gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - headerTop.offsetHeight;
      } else {
        gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY;
      }

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
// Актуальная дата в форме------------------------------
document.getElementById('date').valueAsDate = new Date()