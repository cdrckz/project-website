document.addEventListener("DOMContentLoaded", () => {
  console.log("Website is loaded and ready!");
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle Hamburger Menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close Menu When a Link is Clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

//adjusting brightness when scroll
const parallaxBackground = document.querySelector(".parallax-background");
const homeSection = document.querySelector("#home");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Calculate opacity based on scroll position
  const opacity = Math.max(0.5, 1 - scrollY / homeSection.offsetHeight);

  // Apply filter to the background
  parallaxBackground.style.filter = `brightness(${opacity})`;
});


//sa audio itoo
const audio = document.getElementById("story-audio");
const toggleButton = document.getElementById('audio-toggle');
const stories = document.querySelectorAll(".story");
stories.forEach(story => {
  story.addEventListener('mouseover', () => {
    if (audio.paused) {
      audio.play();
    }
  });

  story.addEventListener('mouseleave', () => {
    audio.pause();
  });
});

// Play/Pause functionality for the button
toggleButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleButton.textContent = 'Pause Music';
  } else {
    audio.pause();
    toggleButton.textContent = 'Play Music';
  }
});



