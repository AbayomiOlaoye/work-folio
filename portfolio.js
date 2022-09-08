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

// Create modal for project info
const modalInformation = [
  {
    projectId: 'Modal menu',
    projectName: ['Multi - Post stories', 'Multi-post story'],
    projectSummaryD: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.",
    projectSummaryM: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    projectFeaturedImage: ['./images/modal.svg', './images/mobile_modal.png'],
    projectTechnologies: ['html', 'Ruby on rails', 'css', 'Github'],
    projectLiveLink: '#',
    projectSourceRepo: 'https://www.github.com/AbayomiOlaoye/work-folio',
  },
];
// End of Objects collection

document.addEventListener('DOMContentLoaded', () => {
  /* Helper functions for work-section framework */
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
            ${card.projectTechnologies.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
          <button type="button" class="view robo-head">See Project</button>
        </div>
      </div>
    `;
  }
  // Mapping objects for dynamic page loading
  document.querySelector('.work-folio').innerHTML = projectInfo.map(creatWorksCard).join('');

  // Destructuring projectName for all screen types:
  const [mobile, desktop] = modalInformation[0].projectName;

  // Choose tech skills to display on appropriate screen
  function techSkills(stack) {
    if (stack.includes('Github')) {
      stack = `<li class="hide">${stack}</li>`;
    } else {
      stack = `<li>${stack}</li>`;
    }
    return stack;
  }

  document.querySelector('.modalInfo').innerHTML = `
    <div class="modal-container">
      <div class="grp-header">
        <h2 class="remove br-header">${mobile}</h2>
        <h2 class="hide br-header">${desktop}</h2>
        <img src="./images/icons/exit.svg"
        class="exit-icon modal"
        alt="close button">
      </div>
      <img src="${modalInformation[0].projectFeaturedImage[0]}" class="placeholder modal hide" alt="project snapshot">
      <img src="${modalInformation[0].projectFeaturedImage[1]}" class="placeholder modal remove" alt="project snapshot">
      <p class="text modal hide">${modalInformation[0].projectSummaryD}</p>
      <p class="text modal remove">${modalInformation[0].projectSummaryM}</p>
      <ul class="tech">
        ${modalInformation[0].projectTechnologies.map(techSkills).join('')}
      </ul>
      <div class=grp-btn>
        <button type="button" class="view robo-head modal">See Live <img src="./images/icons/go_live.svg" alt="view live page"></button>
        <button type="button" class="view robo-head modal">See Source <img src="./images/icons/github.png" alt="check code on github"></button>
      </div>
    </div>
  `;
});