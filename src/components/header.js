import logoImage from '../assets/images/OfficialLogo.png';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <img src="${logoImage}" alt="TAEPL Logo" class="sidebar-logo">
        <button class="sidebar-close" id="sidebar-close" aria-label="Close menu">×</button>
      </div>
      
      <nav class="sidebar-nav">
        <a href="#home" class="sidebar-link">Home</a>
        
        <div class="sidebar-group">
          <button class="sidebar-link dropdown-toggle" data-target="company-menu">Company</button>
          <div class="sidebar-submenu" id="company-menu">
            <a href="#about" class="sidebar-sublink">About Us</a>
            <a href="#companies" class="sidebar-sublink">Companies</a>
            <a href="#leadership" class="sidebar-sublink">Leadership</a>
            <a href="#policies" class="sidebar-sublink">Corporate Policies</a>
            <a href="#downloads" class="sidebar-sublink">Downloads</a>
            <a href="#newsletter" class="sidebar-sublink">Newsletter</a>
            <a href="#events" class="sidebar-sublink">Events</a>
          </div>
        </div>

        <div class="sidebar-group">
          <button class="sidebar-link dropdown-toggle" data-target="business-menu">Business</button>
          <div class="sidebar-submenu" id="business-menu">
            <a href="#services" class="sidebar-sublink">Services</a>
            <a href="#products" class="sidebar-sublink">Products</a>
            <a href="#beyond" class="sidebar-sublink">Beyond Engineering</a>
          </div>
        </div>

        <div class="sidebar-group">
          <button class="sidebar-link dropdown-toggle" data-target="community-menu">Community</button>
          <div class="sidebar-submenu" id="community-menu">
            <a href="#health" class="sidebar-sublink">Health</a>
            <a href="#education" class="sidebar-sublink">Education</a>
            <a href="#environment" class="sidebar-sublink">Environment</a>
            <a href="#empowerment" class="sidebar-sublink">Empowerment</a>
          </div>
        </div>

        <a href="#careers" class="sidebar-link">Careers</a>
        <a href="#contact" class="sidebar-link">Contact Us</a>
        <a href="#login" class="sidebar-link sidebar-login">Login</a>
      </nav>
    </aside>

    <div class="header-container">
      <div class="header-left">
        <img src="${logoImage}" alt="TAEPL Logo" class="header-logo">
        <div class="header-branding">
          <h1 class="company-name">THIRUANNAMALAIYAR ENGINEERS</h1>
          <p class="company-subtitle">(OPC) PRIVATE LIMITED</p>
        </div>
      </div>

      <button class="hamburger-btn" id="hamburger-btn" aria-label="Toggle menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <nav class="nav-menu" id="nav-menu">
        <a href="#home" class="nav-link">Home</a>
        
        <div class="nav-dropdown">
          <button class="nav-link dropdown-toggle">Company <span class="dropdown-arrow">▼</span></button>
          <div class="dropdown-menu">
            <a href="#about" class="dropdown-item">About Us</a>
            <a href="#companies" class="dropdown-item">Companies</a>
            <a href="#leadership" class="dropdown-item">Leadership</a>
            <a href="#policies" class="dropdown-item">Corporate Policies</a>
            <a href="#downloads" class="dropdown-item">Downloads</a>
            <a href="#newsletter" class="dropdown-item">Newsletter</a>
            <a href="#events" class="dropdown-item">Events</a>
          </div>
        </div>

        <div class="nav-dropdown">
          <button class="nav-link dropdown-toggle">Business <span class="dropdown-arrow">▼</span></button>
          <div class="dropdown-menu">
            <a href="#services" class="dropdown-item">Services</a>
            <a href="#products" class="dropdown-item">Products</a>
            <a href="#beyond" class="dropdown-item">Beyond Engineering</a>
          </div>
        </div>

        <div class="nav-dropdown">
          <button class="nav-link dropdown-toggle">Community <span class="dropdown-arrow">▼</span></button>
          <div class="dropdown-menu">
            <a href="#health" class="dropdown-item">Health</a>
            <a href="#education" class="dropdown-item">Education</a>
            <a href="#environment" class="dropdown-item">Environment</a>
            <a href="#empowerment" class="dropdown-item">Empowerment</a>
          </div>
        </div>

        <a href="#careers" class="nav-link">Careers</a>
        <a href="#contact" class="nav-link">Contact Us</a>
        <a href="#login" class="nav-link nav-login">Login</a>
      </nav>
    </div>
  `;
  return header;
}
