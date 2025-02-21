/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BJPLBp84.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Bq5hY_ym.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const plans = [
    {
      name: "Plan B\xE1sico",
      price: "55",
      features: [
        "12 clases al mes",
        "Acceso a clases programadas",
        "Acceso a Open Box",
        // "Evaluación inicial",
        "App de seguimiento"
      ]
    },
    {
      name: "Plan Plus",
      price: "65",
      features: [
        "16 clases al mes",
        "Acceso a clases programadas",
        "Acceso a Open Box",
        // "Evaluación mensual",
        "App de seguimiento"
        // ,"Asesoramiento nutricional básico"
      ]
    },
    {
      name: "Plan Ilimitado",
      price: "85",
      features: [
        "Clases ilimitadas",
        "Acceso a clases programadas",
        "Acceso a Open Box",
        // "Evaluaciones mensuales",
        "App de seguimiento"
        // "Asesoramiento nutricional completo",
        // "1 clase personal al mes"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-32 bg-white"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-center mb-4 text-primary">Nuestras Tarifas</h1> <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
Elige el plan que mejor se adapte a tus objetivos. Todos nuestros planes incluyen acceso a las instalaciones durante el horario de las clases.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"> ${plans.map((plan) => renderTemplate`<div class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-primary"> <h3 class="text-2xl font-bold text-primary mb-4">${plan.name}</h3> <div class="text-4xl font-bold mb-6"> ${plan.price}€<span class="text-lg text-gray-600 font-normal">/mes</span> </div> <ul class="space-y-4 mb-8"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600"> <svg class="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> ${feature} </li>`)} </ul> <a href="/#contacto" class="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary-light transition-colors">
Empezar ahora
</a> </div>`)} </div> <div class="mt-16 max-w-3xl mx-auto"> <h2 class="text-2xl font-bold text-center mb-8 text-primary">Preguntas Frecuentes</h2> <div class="space-y-6"> <div class="border-b border-gray-200 pb-6"> <h3 class="text-lg font-semibold mb-2">¿Hay permanencia mínima?</h3> <p class="text-gray-600">No, nuestros planes son mensuales y puedes cancelar cuando quieras sin compromiso.</p> </div> <div class="border-b border-gray-200 pb-6"> <h3 class="text-lg font-semibold mb-2">¿Incluyen matrícula?</h3> <p class="text-gray-600"> No hay matrícula.</p> </div> <div class="border-b border-gray-200 pb-6"> <h3 class="text-lg font-semibold mb-2">¿Puedo cambiar de plan?</h3> <p class="text-gray-600">Sí, puedes cambiar de plan al inicio de cada mes según tus necesidades.</p> </div> <div class="pb-6"> <h3 class="text-lg font-semibold mb-2">¿Ofrecen descuentos para estudiantes?</h3> <p class="text-gray-600">No, actualmente no, pero estamos buscando formas de implementarlo.</p> </div> </div> </div> </div> </section>`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Pricing.astro", void 0);

const $$Tarifas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tarifas ALFA BOX Tudela - Planes y Precios de CrossFit" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Pricing", $$Pricing, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/tarifas.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/tarifas.astro";
const $$url = "/tarifas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tarifas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
