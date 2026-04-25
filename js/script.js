// simple future use
console.log("Construction website loaded");

// Mobile Navigation Toggle
function toggleNav() {
  const nav = document.getElementById('nav-menu');
  nav.classList.toggle('active');
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-menu').classList.remove('active');
    });
  });
});

// Project Slider
let sliderIndex = 0;

function slideMove(n) {
  showSlide(sliderIndex += n);
}

function showSlide(n) {
  const sliders = document.querySelectorAll('.project-slider');
  sliders.forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    if (n >= slides.length) { sliderIndex = 0; }
    if (n < 0) { sliderIndex = slides.length - 1; }
    
    const offset = -sliderIndex * 100;
    slider.querySelector('.slides-wrapper').style.transform = `translateX(${offset}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[sliderIndex]) dots[sliderIndex].classList.add('active');
  });
}

// Initialize sliders
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-slider').forEach((slider, idx) => {
    const slideCount = slider.querySelectorAll('.slide').length;
    const dotsContainer = slider.querySelector('.slider-dots');
    
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.onclick = () => { sliderIndex = i; showSlide(sliderIndex); };
      dotsContainer.appendChild(dot);
    }
    
    showSlide(0);
  });
});