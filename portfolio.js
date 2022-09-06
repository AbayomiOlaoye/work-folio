// Logic for Hamburger menu control for small screens
const MENU_BTN = document.querySelector('.menu-icon');
const EXIT_BTN = document.querySelector('.exit-icon');
const NAV_LINK = document.querySelector('.link');
const LINKS = document.querySelectorAll('.link li');

document.addEventListener('DOMContentLoaded', menuControl);

function menuControl() {
  MENU_BTN.addEventListener('click', () => {
    NAV_LINK.style.display = 'block';
    EXIT_BTN.style.display = 'block';
  });

  EXIT_BTN.addEventListener('click', () => {
    NAV_LINK.style.display = 'none';
    EXIT_BTN.style.display = 'none';
  });

  LINKS.forEach((link) => {
    link.addEventListener('click', () => NAV_LINK.style.display = 'none');
    link.addEventListener('click', () => EXIT_BTN.style.display = 'none')
  })

  MENU_BTN.addEventListener('click', menuAnimator);
  
  function menuAnimator() {
    let animate = null;
    let position = -100;
    clearInterval(animate);
    animate = setInterval(slideIn, 2);
    // function for slideIn effect
    function slideIn() {
      if (position === 0) {
        clearInterval(animate)
      } else {
        position++;
        NAV_LINK.style.right = `${position}%`;
      }
    }
  }
}



