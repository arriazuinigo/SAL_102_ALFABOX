/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, e as renderScript, r as renderTemplate, d as createAstro, b as addAttribute, a as renderComponent } from '../chunks/astro/server_BJPLBp84.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_BkWhTV7J.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-screen" data-astro-cid-bbe6dxrz> <div class="swiper h-full" data-astro-cid-bbe6dxrz> <div class="swiper-wrapper" data-astro-cid-bbe6dxrz> <div class="swiper-slide relative" data-astro-cid-bbe6dxrz> <!-- Preload first image --> <link rel="preload" as="image" href="/images/angel_estiramientos.jpg" fetchpriority="high"> <img src="/images/angel_estiramientos.jpg" alt="Group training" class="w-full h-full object-cover" width="1920" height="1080" decoding="async" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-black/50" data-astro-cid-bbe6dxrz></div> </div> <div class="swiper-slide relative" data-astro-cid-bbe6dxrz> <img src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=2070" alt="CrossFit training" class="w-full h-full object-cover" loading="lazy" width="1920" height="1080" decoding="async" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-black/50" data-astro-cid-bbe6dxrz></div> </div> <div class="swiper-slide relative" data-astro-cid-bbe6dxrz> <img src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2069" alt="Group training" class="w-full h-full object-cover" loading="lazy" width="1920" height="1080" decoding="async" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-black/50" data-astro-cid-bbe6dxrz></div> </div> </div> <div class="swiper-pagination" data-astro-cid-bbe6dxrz></div> </div> <div class="absolute inset-0 flex items-center justify-center z-10" data-astro-cid-bbe6dxrz> <div class="container mx-auto px-4 text-center text-white" data-astro-cid-bbe6dxrz> <h1 class="text-5xl md:text-6xl font-bold mb-6" data-astro-cid-bbe6dxrz>
ENTRENA COMO UN CAMPEÓN
</h1> <p class="text-xl md:text-2xl mb-8" data-astro-cid-bbe6dxrz>
Descubre tu verdadero potencial en ALFA BOX
</p> <a href="#contacto" class="bg-primary px-8 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors" data-astro-cid-bbe6dxrz>
Prueba una clase gratis
</a> </div> </div> </section> ${renderScript($$result, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "CrossFit",
      description: "Entrenamiento funcional de alta intensidad para mejorar tu condici\xF3n f\xEDsica general."
    },
    {
      title: "Clases de Iniciaci\xF3n",
      description: "Aprende las t\xE9cnicas b\xE1sicas y movimientos fundamentales del CrossFit."
    },
    {
      title: "Open Box",
      description: "Espacio para practicar y mejorar tus habilidades."
    },
    {
      title: "Entrenamiento Personal",
      description: "Sesiones personalizadas con nuestros entrenadores certificados."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="servicios" class="py-20 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-center mb-12 text-primary">Nuestras Clases</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${services.map((service) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-primary"> <h3 class="text-xl font-semibold mb-4 text-primary">${service.title}</h3> <p class="text-gray-600">${service.description}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Services.astro", void 0);

const $$Location = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="h-[400px] w-full"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.9349045826434!2d-1.6238856225346943!3d42.0660146536262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5a45227978a233%3A0x36719194dbeaea00!2sAlfa%20Box!5e0!3m2!1ses!2ses!4v1740073370338!5m2!1ses!2ses" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-full"></iframe> </div> `;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Location.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="py-20 bg-primary text-white"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-center mb-12">Únete a Nuestra Comunidad</h2> <div class="max-w-2xl mx-auto"> <form id="contactForm" class="space-y-6"> <div> <label for="name" class="block mb-2">Nombre</label> <input type="text" id="name" name="name" class="w-full p-3 border border-white rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-transparent" required> </div> <div> <label for="email" class="block mb-2">Email</label> <input type="email" id="email" name="email" class="w-full p-3 border border-white rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-transparent" required> </div> <div> <label for="phone" class="block mb-2">Teléfono</label> <input type="tel" id="phone" name="phone" class="w-full p-3 border border-white rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-transparent" pattern="[0-9+]{9,}" title="Por favor, introduce un número de teléfono válido"> </div> <div> <label for="message" class="block mb-2">Mensaje</label> <textarea id="message" name="message" rows="4" class="w-full p-3 border border-white rounded-lg focus:ring-2 focus:ring-white focus:border-white bg-transparent" required></textarea> </div> <div id="formMessage" class="hidden text-center p-4 rounded-lg"></div> <button type="submit" id="submitButton" class="w-full bg-white text-primary py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed">
Empezar Ahora
</button> </form> </div> </div> </section> ${renderScript($$result, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Contact.astro", void 0);

const $$Astro$1 = createAstro("https://alfabox.es");
const $$YouTubeVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$YouTubeVideo;
  const { videoId, title = "YouTube video" } = Astro2.props;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return renderTemplate`<!-- Cross Training Section -->${maybeRenderHead()}<section class="py-16 px-4 max-w-6xl mx-auto"> <h1 class="text-5xl font-black text-center mb-2 uppercase tracking-wider" style="font-family: 'Anton', sans-serif;">
Cross Training
</h1> <h2 class="text-2xl text-center mb-8 text-[#BBA14F]">QUÉ ES Y EN QUÉ CONSISTE</h2> <div class="grid md:grid-cols-2 gap-8 items-center"> <div class="space-y-4"> <p class="text-lg">
Cross Training es para todo el mundo! Es un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados.
</p> <p class="text-lg">Mira el video para más información.</p> <p class="font-bold text-lg">Ven a probarlo, la primera clase es gratis!</p> <a href="#contacto" class="inline-block bg-[#2E9CA7] text-white px-8 py-3 rounded-md hover:bg-[#247A83] transition-colors">
Apúntate ahora
</a> </div> <div class="relative w-full pt-[56.25%]"> <iframe${addAttribute(`https://www.youtube.com/embed/${videoId}`, "src")}${addAttribute(title, "title")} loading="lazy"${addAttribute(thumbnailUrl, "poster")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"></iframe> </div> </div> </section>`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/YouTubeVideo.astro", void 0);

const $$Astro = createAstro("https://alfabox.es");
const $$PhotoGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PhotoGallery;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> ${images.map((image) => renderTemplate`<div class="relative overflow-hidden rounded-lg aspect-square"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="object-cover w-full h-full hover:scale-105 transition-transform duration-300"> </div>`)} </div>`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/PhotoGallery.astro", void 0);

const $$BoxSection = createComponent(($$result, $$props, $$slots) => {
  const boxImages = [
    {
      src: "/images/angel_estiramientos.jpg",
      alt: "Box training area with equipment"
    },
    {
      src: "/images/angel_estiramientos.jpg",
      alt: "Members training in our box"
    },
    {
      src: "/images/angel_estiramientos.jpg",
      alt: "Box facilities overview"
    }
  ];
  return renderTemplate`<!-- Nuestro Box Section -->${maybeRenderHead()}<section class="py-16 px-4 bg-gray-50"> <div class="max-w-6xl mx-auto"> <h2 class="text-5xl font-black text-center mb-2 uppercase tracking-wider" style="font-family: 'Anton', sans-serif;">
Nuestro Box
</h2> <h3 class="text-2xl text-center mb-12 text-[#BBA14F]">VEN A CONOCERNOS, EMPIEZA TU DESAFÍO</h3> <div class="grid md:grid-cols-2 gap-8 items-center"> ${renderComponent($$result, "PhotoGallery", $$PhotoGallery, { "images": boxImages })} <div class="space-y-6"> <p class="text-lg">
El Box es como se llama al lugar donde entrenamos, pero no es solo eso, es un sitio para divertirse, compartir esfuerzo y conocer gente que comparte tu pasión.
</p> <p class="text-lg">
Contamos con programas de entrenamiento en grupo con plazas limitadas, adaptados a tu nivel, con el seguimiento de un coach pendiente de ti. Además disponemos de planes para entrenamiento libre dentro de nuestro box.
</p> <a href="#contacto" class="inline-block bg-[#2E9CA7] text-white px-8 py-3 rounded-md hover:bg-[#247A83] transition-colors">
Apúntate ahora
</a> </div> </div> </div> </section>`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/BoxSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "YouTubeVideo", $$YouTubeVideo, { "videoId": "WxazE0_cipo", "title": "Cross Training en AlfaBox" })} ${renderComponent($$result2, "BoxSection", $$BoxSection, {})} ${renderComponent($$result2, "Location", $$Location, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/index.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
