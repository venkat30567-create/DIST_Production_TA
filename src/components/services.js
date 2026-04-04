export function createServicesSection() {
  const services = document.createElement('section');
  services.className = 'services';
  services.id = 'services';
  services.innerHTML = `
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
            </svg>
          </div>
          <h3>Engineering Consultancy</h3>
          <p>Structural design, civil & mechanical engineering consultancy, and technical feasibility studies for complex projects.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 9v3M9 12h6"></path>
            </svg>
          </div>
          <h3>Design Services</h3>
          <p>Industrial design, product design, CAD modeling, and custom engineering solutions tailored to your needs.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="2" y1="20" x2="22" y2="20"></line>
            </svg>
          </div>
          <h3>IT Solutions</h3>
          <p>Software development, web applications, mobile solutions, and digital transformation services.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
          <h3>Project Management</h3>
          <p>End-to-end project planning, execution, quality assurance, and on-time delivery guarantee.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3>Software Development</h3>
          <p>Custom software applications, enterprise solutions, cloud-based systems, and cutting-edge technology implementation.</p>
        </div>
        <div class="service-card">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"></polygon>
              <line x1="12" y1="12" x2="12" y2="22"></line>
              <line x1="12" y1="12" x2="22" y2="7"></line>
              <line x1="12" y1="12" x2="2" y2="7"></line>
            </svg>
          </div>
          <h3>Specialized Designs</h3>
          <p>Advanced UI/UX design, brand identity development, architectural visualization, and specialized technical graphics.</p>
        </div>
      </div>
    </div>
  `;
  return services;
}
