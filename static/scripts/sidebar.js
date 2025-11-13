const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebarMobile = document.getElementById('sidebarMobile');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const hamburgerIcon = document.querySelector('.hamburger-icon');

const isIndexPage = window.location.pathname.endsWith('index.html');
const basePath = isIndexPage ? './static/img/' : '../static/img/';

function toggleSidebar() {
  const isOpen = sidebarMobile.classList.toggle('sidebar--open');
  sidebarOverlay.classList.toggle('sidebar--open');
  
  if (isOpen) {
    hamburgerIcon.src = `${basePath}hamburger.svg`; 
  } else {
    hamburgerIcon.src = `${basePath}haburguer_fechado.svg`; 
  }
}

mobileMenuBtn.addEventListener('click', toggleSidebar);

sidebarOverlay.addEventListener('click', toggleSidebar);

const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebarMobile.classList.remove('sidebar--open');
    sidebarOverlay.classList.remove('sidebar--open');
    hamburgerIcon.src = `${basePath}haburguer_fechado.svg`;
  });
});