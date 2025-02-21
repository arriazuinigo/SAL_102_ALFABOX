/* empty css                                   */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as addAttribute, a as renderComponent } from '../chunks/astro/server_BJPLBp84.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Bq5hY_ym.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Schedule = createComponent(($$result, $$props, $$slots) => {
  const classColors = {
    "ENDURANCE": "#3DA2C2",
    // Teal blue
    "ENDURANCE M.": "#3DA2C2",
    // Same teal blue
    "BASIC GYMS": "#DC3545",
    // Red
    "HALTEROFILIA": "#17A2B8",
    // Turquoise
    "STRENGTH": "#DC3545",
    // Same red as BASIC GYMS
    "ADVANCED GYMS": "#6F42C1",
    // Purple
    "CrossTraining": "#28A745",
    // Green
    "CrossTraining m.": "#28A745",
    // Same green
    "Open Box": "#6C757D",
    // Grey
    "Open Box m.": "#6C757D"
    // Same grey
  };
  const schedule = [
    {
      time: "06:00",
      monday: "Open Box m.",
      tuesday: "Open Box m.",
      wednesday: "Open Box m.",
      thursday: "Open Box m.",
      friday: "Open Box m.",
      saturday: "Open Box m.",
      sunday: "Open Box m."
    },
    {
      time: "07:00",
      monday: "Open Box m.",
      tuesday: "Open Box m.",
      wednesday: "Open Box m.",
      thursday: "Open Box m.",
      friday: "Open Box m.",
      saturday: "Open Box m.",
      sunday: "Open Box m."
    },
    {
      time: "07:15",
      monday: "CrossTraining m.",
      tuesday: "CrossTraining m.",
      wednesday: "CrossTraining m.",
      thursday: "ENDURANCE M.",
      friday: "CrossTraining m.",
      saturday: "",
      sunday: ""
    },
    {
      time: "08:00",
      monday: "Open Box m.",
      tuesday: "Open Box m.",
      wednesday: "Open Box m.",
      thursday: "Open Box m.",
      friday: "Open Box m.",
      saturday: "Open Box m.",
      sunday: "Open Box m."
    },
    {
      time: "08:30",
      monday: "CrossTraining m.",
      tuesday: "",
      wednesday: "CrossTraining m.",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: ""
    },
    {
      time: "09:00",
      monday: "Open Box m.",
      tuesday: "Open Box m.",
      wednesday: "Open Box m.",
      thursday: "Open Box m.",
      friday: "Open Box m.",
      saturday: "CrossTraining m.",
      sunday: "Open Box m."
    },
    {
      time: "09:30",
      monday: "ENDURANCE M.",
      tuesday: "CrossTraining m.",
      wednesday: "ENDURANCE M.",
      thursday: "CrossTraining m.",
      friday: "CrossTraining m.",
      saturday: "",
      sunday: ""
    },
    {
      time: "10:00",
      monday: "Open Box m.",
      tuesday: "Open Box m.",
      wednesday: "Open Box m.",
      thursday: "Open Box m.",
      friday: "Open Box m.",
      saturday: "CrossTraining m.",
      sunday: "Open Box m."
    },
    {
      time: "14:30",
      monday: "CrossTraining m.",
      tuesday: "CrossTraining m.",
      wednesday: "CrossTraining m.",
      thursday: "CrossTraining m.",
      friday: "CrossTraining m.",
      saturday: "",
      sunday: ""
    },
    {
      time: "15:00",
      monday: "Open Box",
      tuesday: "Open Box",
      wednesday: "Open Box",
      thursday: "Open Box",
      friday: "Open Box",
      saturday: "Open Box",
      sunday: "Open Box"
    },
    {
      time: "16:00",
      monday: "Open Box",
      tuesday: "CrossTraining",
      wednesday: "CrossTraining",
      thursday: "CrossTraining",
      friday: "CrossTraining",
      saturday: "Open Box",
      sunday: "Open Box"
    },
    {
      time: "16:30",
      monday: "ENDURANCE",
      tuesday: "Open Box",
      wednesday: "Open Box",
      thursday: "Open Box",
      friday: "Open Box",
      saturday: "",
      sunday: ""
    },
    {
      time: "17:00",
      monday: "CrossTraining",
      tuesday: "CrossTraining",
      wednesday: "Open Box",
      thursday: "CrossTraining",
      friday: "CrossTraining",
      saturday: "Open Box",
      sunday: "Open Box"
    },
    {
      time: "17:30",
      monday: "BASIC GYMS",
      tuesday: "STRENGTH",
      wednesday: "ADVANCED GYMS",
      thursday: "STRENGTH",
      friday: "",
      saturday: "",
      sunday: ""
    },
    {
      time: "18:00",
      monday: "Open Box",
      tuesday: "Open Box",
      wednesday: "Open Box",
      thursday: "Open Box",
      friday: "Open Box",
      saturday: "Open Box",
      sunday: "Open Box"
    },
    {
      time: "18:30",
      monday: "CrossTraining",
      tuesday: "CrossTraining",
      wednesday: "CrossTraining",
      thursday: "CrossTraining",
      friday: "CrossTraining",
      saturday: "",
      sunday: ""
    },
    {
      time: "19:00",
      monday: "Open Box",
      tuesday: "Open Box",
      wednesday: "Open Box",
      thursday: "Open Box",
      friday: "Open Box",
      saturday: "Open Box",
      sunday: "Open Box"
    },
    {
      time: "19:30",
      monday: "ENDURANCE",
      tuesday: "CrossTraining",
      wednesday: "CrossTraining",
      thursday: "ENDURANCE",
      friday: "CrossTraining",
      saturday: "",
      sunday: ""
    },
    {
      time: "20:30",
      monday: "CrossTraining",
      tuesday: "ENDURANCE",
      wednesday: "ENDURANCE",
      thursday: "CrossTraining",
      friday: "",
      saturday: "",
      sunday: ""
    },
    {
      time: "21:00",
      monday: "Open Box",
      tuesday: "Open Box",
      wednesday: "Open Box",
      thursday: "Open Box",
      friday: "Open Box",
      saturday: "Open Box",
      sunday: "Open Box"
    },
    {
      time: "22:00",
      monday: "Open Box",
      tuesday: "Open Box",
      wednesday: "Open Box",
      thursday: "Open Box",
      friday: "Open Box",
      saturday: "Open Box",
      sunday: "Open Box"
    }
  ];
  const days = ["Hora", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado", "Domingo"];
  const getClassStyle = (className) => {
    if (!className) return "";
    const bgColor = classColors[className];
    if (!bgColor) return "";
    const textColor = bgColor === "#6C757D" ? "white" : "black";
    return `background-color: ${bgColor}; color: ${textColor};`;
  };
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-s4x4txsv> <div class="container" data-astro-cid-s4x4txsv> <h1 data-astro-cid-s4x4txsv>Horarios</h1> <div class="table-wrapper" data-astro-cid-s4x4txsv> <table data-astro-cid-s4x4txsv> <thead data-astro-cid-s4x4txsv> <tr data-astro-cid-s4x4txsv> ${days.map((day) => renderTemplate`<th data-astro-cid-s4x4txsv>${day}</th>`)} </tr> </thead> <tbody data-astro-cid-s4x4txsv> ${schedule.map((row) => renderTemplate`<tr data-astro-cid-s4x4txsv> <td class="time-cell" data-astro-cid-s4x4txsv>${row.time}</td> <td${addAttribute(getClassStyle(row.monday), "style")} data-astro-cid-s4x4txsv>${row.monday}</td> <td${addAttribute(getClassStyle(row.tuesday), "style")} data-astro-cid-s4x4txsv>${row.tuesday}</td> <td${addAttribute(getClassStyle(row.wednesday), "style")} data-astro-cid-s4x4txsv>${row.wednesday}</td> <td${addAttribute(getClassStyle(row.thursday), "style")} data-astro-cid-s4x4txsv>${row.thursday}</td> <td${addAttribute(getClassStyle(row.friday), "style")} data-astro-cid-s4x4txsv>${row.friday}</td> <td${addAttribute(getClassStyle(row.saturday), "style")} data-astro-cid-s4x4txsv>${row.saturday}</td> <td${addAttribute(getClassStyle(row.sunday), "style")} data-astro-cid-s4x4txsv>${row.sunday}</td> </tr>`)} </tbody> </table> </div> <div class="booking-section" data-astro-cid-s4x4txsv> <h2 data-astro-cid-s4x4txsv>Reserva tu clase</h2> <p data-astro-cid-s4x4txsv>
Reserva tu plaza para asegurar tu espacio en la clase. Las reservas se pueden realizar hasta 1 hora antes del inicio de la clase.
</p> <a href="https://wa.me/34680734560" target="_blank" rel="noopener noreferrer" data-astro-cid-s4x4txsv>
Reservar Clase
<svg fill="currentColor" viewBox="0 0 24 24" data-astro-cid-s4x4txsv> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" data-astro-cid-s4x4txsv></path> </svg> </a> </div> </div> </section> `;
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
