// Scroll effect for navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(31, 41, 55, 0.9)';
  } else {
    navbar.style.backgroundColor = 'rgba(31, 41, 55, 1)';
  }
});

// Toggle menu for mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
