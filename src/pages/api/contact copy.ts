// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend'; // Option 1: Using Resend
import nodemailer from 'nodemailer'; // Option 2: Using Nodemailer


// Option 1: Using Resend
const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Option 2: Using Nodemailer with Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: import.meta.env.EMAIL_USER,
    pass: import.meta.env.EMAIL_APP_PASSWORD // Gmail App Password
  }
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        message: 'Todos los campos son requeridos'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // OPTION 1: Using Resend
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // Use your verified domain
        to: 'iarriazu96@gmail.com',
        subject: 'Alfabox',
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `
      });
    } catch (error) {
      console.error('Resend error:', error);
      // Fallback to Nodemailer if Resend fails
      throw error;
    }

    

    // OPTION 2: Using Nodemailer (can be used as fallback or primary method)
    /* 
    try {
      await transporter.sendMail({
        from: import.meta.env.EMAIL_USER,
        to: 'your@email.com',
        subject: 'Nuevo mensaje de contacto',
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `
      });
    } catch (error) {
      console.error('Nodemailer error:', error);
      throw error;
    }
    */

    return new Response(JSON.stringify({
      message: 'Mensaje enviado exitosamente'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({
      message: 'Hubo un error al procesar tu solicitud'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}