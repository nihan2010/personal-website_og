# 📧 Email Setup Instructions for Contact Form

## ✅ **CONTACT FORM EMAIL NOTIFICATIONS SETUP**

Your contact form is now configured to send email notifications to **nihannajeebpmkd@gmail.com** when users submit the form. Here's how to complete the setup:

### 🔧 **Step 1: Generate Gmail App Password**

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Security → 2-Step Verification** (enable if not already enabled)
3. **Security → App passwords**
4. **Generate app password** for "Mail" application
5. **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### 📝 **Step 2: Update Environment Variables**

1. **Edit** `server/.env` file
2. **Replace** `your-gmail-app-password-here` with your actual app password:

```env
EMAIL_USER=nihannajeebpmkd@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 🚀 **Step 3: Restart the Server**

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✨ **Features Implemented:**

### 📨 **Email Notifications:**
- ✅ **Instant email to nihannajeebpmkd@gmail.com** when form is submitted
- ✅ **Beautiful HTML email template** with message details
- ✅ **Auto-reply confirmation** sent to the user
- ✅ **Professional email styling** with gradients and branding

### 📋 **Email Content Includes:**
- 👤 **Sender's name and email**
- 📅 **Timestamp of submission**
- 💬 **Full message content**
- 🔗 **Quick reply button**
- ✨ **Professional HTML formatting**

### 🔒 **Security Features:**
- ✅ **Input validation** (all fields required)
- ✅ **Error handling** with user-friendly messages
- ✅ **Gmail App Password** (more secure than regular password)
- ✅ **Environment variables** for sensitive data

### 🌐 **Updated Social Links:**
- ✅ **GitHub**: https://github.com/nihan2010
- ✅ **LinkedIn**: https://www.linkedin.com/in/nihan-najeeb-b287b22b9/
- ✅ **Instagram**: https://www.instagram.com/nhnneei/
- ✅ **Email**: nihannajeebpmkd@gmail.com
- ✅ **Phone**: +91 8547137703

## 🧪 **Testing the Contact Form:**

1. **Fill out the contact form** on your website
2. **Check nihannajeebpmkd@gmail.com** for the notification email
3. **Check the sender's email** for the auto-reply confirmation
4. **Verify all links and formatting** work correctly

## 🎨 **Email Templates:**

The emails include:
- 🎨 **Gradient backgrounds** matching your website theme
- 📱 **Mobile-responsive design**
- 🔗 **Clickable reply buttons**
- ✨ **Professional branding**
- 📝 **Clear message formatting**

Your contact form is now fully functional with professional email notifications! 🚀