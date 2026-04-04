# EmailJS Setup Instructions for TAPEL PWA

## ✅ Installation Complete!

EmailJS has been successfully integrated into your contact form. Now follow these steps to activate email sending:

---

## **Step 1: Create Free EmailJS Account**

1. Go to https://www.emailjs.com
2. Click **"Sign Up Free"**
3. Create account with email/password or GitHub
4. **Verify your email** (check inbox)

---

## **Step 2: Get Your PUBLIC KEY**

1. After login, go to **Account** → **API Keys**
2. Copy your **Public Key** (16-character alphanumeric string)
3. Keep it safe - you'll need it in Step 4

**Example:**
```
abc123def456ghi7
```

---

## **Step 3: Connect Your Email Service**

### **Option A: Connect Gmail (Recommended)**

1. In EmailJS dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Select **Gmail**
4. Name it: `Gmail` (or your choice)
5. **Authorize** with your Gmail account
6. Copy the **Service ID** (looks like: `service_abc123def456`)

### **Option B: Connect Outlook**

1. In EmailJS dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Select **Outlook/Office 365**
4. Follow authorization steps
5. Copy the **Service ID**

---

## **Step 4: Create Email Template**

1. Go to **Email Templates** in EmailJS dashboard
2. Click **"Create New Template"**
3. **Template Name:** `contact_form` (or your choice)
4. **Copy this template:**

```
Subject: New Contact Request from {{from_name}}

---

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---

Reply-to: {{reply_to}}
```

5. **Variable Names MUST match exactly:**
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{message}}`
   - `{{reply_to}}`

6. **Send To:** Leave as default (will send to your connected email)
7. Click **"Save Template"**
8. Copy the **Template ID** from the template

---

## **Step 5: Update Your Configuration**

Edit [src/components/contact.js](src/components/contact.js) and replace the placeholders:

```javascript
// Lines 12-14 - REPLACE THESE:
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE';     // ← Paste Public Key here
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID_HERE';     // ← Paste Service ID here
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID_HERE';   // ← Paste Template ID here
```

**Example after replacement:**
```javascript
const EMAILJS_PUBLIC_KEY = 'abc123def456ghi7jkl890mn';
const EMAILJS_SERVICE_ID = 'service_a1b2c3d4e5f6g7h8';
const EMAILJS_TEMPLATE_ID = 'template_x1y2z3w4v5u6t7s8';
```

---

## **Step 6: Build & Test**

```bash
npm run build
npx serve dist -p 3000
```

1. Open http://localhost:3000 in browser
2. Go to **"Connect With Us"** section
3. Fill out the form with test data
4. Click **"Submit Request"**
5. Check your email inbox for the submission

---

## **Where Emails Will Go**

Currently, emails are sent to your **connected email service's default inbox**.

### **To Change Recipient Email:**

Edit [src/components/contact.js](src/components/contact.js) line 17:

```javascript
const COMPANY_EMAIL = 'thiruannamalaiyarengineers@taepl.com'; // ← Change this

// Examples:
const COMPANY_EMAIL = 'info@company.com';
const COMPANY_EMAIL = 'contact@company.com';
const COMPANY_EMAIL = 'admin@company.com';
```

---

## **Troubleshooting**

### **Issue: "Email service not configured"**
**Solution:** Make sure you've replaced ALL three placeholders:
- PUBLIC_KEY (not "YOUR_PUBLIC_KEY_HERE")
- SERVICE_ID (not "YOUR_SERVICE_ID_HERE")
- TEMPLATE_ID (not "YOUR_TEMPLATE_ID_HERE")

### **Issue: Email not being sent**
1. Check browser console for errors (F12)
2. Verify your Public Key, Service ID, Template ID in contact.js
3. Check EmailJS dashboard for service status
4. Ensure email service (Gmail/Outlook) is authenticated

### **Issue: Template variables not mapping**
1. In EmailJS, check **variable names match exactly**:
   - Must be: `{{from_name}}` (not `{{name}}`)
   - Must be: `{{from_email}}` (not `{{email}}`)
   - Must be: `{{reply_to}}` (not `{{replyTo}}`)

### **Issue: Error 422 or 400**
1. Make sure template ID is correct
2. Verify variable names in template
3. Ensure Service ID is active
4. Check EmailJS dashboard for service status

---

## **Email Sending Limits (Free Tier)**

- **200 emails per month** (free plan)
- **Emails per second:** 1 email/second
- **Attachments:** Not supported on free tier
- **Template variables:** Unlimited

If you exceed limits, upgrade to EmailJS paid plan or use Mailgun/SendGrid.

---

## **What Happens After Submission?**

1. ✅ Validation on frontend
2. ✅ User sees "Processing..."
3. ✅ Email sent to: `thiruannamalaiyarengineers@taepl.com`
4. ✅ Success message shown: "Your request will be processed..."
5. ✅ Form automatically resets
6. ✅ Form data stored in browser localStorage as backup

---

## **Next Steps**

1. Create EmailJS account → https://www.emailjs.com
2. Connect your email service (Gmail/Outlook)
3. Create email template with variables
4. Copy Public Key, Service ID, Template ID
5. Update [src/components/contact.js](src/components/contact.js)
6. Build with `npm run build`
7. Test the form

---

## **Security Notes**

⚠️ **Important:**
- Your Public Key is **public** - it's meant to be exposed in frontend code
- **DO NOT** expose your Private Key or Secret Key
- EmailJS client-side validation is secure and trustworthy
- All data transmission uses HTTPS

---

## **FAQ**

**Q: Will emails be received automatically?**
A: Yes! Once configured correctly, form submissions are sent instantly.

**Q: Can I customize the email design?**
A: Yes, edit the template in EmailJS dashboard with HTML/CSS.

**Q: Can I send to multiple emails?**
A: Not directly via template. Use EmailJS dashboard "Additional Recipients" feature.

**Q: Is there a reply function?**
A: Users can reply to emails they receive. The `reply_to` field is set to user's email.

**Q: What if I reach the 200 email limit?**
A: Upgrade EmailJS plan or configure a different email service.

---

## **Support**

- **EmailJS Help:** https://dashboard.emailjs.com/admin/help
- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Your TAPEL Form:** [src/components/contact.js](src/components/contact.js)

---

**Setup Time:** ~15 minutes  
**Cost:** Free (200 emails/month)  
**Status:** ✅ Ready to configure

**Any issues? Check the troubleshooting section above!**
