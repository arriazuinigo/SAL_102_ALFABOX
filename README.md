# AlfaBox

![AlfaBox Logo](./public/logo.png)

AlfaBox es una plataforma web desarrollada con [Astro](https://astro.build/) para gestionar y promocionar un box de CrossFit. Ofrece información sobre clases, entrenadores, horarios y membresías, brindando una experiencia moderna y optimizada para los usuarios.

## Tecnologías utilizadas

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) (para formularios de contacto)
- [Markdown](https://www.markdownguide.org/) (para gestión de contenido)
- [Node.js](https://nodejs.org/) (para el entorno de desarrollo)

## Instalación y configuración

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/tuusuario/alfabox.git
   cd alfabox
   ```

2. Instalar dependencias:

   ```sh
   npm install
   ```

3. Ejecutar el entorno de desarrollo:

   ```sh
   npm run dev
   ```

4. Acceder a la aplicación en el navegador en `http://localhost:4321`

## Características

✅ Página de inicio atractiva con información del box  
✅ Sección de entrenadores con perfiles detallados  
✅ Horarios de clases y calendario dinámico  
✅ Formulario de contacto con integración a EmailJS  
✅ Diseño responsive optimizado con Tailwind CSS  

## Despliegue

Para desplegar la aplicación, puedes utilizar plataformas como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

Ejemplo de despliegue en Vercel:

```sh
npm run build
vercel deploy
```

## Contribuciones

Si deseas contribuir, puedes enviar un pull request o reportar problemas en la sección de [issues](https://github.com/tuusuario/alfabox/issues).

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.


# GESTORES EMAIL 
* sendgrid --> no funciona bien / caidas
* resend --> intentamos 
* nodemailer


# IMPROVE DEVELOPMENTS
npm install -g vercel
vercel dev

vercel --prod 

# FAVICON: 
https://github.com/withastro/astro/issues/6565

https://realfavicongenerator.net/your-favicon-is-ready
https://www.youtube.com/watch?v=SAnLQABTF5A&ab_channel=ColbyFayock



Added proper favicon links for different sizes and formats
Added proper meta tags for web app capabilities
Ensured all favicon paths are absolute (starting with /)
Added both PNG and ICO formats for better browser compatibility
Included Apple-specific meta tags and icons
Make sure you have the following favicon files in your /public directory:


# FAVICON:
After deploying, the favicon should now appear correctly in search results and across different browsers and platforms. Let's deploy the changes to make them live.
https://favicon.io/favicon-converter/

favicon.ico
favicon-16x16.png
favicon-32x32.png
favicon-96x96.png
apple-touch-icon.png
 

svg convertor https://picsvg.com/


# ERROR FAVICON:  
It seems you're seeing a failed favicon request to Google's favicon service. This usually happens when Google can't properly fetch your favicon. Here's how to fix it:

First, ensure your favicon is properly linked in your Layout.astro. Make sure this line is in the <head> section:

htmlCopy<link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="32x32">

Your current URL parameter shows "url=http://null" which indicates Google can't properly determine your site's URL. In your Layout.astro, add a canonical URL tag:

htmlCopy<link rel="canonical" href="https://alfabox.es" />

Make sure your favicon.ico file:


Is directly accessible at https://alfabox.es/favicon.ico
Is a valid .ico file (not just a renamed PNG)
Contains at least a 32x32 version


Add a specific meta tag for Google:

htmlCopy<meta name="google" content="notranslate" />
After making these changes:

Clear your browser cache
Wait a few days for Google to recrawl your site
# You can test your favicon directly by visiting: https://www.google.com/s2/favicons?domain=alfabox.es

Would you like me to help you verify any of these steps or provide additional troubleshooting?






# SEO 
PageSpeed Insights
https://sitechecker.pro/es/

##  Google Search Console: 
definiing and implementing the meta tags & sitemap
