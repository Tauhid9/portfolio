# Email Setup Guide - Contact Form

This guide explains how to set up email functionality for the contact form to automatically send messages to your Gmail.

## Prerequisites

- Node.js 16+ (already installed)
- nodemailer package (already installed)
- Gmail account (tauhidhasan2017bd@gmail.com)

## Step 1: Create Gmail App Password

1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character password
4. Copy this password (you'll need it in Step 2)

> **Note:** You need 2-Step Verification enabled on your Google Account for this to work.

## Step 2: Set Environment Variables

Create a `.env.local` file in the root directory with these credentials:

```
GMAIL_USER=tauhidhasan2017bd@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

**Important:** 
- Replace `your_16_character_app_password_here` with the actual password from Step 1
- Do NOT use your regular Gmail password
- The `.env.local` file is automatically in `.gitignore` and won't be pushed to GitHub

## Step 3: Deploy to Vercel (Optional)

If deploying to Vercel, add the environment variables in Vercel Project Settings:

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add:
   - `GMAIL_USER`: tauhidhasan2017bd@gmail.com
   - `GMAIL_APP_PASSWORD`: (your app password from Step 1)

## Features

### Email Sent to You (Admin)
When someone submits the form, you receive a professional email with:
- Sender's name, email, and subject
- Full message content
- Formatted HTML design
- Timestamp of submission
- Reply-to address (auto-filled with sender's email)

### Auto-Reply to Sender
The person who submitted the form automatically receives:
- Thank you message
- Confirmation their message was received
- Expected response time (24-48 hours)
- Your contact information
- Beautiful HTML formatting

## How It Works

1. User fills out contact form with name, email, subject, and message
2. Clicks "Send Message" button
3. Form data is sent to `/api/send-email` endpoint
4. Nodemailer connects to Gmail via SMTP
5. Two emails are sent:
   - Admin email (to your Gmail)
   - Auto-reply (to the sender)
6. User sees success/error message on form

## Troubleshooting

### "Failed to send email"
- Check if `GMAIL_APP_PASSWORD` in `.env.local` is correct
- Verify Gmail account has 2-Step Verification enabled
- Make sure app password is exactly 16 characters (with spaces)

### Email not arriving
- Check spam/promotions folder
- Verify email address is correct
- Make sure environment variables are set
- Check browser console for error messages

### On Vercel, emails not sending
- Verify environment variables are added to Vercel project
- Rebuild and redeploy after adding env vars
- Check Vercel function logs for errors

## Security Notes

- App passwords are safer than account passwords
- Environment variables are kept secret and not exposed to frontend
- All form data is validated server-side
- HTML is escaped to prevent injection attacks
- SMTP connection uses encryption

## Support

If you encounter issues:
1. Check your Gmail security settings
2. Verify environment variables are correctly set
3. Check browser console for error messages
4. Review server logs for detailed error information
