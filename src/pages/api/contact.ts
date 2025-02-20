import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString();
    const email = data.get('email')?.toString();
    const phone = data.get('phone')?.toString();
    const message = data.get('message')?.toString();

    // Validate required inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: 'Nombre, email y mensaje son campos requeridos'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          error: 'Formato de email inválido'
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }

    // Validate phone format if provided
    if (phone) {
      const phoneRegex = /^[0-9+]{9,}$/;
      if (!phoneRegex.test(phone)) {
        return new Response(
          JSON.stringify({
            error: 'Formato de teléfono inválido'
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
      }
    }

    try {
      const { data: emailData, error } = await resend.emails.send({
        from: 'onboarding@resend.dev', // Replace with your verified domain
        to: 'iarriazu96@gmail.com',
        subject: 'Nuevo Mensaje de Contacto - Alfabox',
        html: `
          <h2>Nuevo Mensaje de Contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
          <p><strong>Mensaje:</strong> ${message}</p>
        `
      });

      if (error) {
        console.error('Error de API Resend:', error);
        throw new Error('Error al enviar el email');
      }

      return new Response(
        JSON.stringify({
          message: 'Mensaje enviado exitosamente',
          id: emailData?.id
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (error) {
      console.error('Error al enviar con Resend:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error general:', error);
    return new Response(
      JSON.stringify({
        error: 'Ocurrió un error al procesar tu solicitud'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};