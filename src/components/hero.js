export function createHero() {
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.id = 'home';
  hero.innerHTML = `
    <div class="hero-content">
      <div class="hero-carousel-container">
        <div class="hero-carousel">
          <div class="carousel-slide active">
            <div class="carousel-image" style="background: linear-gradient(135deg, #FF9933 0%, #138808 100%);">
              <div class="carousel-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-icon">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
                </svg>
                <span>Engineering</span>
              </div>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="carousel-image" style="background: linear-gradient(135deg, #138808 0%, #001a4d 100%);">
              <div class="carousel-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-icon">
                  <path d="M12 5l-8 4v6l8 4 8-4v-6l-8-4"></path>
                  <polyline points="8 15 12 17 16 15"></polyline>
                  <polyline points="12 12 12 17"></polyline>
                </svg>
                <span>Innovation</span>
              </div>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="carousel-image" style="background: linear-gradient(135deg, #001a4d 0%, #FF9933 100%);">
              <div class="carousel-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-icon">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="2" y1="20" x2="22" y2="20"></line>
                </svg>
                <span>Technology</span>
              </div>
            </div>
          </div>
          <div class="carousel-slide">
            <div class="carousel-image" style="background: linear-gradient(135deg, #8B0000 0%, #FF9933 100%);">
              <div class="carousel-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-icon">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
                <span>Solutions</span>
              </div>
            </div>
          </div>
        </div>
        
        <button class="carousel-btn carousel-prev" id="carousel-prev">❮</button>
        <button class="carousel-btn carousel-next" id="carousel-next">❯</button>
        
        <div class="carousel-indicators">
          <span class="indicator active" data-slide="0"></span>
          <span class="indicator" data-slide="1"></span>
          <span class="indicator" data-slide="2"></span>
          <span class="indicator" data-slide="3"></span>
        </div>
      </div>

      <div class="hero-text">
        <h1 class="hero-title">Engineering Excellence Redefined</h1>
        <p class="hero-subtitle">Delivering innovative solutions through technical expertise, design innovation, and cutting-edge software solutions</p>
        <div class="hero-cta">
          <button class="btn btn-primary" onclick="document.querySelector('#about').scrollIntoView({behavior: 'smooth'})">Explore Services</button>
          <button class="btn btn-secondary" onclick="document.querySelector('#contact').scrollIntoView({behavior: 'smooth'})">Contact Us</button>
        </div>
      </div>
    </div>
  `;
  return hero;
}
