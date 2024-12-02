document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is loaded and ready!');
  });

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  //adjusting brightness when scroll
const parallaxBackground = document.querySelector('.parallax-background');
const homeSection = document.querySelector('#home');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Calculate opacity based on scroll position
  const opacity = Math.max(0.5, 1 - scrollY / homeSection.offsetHeight);

  // Apply filter to the background
  parallaxBackground.style.filter = `brightness(${opacity})`;
});