# Email Feature Setup - Complete Guide

Your portfolio now includes automated email functionality! When users submit the contact form, emails are automatically sent to your Gmail inbox with all their information.

## What's Included

✅ **Contact Form with Email Integration**
- Form captures: Name, Email, Subject, Message
- Form validation (all fields required)
- Real-time loading state feedback
- Success/Error messages displayed to user

✅ **Automated Emails**
- Admin email: Sent to your Gmail inbox with full contact details
- Auto-reply: Sent to the visitor confirming message receipt
- Professional HTML formatting for both emails
- Reply-to address automatically set to sender's email

✅ **Backend API**
- Secure Node.js API route: `/api/send-email`
- Uses Nodemailer with Gmail SMTP
- Environment variables kept secure (never exposed to frontend)
- HTML escaping to prevent injection attacks

## Quick Setup (3 Steps)

### Step 1: Enable 2-Step Verification
1. Go to https://myaccount.google.com/security
2. Click "2-Step Verification"
3. Follow prompts to enable it

### Step 2: Generate Gmail App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your device)
3. Click "Generate"
4. Google shows a 16-character password
5. **Copy this password** (includes spaces)

### Step 3: Configure Environment Variables
1. Create `.env.local` file in project root
2. Add these lines:
```
GMAIL_USER=tauhidhasan2017bd@gmail.com
GMAIL_APP_PASSWORD=your_16_character_password_here
```
3. Save the file (it's in .gitignore, won't be pushed to GitHub)

## How It Works

```
User fills form → Clicks "Send Message" 
    ↓
JavaScript sends data to /api/send-email endpoint
    ↓
Server validates data and checks environment variables
    ↓
Nodemailer connects to Gmail via secure SMTP
    ↓
Email 1: Admin email → Your inbox
Email 2: Auto-reply → Sender's inbox
    ↓
Form shows success message & clears fields
```

## Email Examples

### Email 1: What YOU Receive
```
Subject: New Contact Form Submission: Project Inquiry

From: Contact Form
To: tauhidhasan2017bd@gmail.com
Reply-To: sender@example.com

---

Sender: John Doe
Email: john.doe@example.com
Subject: Project Inquiry

Message:
I'd like to discuss a potential project...
```

### Email 2: What THEY RECEIVE
```
Subject: Re: Project Inquiry - Message Received

From: tauhidhasan2017bd@gmail.com
To: john.doe@example.com

---

Hi John Doe,

Thank you for contacting me! I have received your message 
with the subject "Project Inquiry" and will get back to you 
as soon as possible.

I typically respond to messages within 24-48 hours.

Best regards,
Tauhid Hasan Chowdhury
Software Engineer & Full-Stack Developer
```

## File Structure

```
app/
  api/
    send-email/
      route.ts          ← Email API endpoint

components/
  sections/
    contact.tsx        ← Updated with email form state

.env.local            ← Your environment variables (CREATE THIS)
.env.local.example    ← Template for reference
EMAIL_SETUP.md        ← Detailed setup guide
```

## Environment Variables Explained

| Variable | Value | Example |
|----------|-------|---------|
| `GMAIL_USER` | Your Gmail address | tauhidhasan2017bd@gmail.com |
| `GMAIL_APP_PASSWORD` | 16-char app password | abcd efgh ijkl mnop |

**Important:**
- Use App Password, NOT your regular Gmail password
- 16-character password with spaces included
- Keep `.env.local` file private (never commit to GitHub)

## Testing Locally

1. Setup `.env.local` with your credentials
2. Run: `pnpm run dev`
3. Go to Contact section
4. Fill out form completely
5. Click "Send Message"
6. Check your Gmail inbox for admin email
7. Check the sender's email inbox for auto-reply

## Deploying to Vercel

1. **Add Environment Variables to Vercel:**
   - Go to Project Settings → Environment Variables
   - Add `GMAIL_USER` and `GMAIL_APP_PASSWORD`
   - Value for `GMAIL_APP_PASSWORD` is your 16-char password

2. **Redeploy:**
   - Push code to GitHub or redeploy via Vercel dashboard
   - Vercel will use the environment variables from settings

3. **Verify:**
   - Submit test form from deployed site
   - Check if emails arrive in your Gmail

## Troubleshooting

### "Failed to send email"
- [ ] Check `.env.local` exists and has both variables
- [ ] Verify Gmail app password is exactly 16 characters
- [ ] Make sure 2-Step Verification is enabled on Google Account
- [ ] App password is fresh (generated recently)

### Email not arriving
- [ ] Check spam/promotions folder
- [ ] Verify email address in form is correct
- [ ] Check browser console for error messages
- [ ] Verify environment variables are set (restart dev server after creating `.env.local`)

### On Vercel: "Failed to send email"
- [ ] Environment variables added to Vercel project settings
- [ ] Redeployed AFTER adding environment variables
- [ ] Check Vercel function logs for detailed error
- [ ] Verify Gmail account still has 2-Step Verification enabled

### Auto-reply not sending
- This is secondary; if admin email sends, API works
- Check spam folder for auto-reply
- Verify sender's email address is valid

## Security Features

✅ **Environment variables** - Gmail credentials never exposed to frontend
✅ **Server-side validation** - Form data validated on secure server
✅ **HTML escaping** - User input sanitized to prevent injection
✅ **SMTP encryption** - Gmail connection uses TLS security
✅ **App passwords** - More secure than account password
✅ **No client-side storage** - Sensitive data not stored browser-side

## Support & Questions

For help:
1. Check EMAIL_SETUP.md for detailed instructions
2. Review this guide's Troubleshooting section
3. Check Vercel/browser console logs for errors
4. Verify all environment variables are correctly set

## Next Steps

1. ✅ Create `.env.local` file with your credentials
2. ✅ Test locally by submitting form
3. ✅ Deploy to Vercel and test in production
4. ✅ Share your portfolio knowing contact form works!

---

**Status:** Email functionality is production-ready and fully implemented. You just need to configure the environment variables!
