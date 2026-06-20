import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, industry, message, referral } = req.body;

  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Xephral Contact Form <noreply@mail.xephral.com>',
      to: 'devonfeimster123@gmail.com',
      replyTo: email,
      subject: `New inquiry from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${fullName}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Industry</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${industry || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Found us via</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${referral || '—'}</td></tr>
            <tr><td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 10px 0;">${message || '—'}</td></tr>
          </table>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
