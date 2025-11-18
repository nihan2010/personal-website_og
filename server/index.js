const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/build')));

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all fields.'
      });
    }

    // Email content for Nihan
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'nihannajeebpmkd@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">✨ New Contact Form Submission</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">📝 Message Details:</h3>
              
              <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
              <p style="margin: 10px 0;"><strong>📅 Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-bottom: 15px;">💬 Message:</h3>
              <p style="line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block;">Reply to ${name}</a>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio website contact form.</p>
            </div>
          </div>
        </div>
      `
    };

    // Auto-reply email for the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Thank you for contacting Nihan Najeeb P! 🚀',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; text-align: center;">🎉 Thank You for Reaching Out!</h2>
            
            <p style="color: #374151; line-height: 1.6;">Hi ${name},</p>
            
            <p style="color: #374151; line-height: 1.6;">
              Thank you for your message! I really appreciate you taking the time to contact me. 
              I've received your message and will get back to you as soon as possible, typically within 24 hours.
            </p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e40af; margin-bottom: 10px;">📋 Your Message Summary:</h3>
              <p style="color: #374151; margin: 5px 0;"><strong>Subject:</strong> Contact Form Inquiry</p>
              <p style="color: #374151; margin: 5px 0;"><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              In the meantime, feel free to check out my latest projects on 
              <a href="https://github.com/nihan2010" style="color: #3b82f6;">GitHub</a> or connect with me on 
              <a href="https://www.linkedin.com/in/nihan-najeeb-b287b22b9/" style="color: #3b82f6;">LinkedIn</a>.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #6b7280; font-style: italic;">Looking forward to connecting with you!</p>
              <p style="color: #2563eb; font-weight: bold; font-size: 18px;">Nihan Najeeb P</p>
              <p style="color: #6b7280; font-size: 14px;">UI/UX Designer & Frontend Developer</p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px;">
                This is an automated response. Please do not reply to this email directly.
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    console.log('✅ Contact form email sent successfully:', { name, email, timestamp: new Date().toISOString() });
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon. Please check your email for confirmation.' 
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly at nihannajeebpmkd@gmail.com' 
    });
  }
});

// Serve React app for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});