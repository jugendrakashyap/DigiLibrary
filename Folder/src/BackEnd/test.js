// script.js

const images = [
    'url("image1.jpg")',
    'url("image2.jpg")',
    'url("image3.jpg")',
  ];
  
  let currentIndex = 0;
  
  const heroSection = document.querySelector('.hero');
  
  function changeBackground() {
    heroSection.style.setProperty('--background-image', images[currentIndex]);
    heroSection.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Change background every 2 seconds
  setInterval(changeBackground, 2000);
  
  // Initialize the first background
  changeBackground();
  