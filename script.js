const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');

// فتح وغلق المنيو
menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

// Fade-in Resume items عند النزول
const resumeItems = document.querySelectorAll('.resume-item');

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  resumeItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < triggerBottom) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener('scroll', handleScroll);