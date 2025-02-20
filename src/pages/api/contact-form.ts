// contact-form.ts
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

class ContactForm {
  private form: HTMLFormElement;
  private submitButton: HTMLButtonElement;
  private originalButtonText: string;

  constructor(formElement: HTMLFormElement) {
    this.form = formElement;
    this.submitButton = this.form.querySelector('button[type="submit"]')!;
    this.originalButtonText = this.submitButton.textContent || 'Enviar mensaje';
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleSubmit();
    });
  }

  private getFormData(): ContactFormData {
    const formData = new FormData(this.form);
    return {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };
  }

  private showMessage(message: string, isError: boolean = false): void {
    // Remove any existing message
    const existingMessage = this.form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageElement = document.createElement('div');
    messageElement.className = `form-message p-4 rounded-lg mt-4 ${
      isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
    }`;
    messageElement.textContent = message;
    this.form.appendChild(messageElement);

    // Remove message after 5 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 5000);
  }

  private setLoading(loading: boolean): void {
    this.submitButton.disabled = loading;
    this.submitButton.textContent = loading ? 'Enviando...' : this.originalButtonText;
  }

  private async handleSubmit(): Promise<void> {
    try {
      this.setLoading(true);
      const formData = this.getFormData();

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      this.showMessage('Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.');
      this.form.reset();
    } catch (error) {
      this.showMessage(
        error instanceof Error ? error.message : 'Error al enviar el mensaje',
        true
      );
    } finally {
      this.setLoading(false);
    }
  }
}

// Initialize the form
document.addEventListener('DOMContentLoaded', () => {
  const formElement = document.querySelector('form');
  if (formElement) {
    new ContactForm(formElement as HTMLFormElement);
  }
});