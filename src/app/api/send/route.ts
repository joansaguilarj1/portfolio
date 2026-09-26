import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'joansaguilarj@gmail.com',
      subject: ' Joan Aguilar',
      html: EmailTemplate({ firstName: 'Joan' }),
      //react: EmailTemplate({ firstName: 'Joan' })
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json({ 'hello': 'world' });
  } catch (error) {
    return NextResponse.json({ error });
  }
}