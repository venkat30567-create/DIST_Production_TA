import { createHeader } from './header';
import { createHero } from './hero';
import { createAboutSection } from './about';
import { createServicesSection } from './services';
import { createContactSection, initializeContactForm } from './contact';
import { createFooter } from './footer';

export function initApp() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Create main container
  const main = document.createElement('main');
  main.className = 'app-container';

  // Add sections
  main.appendChild(createHeader());
  main.appendChild(createHero());
  main.appendChild(createAboutSection());
  main.appendChild(createServicesSection());
  main.appendChild(createContactSection());
  main.appendChild(createFooter());

  root.appendChild(main);

  // Initialize event listeners
  initializeEventListeners();
  initializeContactForm();
}

function initializeEventListeners() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const sidebarClose = document.getElementById('sidebar-close');
  const body = document.body;

  function closeSidebar() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    hamburgerBtn.classList.remove('active');
    body.classList.remove('sidebar-open');
  }

  function openSidebar() {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    hamburgerBtn.classList.add('active');
    body.classList.add('sidebar-open');
  }

  // Sidebar toggle
  if (hamburgerBtn && sidebar) {
    hamburgerBtn.addEventListener('click', () => {
      if (sidebar.classList.contains('active')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  // Close sidebar when overlay clicked
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar when close button clicked
  if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
  }

  // Sidebar dropdown toggles
  const sidebarDropdowns = document.querySelectorAll('.sidebar-group .dropdown-toggle');
  sidebarDropdowns.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle('open');
    });
  });

  // Close sidebar when sidebar link clicked
  const sidebarLinks = document.querySelectorAll('.sidebar-link:not(.dropdown-toggle)');
  sidebarLinks.forEach((link) => {
    link.addEventListener('click', closeSidebar);
  });

  // Desktop dropdown hover effects
  const navDropdowns = document.querySelectorAll('.nav-dropdown');
  navDropdowns.forEach((dropdown) => {
    dropdown.addEventListener('mouseenter', function () {
      if (window.innerWidth > 768) {
        this.querySelector('.dropdown-menu').style.display = 'flex';
      }
    });
    dropdown.addEventListener('mouseleave', function () {
      if (window.innerWidth > 768) {
        this.querySelector('.dropdown-menu').style.display = 'none';
      }
    });
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ============================================
  // Carousel Functionality
  // ============================================
  const carouselPrev = document.getElementById('carousel-prev');
  const carouselNext = document.getElementById('carousel-next');
  const indicators = document.querySelectorAll('.indicator');
  const slides = document.querySelectorAll('.carousel-slide');
  
  let currentSlide = 0;
  let autoRotateInterval;

  function showSlide(index) {
    // Wrap around
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Update slides
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');

    // Update indicators
    indicators.forEach((indicator) => indicator.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function resetAutoRotate() {
    clearInterval(autoRotateInterval);
    startAutoRotate();
  }

  // Event listeners for carousel buttons
  if (carouselPrev) {
    carouselPrev.addEventListener('click', () => {
      prevSlide();
      resetAutoRotate();
    });
  }

  if (carouselNext) {
    carouselNext.addEventListener('click', () => {
      nextSlide();
      resetAutoRotate();
    });
  }

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
      resetAutoRotate();
    });
  });

  // Start automatic rotation
  startAutoRotate();
}
