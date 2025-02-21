/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, a as renderComponent } from '../chunks/astro/server_BJPLBp84.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Bq5hY_ym.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$AlfaBoxInfo = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Instalaciones de Primera Clase",
      description: "M\xE1s de 400m\xB2 dedicados al entrenamiento funcional con equipamiento de \xFAltima generaci\xF3n."
    },
    {
      title: "Entrenadores Certificados",
      description: "Nuestro equipo de entrenadores cuenta con certificaciones internacionales y a\xF1os de experiencia."
    },
    {
      title: "Comunidad",
      description: "Forma parte de una comunidad apasionada que te motivar\xE1 a alcanzar tus objetivos."
    },
    {
      title: "Programaci\xF3n Estructurada",
      description: "Entrenamientos dise\xF1ados cient\xEDficamente para maximizar resultados y prevenir lesiones."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="hero-section" data-astro-cid-oom4siiy> <div class="container" data-astro-cid-oom4siiy> <div class="content-wrapper" data-astro-cid-oom4siiy> <h1 class="hero-title" data-astro-cid-oom4siiy>Nuestras Instalaciones</h1> <div class="intro" data-astro-cid-oom4siiy> <img src="/images/instalaciones.jpg" alt="ALFA BOX instalaciones" class="hero-image" data-astro-cid-oom4siiy> <p class="text-lg" data-astro-cid-oom4siiy>
ALFA BOX nació en 2024 con la misión de crear un espacio donde cualquier persona, independientemente de su nivel de fitness, pudiera alcanzar sus objetivos de forma segura y efectiva.
</p> <p class="text-lg" data-astro-cid-oom4siiy>
Nos especializamos en CrossFit y entrenamiento funcional, ofreciendo una experiencia única que combina programación profesional, coaching personalizado y una comunidad increíble.
</p> </div> <div class="features-grid" data-astro-cid-oom4siiy> ${features.map((feature) => renderTemplate`<div class="feature-card" data-astro-cid-oom4siiy> <h3 data-astro-cid-oom4siiy>${feature.title}</h3> <p data-astro-cid-oom4siiy>${feature.description}</p> </div>`)} </div> <div class="cta" data-astro-cid-oom4siiy> <h2 data-astro-cid-oom4siiy>¿Listo para empezar?</h2> <p data-astro-cid-oom4siiy>
Únete a nuestra comunidad y comienza tu viaje hacia una vida más saludable y fuerte.
</p> <div class="cta-button-wrapper" data-astro-cid-oom4siiy> <a href="/#contacto" class="cta-button" data-astro-cid-oom4siiy>Prueba una clase gratis</a> </div> </div> </div> </div> </section> `;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/AlfaBoxInfo.astro", void 0);

const $$Coaches = createComponent(($$result, $$props, $$slots) => {
  const coaches = [
    {
      name: "\xC1ngel Mart\xEDnez",
      role: "Head Coach",
      certifications: [
        "CrossFit Level 1 Trainer",
        "CrossFit Level 2 Trainer",
        "Weightlifting Coach"
      ],
      description: "Con m\xE1s de 5 a\xF1os de experiencia en CrossFit y entrenamiento funcional, \xC1ngel lidera nuestro equipo de coaches con pasi\xF3n y dedicaci\xF3n. Su enfoque se centra en ayudar a cada atleta a alcanzar su m\xE1ximo potencial de forma segura y efectiva.",
      image: "/coaches/angel.jpg"
    },
    {
      name: "David Gatillo",
      role: "Coach",
      certifications: [
        "CrossFit Level 1 Trainer",
        "Mobility Specialist",
        "Nutrition Coach"
      ],
      description: "Especializado en movilidad y t\xE9cnica, Javier se asegura de que cada atleta desarrolle una base s\xF3lida y una t\xE9cnica impecable. Su atenci\xF3n al detalle y enfoque en la prevenci\xF3n de lesiones son fundamentales para nuestro programa.",
      image: "/coaches/javier.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="coaches" class="py-32 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-center mb-4 text-primary">Nuestro Equipo</h2> <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
Conoce a nuestros coaches, profesionales certificados y apasionados por ayudarte a alcanzar tus objetivos.
</p> <div class="relative"> <img src="/images/Coaches.jpg"${addAttribute(`Coaches_greyscale`, "alt")} class="w-full h-full object-cover"> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-8"> ${coaches.map((coach) => renderTemplate`<div class="bg-white rounded-lg overflow-hidden shadow-lg border border-primary"> <div class=" relative"> <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"> <div class="text-white text-center p-4"> <h3 class="text-2xl font-bold mb-2">${coach.name}</h3> <p class="text-lg">${coach.role}</p> </div> </div> </div> <div class="p-6"> <h3 class="text-2xl font-bold mb-2 text-primary">${coach.name}</h3> <p class="text-gray-600 mb-4">${coach.role}</p> <div class="mb-4"> <h4 class="font-semibold mb-2 text-primary">Certificaciones:</h4> <ul class="list-disc list-inside text-gray-600"> ${coach.certifications.map((cert) => renderTemplate`<li>${cert}</li>`)} </ul> </div> <p class="text-gray-600">${coach.description}</p> </div> </div>`)} </div> <div class="mt-16 text-center"> <h3 class="text-2xl font-bold mb-4 text-primary">¿Por qué elegir nuestros coaches?</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8"> <div class="p-6 border border-primary rounded-lg"> <h4 class="font-bold mb-2 text-primary">Experiencia</h4> <p class="text-gray-600">Años de experiencia en CrossFit y entrenamiento funcional</p> </div> <div class="p-6 border border-primary rounded-lg"> <h4 class="font-bold mb-2 text-primary">Certificaciones</h4> <p class="text-gray-600">Coaches certificados internacionalmente</p> </div> <div class="p-6 border border-primary rounded-lg"> <h4 class="font-bold mb-2 text-primary">Dedicación</h4> <p class="text-gray-600">Compromiso total con tu progreso y objetivos</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Coaches.astro", void 0);

const $$Alfabox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ALFA BOX Tudela - Sobre Nosotros | Box de CrossFit en Navarra" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Coaches", $$Coaches, {})} ${renderComponent($$result2, "AlfaBoxInfo", $$AlfaBoxInfo, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/alfabox.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/alfabox.astro";
const $$url = "/alfabox";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Alfabox,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
