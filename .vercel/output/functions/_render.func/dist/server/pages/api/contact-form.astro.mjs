export { renderers } from '../../renderers.mjs';

class ContactForm {
  form;
  submitButton;
  originalButtonText;
  constructor(formElement) {
    this.form = formElement;
    this.submitButton = this.form.querySelector('button[type="submit"]');
    this.originalButtonText = this.submitButton.textContent || "Enviar mensaje";
    this.initializeForm();
  }
  initializeForm() {
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await this.handleSubmit();
    });
  }
  getFormData() {
    const formData = new FormData(this.form);
    return {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message")
    };
  }
  showMessage(message, isError = false) {
    const existingMessage = this.form.querySelector(".form-message");
    if (existingMessage) {
      existingMessage.remove();
    }
    const messageElement = document.createElement("div");
    messageElement.className = `form-message p-4 rounded-lg mt-4 ${isError ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`;
    messageElement.textContent = message;
    this.form.appendChild(messageElement);
    setTimeout(() => {
      messageElement.remove();
    }, 5e3);
  }
  setLoading(loading) {
    this.submitButton.disabled = loading;
    this.submitButton.textContent = loading ? "Enviando..." : this.originalButtonText;
  }
  async handleSubmit() {
    try {
      this.setLoading(true);
      const formData = this.getFormData();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }
      this.showMessage("Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.");
      this.form.reset();
    } catch (error) {
      this.showMessage(
        error instanceof Error ? error.message : "Error al enviar el mensaje",
        true
      );
    } finally {
      this.setLoading(false);
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const formElement = document.querySelector("form");
  if (formElement) {
    new ContactForm(formElement);
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
