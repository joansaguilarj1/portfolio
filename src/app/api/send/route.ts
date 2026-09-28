import { EmailTemplate } from '../../../components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    // Validación defensiva para evitar crashes
    if (!apiKey) {
      console.error("Falta RESEND_API_KEY en las variables de entorno.");
      return NextResponse.json(
        { error: 'Error de configuración en el servidor' },
        { status: 500 }
      );
    }

    // Instanciamos Resend dentro de la función
    const resend = new Resend(apiKey);
    const emailTo = process.env.RESEND_EMAIL_TO || '';
    const emailFrom = process.env.RESEND_EMAIL_FROM || 'onboarding@resend.dev';

    const body = await request.json();
    const { name, email, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email,
      subject: `[Portafolio] ${subject} - ${name}`,
      html: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (error) {
    console.error("Error en API /api/send:", error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}