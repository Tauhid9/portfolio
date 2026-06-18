import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

interface EmailRequest {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json()

    const { name, email, subject, message } = body

    // Validate fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email to send to your Gmail
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; color: white; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">New Message from Your Portfolio</h2>
          </div>
          
          <div style="padding: 20px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; background-color: #f9f9f9;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">Sender Details:</h3>
              
              <div style="background: white; padding: 15px; border-left: 4px solid #667eea; margin-bottom: 15px;">
                <p style="margin: 8px 0;">
                  <strong>Name:</strong> ${escapeHtml(name)}
                </p>
                <p style="margin: 8px 0;">
                  <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #667eea; text-decoration: none;">${escapeHtml(email)}</a>
                </p>
                <p style="margin: 8px 0;">
                  <strong>Subject:</strong> ${escapeHtml(subject)}
                </p>
              </div>

              <h3 style="color: #333;">Message:</h3>
              <div style="background: white; padding: 15px; border-left: 4px solid #667eea; white-space: pre-wrap; word-wrap: break-word; line-height: 1.6;">
                ${escapeHtml(message)}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
              <p style="margin: 5px 0;">
                <strong>Received on:</strong> ${new Date().toLocaleString()}
              </p>
              <p style="margin: 5px 0;">
                <strong>From:</strong> Portfolio Contact Form
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Auto-reply to the sender
    const replyOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Re: ${subject} - Message Received`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; color: white; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">Thank You for Reaching Out!</h2>
          </div>
          
          <div style="padding: 20px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; background-color: #f9f9f9;">
            <p style="color: #333; line-height: 1.6;">
              Hi ${escapeHtml(name)},<br><br>
              Thank you for contacting me! I have received your message with the subject <strong>"${escapeHtml(subject)}"</strong> and will get back to you as soon as possible.<br><br>
              I typically respond to messages within 24-48 hours. In the meantime, feel free to connect with me on my social media or check out my latest projects on my portfolio.<br><br>
              Best regards,<br>
              <strong>Tauhid Hasan Chowdhury</strong><br>
              Software Engineer & Full-Stack Developer
            </p>

            <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
              <p style="margin: 5px 0;">
                <strong>Email:</strong> tauhidhasan2017bd@gmail.com<br>
                <strong>Phone:</strong> +88 01518972645<br>
                <strong>Location:</strong> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send auto-reply
    await transporter.sendMail(replyOptions)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML characters
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
