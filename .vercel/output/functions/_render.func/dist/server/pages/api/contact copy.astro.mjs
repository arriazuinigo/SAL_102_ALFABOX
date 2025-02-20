import { Resend } from 'resend';
import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_dbZJeUZF_KTscTDFPPLVDQq7kgnirkWss");
nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_gmail@gmail.com",
    pass: "your_gmail_app_password"
    // Gmail App Password
  }
});
const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        message: "Todos los campos son requeridos"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        // Use your verified domain
        to: "iarriazu96@gmail.com",
        subject: "Alfabox",
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `
      });
    } catch (error) {
      console.error("Resend error:", error);
      throw error;
    }
    return new Response(JSON.stringify({
      message: "Mensaje enviado exitosamente"
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({
      message: "Hubo un error al procesar tu solicitud"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
