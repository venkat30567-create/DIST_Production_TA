export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.id = 'footer';
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="footer-title">About TAPEL</h3>
        <p class="footer-text">Thiruannamalaiyar Engineers (OPC) Private Limited </p>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-title">Quick Links</h3>
        <ul class="footer-links">
          <li><a href="#home" class="footer-link">Home</a></li>
          <li><a href="#about" class="footer-link">About Us</a></li>
          <li><a href="#services" class="footer-link">Services</a></li>
          <li><a href="#contact" class="footer-link">Contact Us</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-title">Contact Info</h3>
        <p class="footer-text">
          <strong>Email:</strong> <a href="mailto:thiruannamalaiyarengineers@taepl.com" class="footer-link">thiruannamalaiyarengineers@taepl.com </a><br>
          <strong>Phone:</strong> <a href="tel:+919444302100" class="footer-link">+91 9444302100</a><br>
          <strong>Address:</strong> <p>SF.No.169/2B1B Main Road,<br>Veppanganeri, Kilvayathinankuppam,<br> Katpadi,<br>Vellore – 632201, Tamil Nadu, India
        </p>
            <p>Monday to Saturday: 9:30 AM – 6:30 PM<br>Sunday: Closed</p>
        </p>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-copyright">
        <p>&copy; ${currentYear} Thiruannamalaiyar Engineers (OPC) Private Limited. All rights reserved.</p>
      </div>
      <div class="footer-policies">
        <a href="#privacy" class="footer-link">Privacy Policy</a>
        <span class="divider">|</span>
        <a href="#terms" class="footer-link">Terms & Conditions</a>
        <span class="divider">|</span>
        <a href="#disclaimer" class="footer-link">Disclaimer</a>
      </div>
    </div>
  `;
  return footer;
}
