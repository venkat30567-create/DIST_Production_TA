# Contact Form Implementation Guide

## Overview
The "Get In Touch" contact form has been completely redesigned with comprehensive validation, security measures, and error handling.

## Features Implemented

### 1. **Form Fields**
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Message/Body Content (required)

### 2. **Client-Side Validation**

#### Name Validation
- Required field
- Minimum 2 characters
- Maximum 100 characters
- Script injection detection

#### Email Validation
- Required field
- RFC 5322 simplified regex validation
- Maximum 254 characters (RFC compliant)

#### Phone Validation
- Required field
- Minimum 10 digits
- Maximum 15 digits
- Accepts international formats (+, -, (, ), spaces)
- Detects invalid characters

#### Message Validation
- Required field
- Minimum 10 characters
- Maximum 2000 characters
- Script injection detection

### 3. **Security Features**

#### XSS Prevention
- Input sanitization using `textContent`
- Pattern matching to detect script injection attempts
- HTML entity escaping for display
- Prevents JavaScript injection in all input fields

#### CSRF Protection
- `X-Requested-With: XMLHttpRequest` header
- Should be combined with SameSite cookie attributes on server

#### Input Sanitization
- All user input is sanitized before display
- Script tags, event handlers, and iframe injection attempts are blocked
- Special characters are escaped

### 4. **Error Messages**
Real-time validation feedback:
- Displays below each field
- Red error state on invalid inputs
- Clear, user-friendly error messages
- Errors clear when input becomes valid

### 5. **Success/Error Notifications**

#### Success Message
- Shows after successful submission
- Displays: "Your request will be processed and our team will get in touch with you shortly."
- Auto-hides after 6 seconds
- Form is automatically reset

#### Error Alerts
- Shows detailed error messages
- Persistent until user closes
- Red alert styling for visibility

### 6. **User Experience**

#### Real-Time Validation
- Validates on blur (when user leaves field)
- Provides immediate feedback
- Prevents frustration with delayed validation

#### Submit Button States
- Shows "Processing..." while submitting
- Disabled during submission
- Prevents duplicate submissions
- Hover effects for visual feedback

#### Form Reset
- Automatically resets after successful submission
- Clears all error states
- Ready for next submission

## Integration Guide

### Option 1: Express.js Backend

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(express.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
});

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form endpoint
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate inputs
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Optional: Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'We Received Your Request',
      html: `
        <h2>Thank You!</h2>
        <p>Dear ${name},</p>
        <p>We received your message and our team will get in touch with you shortly.</p>
        <p>Best regards,<br>TAPEL Team</p>
      `,
    });

    // Save to database (using your preferred ORM)
    // const submission = await ContactForm.create({ name, email, phone, message });

    res.json({
      success: true,
      message: 'Your request has been received',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Option 2: Firebase Cloud Functions

```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

exports.submitContactForm = functions.https.onRequest((req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  transporter.sendMail(
    {
      from: process.env.ADMIN_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    },
    (error) => {
      if (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
      }

      res.json({ success: true, message: 'Request received' });
    }
  );
});
```

### Option 3: Serverless (AWS Lambda)

```python
import json
import boto3
import os

ses = boto3.client('ses', region_name='us-east-1')

def lambda_handler(event, context):
    try:
        body = json.loads(event['body'])
        name = body.get('name')
        email = body.get('email')
        phone = body.get('phone')
        message = body.get('message')

        if not all([name, email, phone, message]):
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Missing required fields'})
            }

        # Send email via SES
        ses.send_email(
            Source=os.environ['SENDER_EMAIL'],
            Destination={'ToAddresses': [os.environ['ADMIN_EMAIL']]},
            Message={
                'Subject': {'Data': f'New Contact from {name}'},
                'Body': {
                    'Html': {
                        'Data': f'''
                            <h2>New Contact Request</h2>
                            <p><strong>Name:</strong> {name}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Phone:</strong> {phone}</p>
                            <p><strong>Message:</strong> {message}</p>
                        '''
                    }
                }
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps({'success': True})
        }

    except Exception as e:
        print(f'Error: {str(e)}')
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }
```

## Environment Variables

Create a `.env` file with the following:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@tapel.com
EMAIL_TO=contact@tapel.com
ADMIN_EMAIL=admin@tapel.com
CONTACT_EMAIL=contact@tapel.com
SENDER_EMAIL=noreply@tapel.com
```

## Form Submission Flow

1. **User fills form** → Real-time validation
2. **Clicks Submit** → Client-side validation
3. **Valid data** → Encrypted HTTPS POST to `/api/contact`
4. **Server receives** → Server-side validation & sanitization
5. **Process submission** → Store in DB, send emails
6. **Success response** → Show success message
7. **Form reset** → Ready for next submission

## Testing the Form

### Local Testing (Mock Backend)
The form includes a mock backend that stores submissions in `localStorage`. Open browser DevTools Console and run:

```javascript
// View all submissions
JSON.parse(localStorage.getItem('contactSubmissions'))

// Clear submissions
localStorage.clear()
```

### Backend Testing
Use tools like Postman or cURL:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "This is a test message"
  }'
```

## Security Checklist

- [ ] Enable HTTPS for all form submissions
- [ ] Implement rate limiting (5 requests per 15 minutes per IP)
- [ ] Add CAPTCHA (reCAPTCHA v3 or hCaptcha) for bot prevention
- [ ] Set SameSite cookie attributes
- [ ] Implement database encryption for stored submissions
- [ ] Add spam filters and content validation
- [ ] Implement email verification
- [ ] Add GDPR compliance (data retention policy)
- [ ] Use CORS headers properly
- [ ] Log all submissions with timestamps and IP addresses
- [ ] Implement honeypot fields for bot detection
- [ ] Add security headers (CSP, X-Frame-Options, etc.)

## Validation Rules Summary

| Field | Min Length | Max Length | Pattern | Required |
|-------|-----------|-----------|---------|----------|
| Name | 2 | 100 | No scripts | Yes |
| Email | - | 254 | RFC 5322 | Yes |
| Phone | 10 digits | 15 digits | Intl format | Yes |
| Message | 10 | 2000 | No scripts | Yes |

## Troubleshooting

### Form not submitting
1. Check browser console for errors
2. Verify all required fields are filled
3. Check if `/api/contact` endpoint is available
4. Check network tab for failed requests

### Validation errors not showing
1. Ensure fields lose focus to trigger validation
2. Check that error message elements exist
3. Verify CSS is loaded correctly

### Success message not appearing
1. Check browser console for errors
2. Verify form submission was successful (200 response)
3. Check localStorage in mock backend mode

## Support & Maintenance

For issues or questions about the contact form implementation, refer to:
- [api/contact.js](./api/contact.js) - Backend handler template
- [src/components/contact.js](./src/components/contact.js) - Frontend implementation
- [src/styles/main.css](./src/styles/main.css) - Form styling
