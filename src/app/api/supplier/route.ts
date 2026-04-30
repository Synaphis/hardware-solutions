import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const supplierSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid company email address"),
  phone: z.string().min(5, "Valid contact number required"),
  category: z.string().optional(),
  assets: z.string().min(10, "Please provide more details about your assets"),
  location: z.string().optional(),
  website: z.string().max(0, "Bot detected") // Honeypot
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = supplierSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json({ 
        error: 'Validation failed', 
        details: validatedData.error.flatten().fieldErrors 
      }, { status: 400 });
    }

    const { name, email, phone, category, assets, location } = validatedData.data;

    // Validate environment variables
    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      console.error('SMTP configuration error: ZOHO_EMAIL or ZOHO_PASSWORD is not set.');
      return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
      connectionTimeout: 20000, // Increased to 20s
      greetingTimeout: 20000,   // Increased to 20s
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
            <tr><td style="padding: 8px 0; color: #666;">Contact Phone</td><td style="padding: 8px 0;">${phone}</td></tr>
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as any;
    console.error('Error sending supplier email:', {
      message: err.message,
      code: err.code,
      command: err.command
    });
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' }, 
      { status: 500 }
    );
  }
}
