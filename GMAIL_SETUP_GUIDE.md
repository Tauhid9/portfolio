# Gmail Setup Guide for Contact Form

This guide will help you configure your Gmail account to send emails automatically when users submit the contact form.

## Step 1: Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/security
2. Click on "2-Step Verification" in the left menu
3. Click "Get Started" and follow the setup process
4. Verify your phone number
5. Choose your verification method (SMS or authenticator app)

## Step 2: Generate App Password

Once 2-Step Verification is enabled:

1. Go to: https://myaccount.google.com/apppasswords
2. Select "Mail" as the app type
3. Select "Windows Computer" (or your device type)
4. Google will generate a **16-character password** - Copy this exactly

**Important**: This is NOT your regular Gmail password. It's a special password just for your app.

## Step 3: Create .env.local File

1. In your project root directory, create a new file called `.env.local`
2. Add the following content:

```
GMAIL_USER=tauhidhasan2017bd@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

Replace `xxxx xxxx xxxx xxxx` with your 16-character App Password (include the spaces as Google provides them).

## Step 4: Test the Email Feature

1. Save the `.env.local` file
2. Restart your development server
3. Go to the "Get In Touch" section of your portfolio
4. Fill out the form:
   - Name: Your Name
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test
5. Click "Send Message"

You should see:
- Success message on the website
- Email in your Gmail inbox with the form details
- An auto-reply sent to the test email address

## What Happens When Form is Submitted

1. User fills out the contact form
2. Clicks "Send Message"
3. Form data is sent to `/api/send-email` endpoint
4. Two emails are sent automatically:
   - **Admin Email**: Sent to your Gmail with all form details
   - **Auto-Reply**: Sent to the visitor confirming message receipt

## Emails Sent

### Email 1: To Your Gmail (Admin Email)
- Contains visitor's name, email, subject, and full message
- Shows timestamp of when message was received
- Has a reply-to address (visitor's email) so you can reply directly

### Email 2: To Visitor (Auto-Reply)
- Confirms their message was received
- Shows expected response time (24-48 hours)
- Includes your contact information

## Troubleshooting

### Email not sending - "Invalid credentials"
- Make sure you created the App Password (not using your regular Gmail password)
- Check that `.env.local` file exists in the root directory
- Verify the credentials are exactly as Google provided them

### Email not sending - "Gmail not configured"
- Check that `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set in `.env.local`
- Make sure you restarted the dev server after creating `.env.local`

### Can't find 2-Step Verification option
- Make sure you're logged into the right Google Account
- 2-Step Verification must be enabled before generating an App Password

## Security Notes

- Never commit `.env.local` to Git (it's already in .gitignore)
- The App Password is specific to this app - if it leaks, you can delete it and generate a new one
- The email API only works with your configured Gmail account
- Form data is validated on the backend before sending

## Production Deployment

When deploying to Vercel or another hosting service:

1. Go to your deployment platform's environment variables settings
2. Add the same variables:
   - `GMAIL_USER`: your Gmail address
   - `GMAIL_APP_PASSWORD`: your 16-character password
3. The email feature will work automatically in production

## Need Help?

If emails aren't working:
1. Check that 2-Step Verification is enabled
2. Verify the App Password (16 characters with spaces)
3. Ensure `.env.local` file is in your project root
4. Restart your development server
5. Check browser console for error messages (F12 → Console tab)
