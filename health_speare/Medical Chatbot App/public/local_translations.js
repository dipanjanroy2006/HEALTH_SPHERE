(function(){
  // Shared client-side translation module used by pages
  const translations = {
    en: {/* minimal common keys */},
    hi: {},
    bn: {}
  };

  // We'll populate minimal keys from sign_up_screen; pages can add more keys
  translations.en = window.__HS_TRANSLATIONS_EN__ || {};
  translations.hi = window.__HS_TRANSLATIONS_HI__ || {};
  translations.bn = window.__HS_TRANSLATIONS_BN__ || {};

  let currentLang = localStorage.getItem('userLang') || 'en';

  function t(key){
    return (translations[currentLang] && translations[currentLang][key]) || (translations.en && translations.en[key]) || key;
  }

  function applyLanguage(lang){
    if(lang) currentLang = lang;
    localStorage.setItem('userLang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });

    const pageSelect = document.getElementById('pageLangSelect');
    if(pageSelect) pageSelect.value = currentLang;
    const formLang = document.getElementById('language');
    if(formLang) formLang.value = currentLang;
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const pageSelect = document.getElementById('pageLangSelect');
    if(pageSelect) pageSelect.addEventListener('change', e=>applyLanguage(e.target.value));
    const formLang = document.getElementById('language');
    if(formLang) formLang.addEventListener('change', e=>applyLanguage(e.target.value));
    applyLanguage(currentLang);
  });

  window.hsT = t;
  window.applyLanguage = applyLanguage;
  window.__HS_SHARED_TRANSLATIONS__ = translations;
})();
