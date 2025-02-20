/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_Drbmxb1-.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_B4tlqLib.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Schedule = createComponent(($$result, $$props, $$slots) => {
  const schedule = [
    {
      time: "07:00",
      monday: "CrossFit",
      tuesday: "CrossFit",
      wednesday: "CrossFit",
      thursday: "CrossFit",
      friday: "CrossFit",
      saturday: "CrossFit",
      sunday: "-"
    },
    {
      time: "09:15",
      monday: "CrossFit",
      tuesday: "CrossFit",
      wednesday: "CrossFit",
      thursday: "CrossFit",
      friday: "CrossFit",
      saturday: "CrossFit",
      sunday: "-"
    },
    {
      time: "10:30",
      monday: "Open Box",
      tuesday: "Open Box",
      wednesday: "Open Box",
      thursday: "Open Box",
      friday: "Open Box",
      saturday: "Open Box",
      sunday: "-"
    },
    {
      time: "17:30",
      monday: "CrossFit",
      tuesday: "CrossFit",
      wednesday: "CrossFit",
      thursday: "CrossFit",
      friday: "CrossFit",
      saturday: "-",
      sunday: "-"
    },
    {
      time: "18:45",
      monday: "CrossFit",
      tuesday: "CrossFit",
      wednesday: "CrossFit",
      thursday: "CrossFit",
      friday: "CrossFit",
      saturday: "-",
      sunday: "-"
    },
    {
      time: "20:00",
      monday: "CrossFit",
      tuesday: "CrossFit",
      wednesday: "CrossFit",
      thursday: "CrossFit",
      friday: "CrossFit",
      saturday: "-",
      sunday: "-"
    }
  ];
  const days = ["Hora", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado", "Domingo"];
  return renderTemplate`${maybeRenderHead()}<section class="py-32 bg-white"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-center mb-12 text-primary">Horarios</h1> <div class="overflow-x-auto"> <table class="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden"> <thead> <tr class="bg-primary text-white"> ${days.map((day) => renderTemplate`<th class="py-4 px-6 text-left">${day}</th>`)} </tr> </thead> <tbody> ${schedule.map((row) => renderTemplate`<tr class="border-b border-gray-200 hover:bg-gray-50"> <td class="py-4 px-6 font-semibold">${row.time}</td> <td class="py-4 px-6">${row.monday}</td> <td class="py-4 px-6">${row.tuesday}</td> <td class="py-4 px-6">${row.wednesday}</td> <td class="py-4 px-6">${row.thursday}</td> <td class="py-4 px-6">${row.friday}</td> <td class="py-4 px-6">${row.saturday}</td> <td class="py-4 px-6">${row.sunday}</td> </tr>`)} </tbody> </table> </div> <div class="mt-12 text-center"> <h2 class="text-2xl font-bold text-primary mb-6">Reserva tu clase</h2> <p class="text-gray-600 mb-8">
Reserva tu plaza para asegurar tu espacio en la clase. Las reservas se pueden realizar hasta 1 hora antes del inicio de la clase.
</p> <a href="https://wa.me/34680734560" target="_blank" rel="noopener noreferrer" class="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-light transition-colors">
Reservar Clase
<svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"></path> </svg> </a> </div> </div> </section>`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Schedule.astro", void 0);

const $$Horarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Horarios ALFA BOX Tudela - Clases de CrossFit y Entrenamiento Funcional" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Schedule", $$Schedule, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/horarios.astro", void 0);

const $$file = "C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/horarios.astro";
const $$url = "/horarios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Horarios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
