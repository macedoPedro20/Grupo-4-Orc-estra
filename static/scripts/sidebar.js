// Seleciona os elementos
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebarMobile = document.getElementById('sidebarMobile');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Função para abrir/fechar sidebar
function toggleSidebar() {
  sidebarMobile.classList.toggle('sidebar--open');
  sidebarOverlay.classList.toggle('sidebar--open');
}

// Clique no botão hamburguer
mobileMenuBtn.addEventListener('click', toggleSidebar);

// Clique no overlay fecha o menu
sidebarOverlay.addEventListener('click', toggleSidebar);
