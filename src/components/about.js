export function createAboutSection() {
  const about = document.createElement('section');
  about.className = 'about';
  about.id = 'about';
  about.innerHTML = `
    <div class="container about-container">
      <h2 class="section-title">Who We Are</h2>
      <div class="about-cards-grid">
        <div class="about-card">
          <h3>Our Vision</h3>
          <p>To become a leading engineering and technology solutions provider, driving innovation and sustainable development across industries.</p>
        </div>
        <div class="about-card highlight">
          <h3>What We Offer</h3>
          <ul>
            <li>✓ Engineering Consultancy</li>
            <li>✓ Design Services</li>
            <li>✓ IT Solutions</li>
            <li>✓ Project Management</li>
            <li>✓ Technical Support</li>
          </ul>
        </div>
        <div class="about-card">
          <h3>Our Mission</h3>
          <p>Deliver quality-driven engineering solutions and IT services with integrity, ensuring client satisfaction and fostering technological advancement.</p>
        </div>
      </div>
    </div>
  `;
  return about;
}
