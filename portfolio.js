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
    projectID: 'one',
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/placeholder.png',
    altText: 'project snapshot',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectID: 'two',
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/placeholder.png',
    altText: 'project snapshot',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectID: 'three',
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/placeholder.png',
    altText: 'project snapshot',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },

  {
    projectID: 'four',
    projectName: 'Multi-Post Stores',
    projectSummary: "A daily selection of privately personalized reads; no accounts or sign-ups required has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    projectFeaturedImage: './images/placeholder.png',
    altText: 'project snapshot',
    projectTechnologies: ['css', 'html', 'bootstrap', 'Ruby'],
    projectLiveLink: '#',
    projectSourceRepo: '#',
  },
];
// End of Objects collection

/* Helper functions for work-section framework*/
function creatWorksCard(card) {
  return `
    <div class="pro ${card.projectID}">
      <img src="${card.projectFeaturedImage}"
      alt="${card.altText}"
      class="placeholder">
      <div class="briefs">
        <h3 class="br-header">${card.projectName}</h3>
        <p class="text">${card.projectSummary}</p>
        <ul class="tech">
          ${card.projectTechnologies.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
        <button type="button" class="view robo-head">See Project</button>
      </div>
    </div>
  `
}

document.querySelector('.work-folio').innerHTML = projectInfo.map(creatWorksCard).join('');