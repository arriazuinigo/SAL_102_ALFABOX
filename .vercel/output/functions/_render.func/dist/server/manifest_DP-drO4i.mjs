import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_Hz8Plt1w.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_XC23hIW5.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/","cacheDir":"file:///C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/node_modules/.astro/","outDir":"file:///C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/dist/","srcDir":"file:///C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/","publicDir":"file:///C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/public/","buildClientDir":"file:///C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/dist/client/","buildServerDir":"file:///C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/alfabox.Czdy6fJW.css"},{"type":"inline","content":".hero-section[data-astro-cid-oom4siiy]{padding:8rem 0;background-color:#fff}.container[data-astro-cid-oom4siiy]{max-width:1200px;margin:0 auto;padding:0 1rem}.content-wrapper[data-astro-cid-oom4siiy]{max-width:64rem;margin:0 auto}.hero-title[data-astro-cid-oom4siiy]{font-size:2.25rem;font-weight:700;text-align:center;margin-bottom:2rem;color:var(--color-primary)}.intro[data-astro-cid-oom4siiy]{margin-bottom:4rem}.hero-image[data-astro-cid-oom4siiy]{width:100%;height:400px;-o-object-fit:cover;object-fit:cover;border-radius:.5rem;box-shadow:0 10px 15px #0000001a;margin-bottom:2rem}.text-lg[data-astro-cid-oom4siiy]{font-size:1.125rem;color:var(--color-gray-700);margin-bottom:1.5rem}.features-grid[data-astro-cid-oom4siiy]{display:grid;gap:2rem;margin-bottom:4rem}@media (min-width: 768px){.features-grid[data-astro-cid-oom4siiy]{grid-template-columns:repeat(2,1fr)}}.feature-card[data-astro-cid-oom4siiy]{background-color:var(--color-bg-gray-50);padding:1.5rem;border-radius:.5rem;border:1px solid var(--color-primary)}.feature-card[data-astro-cid-oom4siiy] h3[data-astro-cid-oom4siiy]{font-size:1.25rem;font-weight:600;margin-bottom:.75rem;color:var(--color-primary)}.feature-card[data-astro-cid-oom4siiy] p[data-astro-cid-oom4siiy]{color:var(--color-gray-600)}.cta[data-astro-cid-oom4siiy]{background-color:var(--color-primary);color:#fff;padding:2rem;border-radius:.5rem}.cta[data-astro-cid-oom4siiy] h2[data-astro-cid-oom4siiy]{font-size:1.5rem;font-weight:700;margin-bottom:1rem;text-align:center}.cta[data-astro-cid-oom4siiy] p[data-astro-cid-oom4siiy]{text-align:center;margin-bottom:1.5rem}.cta-button-wrapper[data-astro-cid-oom4siiy]{text-align:center}.cta-button[data-astro-cid-oom4siiy]{display:inline-block;background-color:#fff;color:var(--color-primary);padding:.75rem 2rem;border-radius:9999px;font-weight:600;text-decoration:none;transition:background-color .3s ease}.cta-button[data-astro-cid-oom4siiy]:hover{background-color:var(--color-bg-gray-100)}\n"}],"routeData":{"route":"/alfabox","isIndex":false,"type":"page","pattern":"^\\/alfabox\\/?$","segments":[[{"content":"alfabox","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/alfabox.astro","pathname":"/alfabox","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact copy","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact copy\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact copy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact copy.ts","pathname":"/api/contact copy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact-form","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact-form\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact-form","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact-form.ts","pathname":"/api/contact-form","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/alfabox.Czdy6fJW.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/alfabox.Czdy6fJW.css"}],"routeData":{"route":"/horarios","isIndex":false,"type":"page","pattern":"^\\/horarios\\/?$","segments":[[{"content":"horarios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/horarios.astro","pathname":"/horarios","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/alfabox.Czdy6fJW.css"}],"routeData":{"route":"/tarifas","isIndex":false,"type":"page","pattern":"^\\/tarifas\\/?$","segments":[[{"content":"tarifas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tarifas.astro","pathname":"/tarifas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/Hero.BwXjGcf2.css"},{"type":"external","src":"/_astro/alfabox.Czdy6fJW.css"},{"type":"inline","content":".swiper[data-astro-cid-bbe6dxrz],.swiper-slide[data-astro-cid-bbe6dxrz]{width:100%;height:100%}.swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{background:#2e9ca7}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/alfabox.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/horarios.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/pages/tarifas.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/api/contact copy@_@ts":"pages/api/contact copy.astro.mjs","\u0000@astro-page:src/pages/api/contact-form@_@ts":"pages/api/contact-form.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/alfabox@_@astro":"pages/alfabox.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/horarios@_@astro":"pages/horarios.astro.mjs","\u0000@astro-page:src/pages/tarifas@_@astro":"pages/tarifas.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DywjQxtj.mjs","\u0000@astrojs-manifest":"manifest_DP-drO4i.mjs","C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DP2QXoDP.js","C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.C5BcnP48.js","C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.BxOWVE-W.js","C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.3u430bf-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Header.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"header\"),t=document.getElementById(\"menuButton\"),e=document.getElementById(\"mobileNav\");document.querySelectorAll(\".nav-link\");const a=document.querySelectorAll(\".mobile-link\"),n=()=>{window.scrollY>50?d.classList.add(\"header-scrolled\"):d.classList.remove(\"header-scrolled\")},s=()=>{const i=t.getAttribute(\"aria-expanded\")===\"true\";t.setAttribute(\"aria-expanded\",!i),e.classList.toggle(\"active\"),e.setAttribute(\"aria-hidden\",i)};a.forEach(i=>{i.addEventListener(\"click\",()=>{e.classList.remove(\"active\"),t.setAttribute(\"aria-expanded\",\"false\"),e.setAttribute(\"aria-hidden\",\"true\")})});t.addEventListener(\"click\",s);window.addEventListener(\"scroll\",n);window.addEventListener(\"resize\",()=>{window.innerWidth>=768&&(e.classList.remove(\"active\"),t.setAttribute(\"aria-expanded\",\"false\"),e.setAttribute(\"aria-hidden\",\"true\"))});n();"],["C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/src/components/Contact.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"contactForm\"),t=document.getElementById(\"formMessage\"),a=document.getElementById(\"submitButton\"),m=a?.textContent||\"Empezar Ahora\";function s(e,n=!1){t&&(t.className=n?\"block bg-red-500 text-white p-4 rounded-lg mb-4\":\"block bg-green-500 text-white p-4 rounded-lg mb-4\",t.textContent=e,setTimeout(()=>{t.className=\"hidden\",t.textContent=\"\"},5e3))}function c(e){a&&(a.disabled=e,a.textContent=e?\"Enviando...\":m)}o&&t&&o.addEventListener(\"submit\",async e=>{e.preventDefault(),c(!0);try{const n=new FormData(o),r=await fetch(\"/api/contact\",{method:\"POST\",body:n}),i=await r.json();r.ok?(s(\"¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.\"),o.reset()):s(i.message||\"Error al enviar el mensaje\",!0)}catch{s(\"Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.\",!0)}finally{c(!1)}});"],["C:/Users/Usuario/Desktop/Git/SAL_102_ALFABOX/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var f=\"@vercel/analytics\",l=\"1.5.0\",w=()=>{window.va||(window.va=function(...r){(window.vaq=window.vaq||[]).push(r)})};function d(){return typeof window<\"u\"}function u(){try{const e=\"production\"}catch{}return\"production\"}function v(e=\"auto\"){if(e===\"auto\"){window.vam=u();return}window.vam=e}function m(){return(d()?window.vam:u())||\"production\"}function c(){return m()===\"development\"}function b(e,r){if(!e||!r)return e;let n=e;try{const t=Object.entries(r);for(const[a,i]of t)if(!Array.isArray(i)){const o=s(i);o.test(n)&&(n=n.replace(o,`/[${a}]`))}for(const[a,i]of t)if(Array.isArray(i)){const o=s(i.join(\"/\"));o.test(n)&&(n=n.replace(o,`/[...${a}]`))}return n}catch{return e}}function s(e){return new RegExp(`/${h(e)}(?=[/?#]|$)`)}function h(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}function y(e){return e.scriptSrc?e.scriptSrc:c()?\"https://va.vercel-scripts.com/v1/script.debug.js\":e.basePath?`${e.basePath}/insights/script.js`:\"/_vercel/insights/script.js\"}function g(e={debug:!0}){var r;if(!d())return;v(e.mode),w(),e.beforeSend&&((r=window.va)==null||r.call(window,\"beforeSend\",e.beforeSend));const n=y(e);if(document.head.querySelector(`script[src*=\"${n}\"]`))return;const t=document.createElement(\"script\");t.src=n,t.defer=!0,t.dataset.sdkn=f+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=l,e.disableAutoTrack&&(t.dataset.disableAutoTrack=\"1\"),e.endpoint?t.dataset.endpoint=e.endpoint:e.basePath&&(t.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(t.dataset.dsn=e.dsn),t.onerror=()=>{const a=c()?\"Please check if any ad blockers are enabled and try again.\":\"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${a}`)},c()&&e.debug===!1&&(t.dataset.debug=\"false\"),document.head.appendChild(t)}function p({route:e,path:r}){var n;(n=window.va)==null||n.call(window,\"pageview\",{route:e,path:r})}function k(){try{return}catch{}}customElements.define(\"vercel-analytics\",class extends HTMLElement{constructor(){super();try{const r=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\");g({...r,disableAutoTrack:!0,framework:\"astro\",basePath:k(),beforeSend:window.webAnalyticsBeforeSend});const t=this.dataset.pathname;p({route:b(t??\"\",n),path:t})}catch(r){throw new Error(`Failed to parse WebAnalytics properties: ${r}`)}}});"]],"assets":["/_astro/alfabox.Czdy6fJW.css","/favicon.png","/Logo.png","/Logo_cropped.ico","/Logo_cropped.png","/manifest.json","/robots.txt","/sitemap.xml","/_astro/Hero.astro_astro_type_script_index_0_lang.C5BcnP48.js","/_astro/Hero.BwXjGcf2.css"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"4PdAQQZLY2IKSB1NqDLHsDV1cW3VOCpPIVkxx5FnSFY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
