document.addEventListener('DOMContentLoaded', (event) => {
  const menuToggle = document.getElementById('menu-icon');
  const nav = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
  });
});