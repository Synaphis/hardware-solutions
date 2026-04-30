import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, category, assets, location } = body;

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
      to: process.env.PROCUREMENT_EMAIL || process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `Decommissioning Inquiry: ${category || 'General'} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="border-bottom: 2px solid #000; padding-bottom: 10px;">New Decommissioning Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 160px;">Contact Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Company Email</td><td style="padding: 8px 0;">${email}</td></tr>
            <tr style="border-top: 1px solid #eee;"><td style="padding: 8px 0; color: #666;">Asset Categories</td><td style="padding: 8px 0;">${category || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Equipment Location</td><td style="padding: 8px 0;">${location || '—'}</td></tr>
          </table>
          <h3 style="margin-top: 20px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Preliminary Asset List</h3>
          <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${assets || 'No additional details provided.'}</p>
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
