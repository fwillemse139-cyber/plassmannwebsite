/* =====================================================
   PASSMANN — lang.js
   Language switcher + nav + form logic
   ===================================================== */
(function () {
  'use strict';

  const STORAGE_KEY = 'passmann_lang';
  const DEFAULT     = 'es';
  const LANGS       = ['es', 'en', 'de', 'fr', 'nl'];
  const LANG_LABELS = { es: 'ES', en: 'EN', de: 'DE', fr: 'FR', nl: 'NL' };

  /* ---------- nav labels per language ---------- */
  const NAV = {
    nav_home:     { es:'Inicio',      en:'Home',      de:'Start',     fr:'Accueil',  nl:'Home'      },
    nav_over:     { es:'Sobre Nosotros', en:'About Us',  de:'Über Uns',  fr:'À Propos', nl:'Over Ons'  },
    nav_diensten: { es:'Servicios',   en:'Services',  de:'Leistungen',fr:'Services', nl:'Diensten'  },
    nav_projecten:{ es:'Proyectos',   en:'Projects',  de:'Projekte',  fr:'Projets',  nl:'Projecten' },
    nav_contact:  { es:'Contacto',    en:'Contact',   de:'Kontakt',   fr:'Contact',  nl:'Contact'   },
    nav_cal:      { es:'Emergencias', en:'Emergency', de:'Notfall',   fr:'Urgences', nl:'Calamiteiten' },
  };

  /* ---------- read / write preference ---------- */
  function getSaved() {
    try { return localStorage.getItem(STORAGE_KEY) || DEFAULT; }
    catch(e) { return DEFAULT; }
  }
  function save(l) {
    try { localStorage.setItem(STORAGE_KEY, l); } catch(e){}
  }

  /* ---------- apply a language ---------- */
  function apply(lang) {
    /* show/hide content blocks */
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.classList.toggle('lang-active', el.dataset.lang === lang);
    });

    /* highlight active lang button */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.l === lang);
    });

    /* update nav link labels */
    Object.keys(NAV).forEach(key => {
      document.querySelectorAll(`[data-nav="${key}"]`).forEach(el => {
        el.textContent = NAV[key][lang] || NAV[key][DEFAULT];
      });
    });

    /* html lang attribute */
    document.documentElement.lang = lang;

    /* update page title + meta description */
    const metaEl = document.querySelector(`[data-meta="${lang}"]`);
    if (metaEl) {
      if (metaEl.dataset.title) document.title = metaEl.dataset.title;
      let md = document.querySelector('meta[name="description"]');
      if (!md) { md = document.createElement('meta'); md.name = 'description'; document.head.appendChild(md); }
      if (metaEl.dataset.desc) md.content = metaEl.dataset.desc;
    }
  }

  /* ---------- switch language ---------- */
  function switchLang(lang) {
    save(lang);
    apply(lang);
  }

  /* ---------- build lang selector buttons ---------- */
  function buildSelectors() {
    document.querySelectorAll('.lang-selector').forEach(wrap => {
      wrap.innerHTML = '';
      LANGS.forEach(code => {
        const btn = document.createElement('button');
        btn.className = 'lang-btn';
        btn.dataset.l = code;
        btn.textContent = LANG_LABELS[code];
        btn.addEventListener('click', () => switchLang(code));
        wrap.appendChild(btn);
      });
    });
  }

  /* ---------- mobile nav toggle ---------- */
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links  = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  /* ---------- file upload label ---------- */
  function initFileUpload() {
    document.querySelectorAll('.file-upload').forEach(wrap => {
      const input = wrap.querySelector('input[type="file"]');
      const lbl   = wrap.querySelector('.file-label');
      if (!input || !lbl) return;
      wrap.addEventListener('click', () => input.click());
      input.addEventListener('change', () => {
        lbl.textContent = input.files.length
          ? `${input.files.length} archivo(s) seleccionado(s)`
          : '';
      });
    });
  }

  /* ---------- form feedback ---------- */
  function initForms() {
    document.querySelectorAll('form[data-form]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('[type="submit"]');
        if (btn) {
          const orig = btn.textContent;
          btn.textContent = '✓ Enviado / Sent';
          btn.disabled = true;
          btn.style.cssText = 'background:#16a34a!important;cursor:default';
          setTimeout(() => { btn.textContent = orig; btn.disabled = false; btn.style.cssText = ''; }, 4000);
        }
      });
    });
  }

  /* ---------- mark active nav link ---------- */
  function markActive() {
    const path = window.location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', href.includes(path) && path !== '');
    });
  }

  /* ---------- init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    buildSelectors();
    initMobileNav();
    initFileUpload();
    initForms();
    markActive();
    apply(getSaved());
  });
})();
