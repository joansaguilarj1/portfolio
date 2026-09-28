import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = String(process.env.RESEND_EMAIL_TO);
const emailFrom = String(process.env.RESEND_EMAIL_FROM);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `[PORTFOLIO]: ${body.subject}`,
      html: EmailTemplate({ name: body.name, message: body.message, email: body.email }),
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}