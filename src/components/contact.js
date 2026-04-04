import emailjs from '@emailjs/browser';

// ========================================
// EMAILJS CONFIGURATION
// ========================================
// 1. Go to https://www.emailjs.com
// 2. Sign up (free account)
// 3. Add your email service (Gmail/Outlook)
// 4. Copy your PUBLIC_KEY and set it below
// 5. Create an email template and get SERVICE_ID, TEMPLATE_ID
// ========================================

// EmailJS Credentials (Configured)
const EMAILJS_PUBLIC_KEY = 'VpWy5X07Uezvkq-y0';
const EMAILJS_SERVICE_ID = 'service_y648tnl';
const EMAILJS_TEMPLATE_ID = 'template_qlousob';

// Company email where submissions should go
const COMPANY_EMAIL = 'thiruannamalaiyarengineers@taepl.com';

// Initialize EmailJS (only once)
let emailjsInitialized = false;

function initializeEmailJS() {
  if (!emailjsInitialized && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    emailjsInitialized = true;
  }
}

export function createContactSection() {
  const contact = document.createElement('section');
  contact.className = 'contact';
  contact.id = 'contact';
  contact.innerHTML = `
    <div class="contact-wrapper">
      <div class="contact-container">
        <div class="contact-left">
          <h2 class="contact-title">Connect With Us</h2>
          <p class="contact-description">Have a question, idea, or project in mind? We’re here to help. Our team is ready to provide expert guidance, practical solutions, and responsive support tailored to your unique business needs. Let’s work together to turn your vision into reality.</p>
          <div class="contact-features">
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
                </svg>
              </div>
              <h4>Tailored Solutions</h4>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h4>Expert Assistance</h4>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                  <polyline points="9 13 15 13"></polyline>
                  <polyline points="9 17 15 17"></polyline>
                </svg>
              </div>
              <h4>Quick Response</h4>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <div class="enquire-card">
            <h3 class="enquire-title">Enquire Now</h3>
            <div class="form-messages" id="formMessages"></div>
            <form class="enquire-form" id="contactForm">
              <div class="form-group full-width">
                <input type="text" class="form-input" id="contactName" placeholder="Full Name" required>
                <span class="error-message" id="nameError"></span>
              </div>
              <div class="form-group full-width">
                <input type="email" class="form-input" id="contactEmail" placeholder="Email Address" required>
                <span class="error-message" id="emailError"></span>
              </div>
              <div class="form-group full-width">
                <input type="tel" class="form-input" id="contactPhone" placeholder="Phone Number" required>
                <span class="error-message" id="phoneError"></span>
              </div>
              <div class="form-group full-width">
                <textarea class="form-input textarea-input" id="contactMessage" placeholder="Your Message" rows="5" required></textarea>
                <span class="error-message" id="messageError"></span>
              </div>
              <button type="submit" class="btn-submit-enquire">
                <span>Submit Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
  return contact;
}

// Form Validation and Submission Handler
export function initializeContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', handleContactFormSubmit);
  
  // Real-time validation
  document.getElementById('contactName').addEventListener('blur', validateName);
  document.getElementById('contactEmail').addEventListener('blur', validateEmail);
  document.getElementById('contactPhone').addEventListener('blur', validatePhone);
  document.getElementById('contactMessage').addEventListener('blur', validateMessage);
}

// Input sanitization function
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Name validation
function validateName() {
  const nameInput = document.getElementById('contactName');
  const nameError = document.getElementById('nameError');
  const name = nameInput.value.trim();

  if (!name) {
    nameError.textContent = 'Full name is required';
    nameInput.classList.add('input-error');
    return false;
  }
  
  if (name.length < 2) {
    nameError.textContent = 'Name must be at least 2 characters';
    nameInput.classList.add('input-error');
    return false;
  }

  if (name.length > 100) {
    nameError.textContent = 'Name must not exceed 100 characters';
    nameInput.classList.add('input-error');
    return false;
  }

  // Check for script injection patterns
  if (/<script|javascript:|<iframe|onerror=/gi.test(name)) {
    nameError.textContent = 'Invalid characters in name';
    nameInput.classList.add('input-error');
    return false;
  }

  nameError.textContent = '';
  nameInput.classList.remove('input-error');
  return true;
}

// Email validation
function validateEmail() {
  const emailInput = document.getElementById('contactEmail');
  const emailError = document.getElementById('emailError');
  const email = emailInput.value.trim();

  if (!email) {
    emailError.textContent = 'Email address is required';
    emailInput.classList.add('input-error');
    return false;
  }

  // RFC 5322 simplified email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address';
    emailInput.classList.add('input-error');
    return false;
  }

  if (email.length > 254) {
    emailError.textContent = 'Email address is too long';
    emailInput.classList.add('input-error');
    return false;
  }

  emailError.textContent = '';
  emailInput.classList.remove('input-error');
  return true;
}

// Phone validation
function validatePhone() {
  const phoneInput = document.getElementById('contactPhone');
  const phoneError = document.getElementById('phoneError');
  const phone = phoneInput.value.trim();

  if (!phone) {
    phoneError.textContent = 'Phone number is required';
    phoneInput.classList.add('input-error');
    return false;
  }

  // Remove all non-digit characters for validation
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length < 10) {
    phoneError.textContent = 'Phone number must have at least 10 digits';
    phoneInput.classList.add('input-error');
    return false;
  }

  if (digitsOnly.length > 15) {
    phoneError.textContent = 'Phone number is too long';
    phoneInput.classList.add('input-error');
    return false;
  }

  // Validate that it contains mostly digits and allowed characters
  if (!/^[\d\s\-\+\(\)\.]+$/.test(phone)) {
    phoneError.textContent = 'Phone number contains invalid characters';
    phoneInput.classList.add('input-error');
    return false;
  }

  phoneError.textContent = '';
  phoneInput.classList.remove('input-error');
  return true;
}

// Message validation
function validateMessage() {
  const messageInput = document.getElementById('contactMessage');
  const messageError = document.getElementById('messageError');
  const message = messageInput.value.trim();

  if (!message) {
    messageError.textContent = 'Message is required';
    messageInput.classList.add('input-error');
    return false;
  }

  if (message.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters';
    messageInput.classList.add('input-error');
    return false;
  }

  if (message.length > 2000) {
    messageError.textContent = 'Message must not exceed 2000 characters';
    messageInput.classList.add('input-error');
    return false;
  }

  // Check for script injection patterns
  if (/<script|javascript:|<iframe|onerror=/gi.test(message)) {
    messageError.textContent = 'Invalid content detected in message';
    messageInput.classList.add('input-error');
    return false;
  }

  messageError.textContent = '';
  messageInput.classList.remove('input-error');
  return true;
}

// Form submission handler
async function handleContactFormSubmit(e) {
  e.preventDefault();

  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isMessageValid = validateMessage();

  if (!isNameValid || !isEmailValid || !isPhoneValid || !isMessageValid) {
    return;
  }

  // Get form data
  const formData = {
    name: sanitizeInput(document.getElementById('contactName').value.trim()),
    email: sanitizeInput(document.getElementById('contactEmail').value.trim()),
    phone: sanitizeInput(document.getElementById('contactPhone').value.trim()),
    message: sanitizeInput(document.getElementById('contactMessage').value.trim()),
  };

  // Disable submit button
  const submitBtn = document.querySelector('.btn-submit-enquire');
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Processing...</span>';

  try {
    // Initialize EmailJS
    initializeEmailJS();

    // Check if EmailJS is properly configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE') {
      showErrorMessage(
        'Email service not configured. Please contact administrator.'
      );
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      return;
    }

    // Send email via EmailJS
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: COMPANY_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.email,
    });

    // Show success message
    showSuccessMessage();
    // Reset form
    document.getElementById('contactForm').reset();
    // Clear error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-input').forEach(el => el.classList.remove('input-error'));
  } catch (error) {
    console.error('Form submission error:', error);
    showErrorMessage(
      'Failed to send email. Please try again or contact us directly.'
    );
  } finally {
    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }
}

// Mock backend for testing (stores in localStorage)
function mockBackendSubmit(formData) {
  try {
    // Get existing submissions
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    
    // Add new submission
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    };
    
    submissions.push(submission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    console.log('Form submitted (stored locally):', submission);
    
    // Return a mock response
    return {
      ok: true,
      json: () => Promise.resolve({ success: true, id: submission.id }),
    };
  } catch (error) {
    console.error('Mock backend error:', error);
    return {
      ok: false,
      json: () => Promise.resolve({ success: false, error: error.message }),
    };
  }
}

// Show success message
function showSuccessMessage() {
  const messagesDiv = document.getElementById('formMessages');
  messagesDiv.innerHTML = `
    <div class="success-message">
      <div class="success-icon">✓</div>
      <div class="success-text">
        <h4>Thank You!</h4>
        <p>Your request will be processed and our team will get in touch with you shortly.</p>
      </div>
    </div>
  `;
  messagesDiv.style.display = 'block';

  // Auto-hide success message after 6 seconds
  setTimeout(() => {
    messagesDiv.style.display = 'none';
  }, 6000);
}

// Show error message
function showErrorMessage(message) {
  const messagesDiv = document.getElementById('formMessages');
  messagesDiv.innerHTML = `
    <div class="error-alert">
      <div class="error-icon">✕</div>
      <div class="error-text">
        <h4>Error</h4>
        <p>${sanitizeInput(message)}</p>
      </div>
    </div>
  `;
  messagesDiv.style.display = 'block';
}
