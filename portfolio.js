// Logic for Hamburger menu control for small screens
const MENU_BTN = document.querySelector('.menu-icon');
const EXIT_BTN = document.querySelector('.exit-icon');
const NAV_LINK = document.querySelector('.link');
const LINKS = document.querySelectorAll('.link li');

// Logic for flipping controls
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
    link.addEventListener('click', () => {
      NAV_LINK.style.display = 'none';
      EXIT_BTN.style.display = 'none';
    });
  });
  // -----End---------//

  function menuAnimator() {
    let animate = null;
    let position = -100;
    clearInterval(animate);
    // function for slideIn effect
    function slideIn() {
      if (position === 0) {
        clearInterval(animate);
      } else {
        position += 1;
        NAV_LINK.style.right = `${position}%`;
      }
    }
    animate = setInterval(slideIn, 2);
  }
  // Calling Animator function
  MENU_BTN.addEventListener('click', menuAnimator);
}
document.addEventListener('DOMContentLoaded', menuControl);
/* End of Menu Logic */

// JavaScript Objects for project information and pop-ups
const projectInfo = [
  {
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/placeholder.png',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/placeholder.png',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/placeholder.png',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/placeholder.png',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },
];
// End of Objects collection