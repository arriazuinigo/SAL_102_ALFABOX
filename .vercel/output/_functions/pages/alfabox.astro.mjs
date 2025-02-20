/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Drbmxb1-.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_CnvHXXMQ.mjs';
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
  return renderTemplate`${maybeRenderHead()}<section class="hero-section" data-astro-cid-oom4siiy> <div class="container" data-astro-cid-oom4siiy> <div class="content-wrapper" data-astro-cid-oom4siiy> <h1 class="hero-title" data-astro-cid-oom4siiy>Bienvenido a ALFA BOX</h1> <div class="intro" data-astro-cid-oom4siiy> <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" alt="ALFA BOX instalaciones" class="hero-image" data-astro-cid-oom4siiy> <p class="text-lg" data-astro-cid-oom4siiy>
ALFA BOX nació en 2024 con la misión de crear un espacio donde cualquier persona, independientemente de su nivel de fitness, pudiera alcanzar sus objetivos de forma segura y efectiva.
</p> <p class="text-lg" data-astro-cid-oom4siiy>
Nos especializamos en CrossFit y entrenamiento funcional, ofreciendo una experiencia única que combina programación profesional, coaching personalizado y una comunidad increíble.
</p> </div> <div class="features-grid" data-astro-cid-oom4siiy> ${features.map((feature) => renderTemplate`<div class="feature-card" data-astro-cid-oom4siiy> <h3 data-astro-cid-oom4siiy>${feature.title}</h3> <p data-astro-cid-oom4siiy>${feature.description}</p> </div>`)} </div> <div class="cta" data-astro-cid-oom4siiy> <h2 data-astro-cid-oom4siiy>¿Listo para empezar?</h2> <p data-astro-cid-oom4siiy>
Únete a nuestra comunidad y comienza tu viaje hacia una vida más saludable y fuerte.
</p> <div class="cta-button-wrapper" data-astro-cid-oom4siiy> <a href="/#contacto" class="cta-button" data-astro-cid-oom4siiy>Prueba una clase gratis</a> </div> </div> </div> </div> </section> `;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/AlfaBoxInfo.astro", void 0);

const $$Alfabox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ALFA BOX Tudela - Sobre Nosotros | Box de CrossFit en Navarra" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "AlfaBoxInfo", $$AlfaBoxInfo, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
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
