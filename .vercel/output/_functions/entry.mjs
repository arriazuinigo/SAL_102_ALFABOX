import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BmYBwRM8.mjs';
import { manifest } from './manifest_D0yVVQaW.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/alfabox.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/api/contact copy.astro.mjs');
const _page4 = () => import('./pages/api/contact-form.astro.mjs');
const _page5 = () => import('./pages/contacto.astro.mjs');
const _page6 = () => import('./pages/horarios.astro.mjs');
const _page7 = () => import('./pages/tarifas.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/alfabox.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/api/contact copy.ts", _page3],
    ["src/pages/api/contact-form.ts", _page4],
    ["src/pages/contacto.astro", _page5],
    ["src/pages/horarios.astro", _page6],
    ["src/pages/tarifas.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "16dd721e-8280-42c2-95e1-127b0b3b5b53",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
