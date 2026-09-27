import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Resend only delivers mail from a domain verified in the Resend account.
// The 'onboarding@resend.dev' sandbox sender reaches the account owner and nobody
// else, which is why contact-form mail was never arriving. Set CONTACT_FROM to an
// address on the verified alfabox.es domain.
const SANDBOX_FROM = 'onboarding@resend.dev';
const FROM = import.meta.env.CONTACT_FROM || SANDBOX_FROM;

const DEFAULT_RECIPIENTS = ['alfaboxtn@gmail.com', 'AngelMB202@gmail.com'];
const RECIPIENTS = (import.meta.env.CONTACT_RECIPIENTS || '')
  .split(',')
  .map((address: string) => address.trim())
  .filter(Boolean);

const SUBJECT_LABELS: Record<string, string> = {
  info: 'Información general',
  trial: 'Prueba gratuita',
  prices: 'Información de tarifas',
  other: 'Otros'
};

// The values below are interpolated into an HTML email, so they must be escaped.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const json = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const phone = data.get('phone')?.toString().trim();
    const subject = data.get('subject')?.toString().trim();
    const message = data.get('message')?.toString().trim();
    // Honeypot: hidden from real users, so anything in it is a bot. Answer 200 so
    // the bot cannot tell it was rejected.
    const honeypot = data.get('website')?.toString().trim();

    if (honeypot) {
      return json({ message: 'Mensaje enviado exitosamente' }, 200);
    }

    if (!name || !email || !message) {
      return json({ message: 'Nombre, email y mensaje son campos requeridos' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ message: 'Formato de email inválido' }, 400);
    }

    if (phone && !/^[0-9+]{9,}$/.test(phone)) {
      return json({ message: 'Formato de teléfono inválido' }, 400);
    }

    const recipients = RECIPIENTS.length > 0 ? RECIPIENTS : DEFAULT_RECIPIENTS;
    const subjectLabel = subject ? SUBJECT_LABELS[subject] ?? subject : '';

    if (FROM === SANDBOX_FROM) {
      console.warn(
        '[contact] CONTACT_FROM is not set, falling back to the Resend sandbox sender. ' +
          'Mail will only reach the Resend account owner.'
      );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: FROM,
      to: recipients,
      replyTo: email,
      subject: subjectLabel
        ? `Nuevo Mensaje de Contacto - Alfabox (${subjectLabel})`
        : 'Nuevo Mensaje de Contacto - Alfabox',
      html: `
          <h2>Nuevo Mensaje de Contacto</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>` : ''}
          ${subjectLabel ? `<p><strong>Asunto:</strong> ${escapeHtml(subjectLabel)}</p>` : ''}
          <p><strong>Mensaje:</strong> ${escapeHtml(message)}</p>
        `
    });

    if (error) {
      console.error('Error de API Resend:', error);
      return json({ message: 'Ocurrió un error al procesar tu solicitud' }, 502);
    }

    return json({ message: 'Mensaje enviado exitosamente', id: emailData?.id }, 200);
  } catch (error) {
    console.error('Error general:', error);
    return json({ message: 'Ocurrió un error al procesar tu solicitud' }, 500);
  }
};
