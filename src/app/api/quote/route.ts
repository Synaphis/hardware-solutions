import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, category, partNumber, brand, quantity, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.ZOHO_EMAIL,
      to: process.env.SALES_EMAIL || process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `Quote Request: ${category || 'General'} — ${name} (${company || 'Individual'})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="border-bottom: 2px solid #000; padding-bottom: 10px;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${phone || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0;">${company || '—'}</td></tr>
            <tr style="border-top: 1px solid #eee;"><td style="padding: 8px 0; color: #666;">Category</td><td style="padding: 8px 0;">${category || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Part Number</td><td style="padding: 8px 0; font-weight: bold;">${partNumber || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Brand / OEM</td><td style="padding: 8px 0;">${brand || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Quantity</td><td style="padding: 8px 0;">${quantity || '—'}</td></tr>
          </table>
          <h3 style="margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Message</h3>
          <p style="color: #333; line-height: 1.6;">${message || 'No additional details provided.'}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
