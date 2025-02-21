/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, e as renderScript, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BJPLBp84.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_sAbk7tBZ.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-screen" data-astro-cid-bbe6dxrz> <div class="swiper h-full" data-astro-cid-bbe6dxrz> <div class="swiper-wrapper" data-astro-cid-bbe6dxrz> <!-- Preload the first image --> <link rel="preload" as="image" href="/images/angel_estiramientos.jpg" fetchpriority="high"> <div class="swiper-slide relative" data-astro-cid-bbe6dxrz> <picture data-astro-cid-bbe6dxrz> <!-- Provide different image sizes for different viewports --> <source media="(min-width: 1024px)" srcset="/images/angel_estiramientos.jpg?w=1920 1920w,
                    /images/angel_estiramientos.jpg?w=1280 1280w" sizes="100vw" data-astro-cid-bbe6dxrz> <source media="(min-width: 768px)" srcset="/images/angel_estiramientos.jpg?w=1024 1024w,
                    /images/angel_estiramientos.jpg?w=768 768w" sizes="100vw" data-astro-cid-bbe6dxrz> <img src="/images/angel_estiramientos.jpg?w=640" srcset="/images/angel_estiramientos.jpg?w=640 640w,
                    /images/angel_estiramientos.jpg?w=480 480w" sizes="100vw" alt="Group training" class="w-full h-full object-cover" loading="eager" decoding="async" data-astro-cid-bbe6dxrz> </picture> <div class="absolute inset-0 bg-black/50" data-astro-cid-bbe6dxrz></div> </div> <!-- Other slides with lazy loading --> <div class="swiper-slide relative" data-astro-cid-bbe6dxrz> <picture data-astro-cid-bbe6dxrz> <source media="(min-width: 1024px)" srcset="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=1920&q=80 1920w,
                    https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=1280&q=80 1280w" sizes="100vw" data-astro-cid-bbe6dxrz> <img src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=640&q=80" alt="CrossFit training" class="w-full h-full object-cover" loading="lazy" decoding="async" data-astro-cid-bbe6dxrz> </picture> <div class="absolute inset-0 bg-black/50" data-astro-cid-bbe6dxrz></div> </div> <div class="swiper-slide relative" data-astro-cid-bbe6dxrz> <picture data-astro-cid-bbe6dxrz> <source media="(min-width: 1024px)" srcset="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=1920&q=80 1920w,
                    https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=1280&q=80 1280w" sizes="100vw" data-astro-cid-bbe6dxrz> <img src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=640&q=80" alt="Group training" class="w-full h-full object-cover" loading="lazy" decoding="async" data-astro-cid-bbe6dxrz> </picture> <div class="absolute inset-0 bg-black/50" data-astro-cid-bbe6dxrz></div> </div> </div> <div class="swiper-pagination" data-astro-cid-bbe6dxrz></div> </div> <div class="absolute inset-0 flex items-center justify-center z-10" data-astro-cid-bbe6dxrz> <div class="container mx-auto px-4 text-center text-white" data-astro-cid-bbe6dxrz> <!-- Add content-visibility to optimize rendering --> <h1 class="text-5xl md:text-6xl font-bold mb-6 content-visibility-auto" data-astro-cid-bbe6dxrz>
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

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Location", $$Location, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
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
