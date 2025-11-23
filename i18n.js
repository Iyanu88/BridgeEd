// js/i18n.js
window.dictionary = {
  en: { /* ← paste the entire English dictionary here (copy from your original file) */ },
  yo: { /* ← Yoruba */ },
  ha: { /* ← Hausa */ },
  ig: { /* ← Igbo */ },
  pcm: { /* ← Pidgin */ },
  // ... paste all 5 languages exactly as they were in your original code
};

// Keep the full dictionary – I’ll give you a tiny version here for space, just replace it with your full one
window.dictionary = {
  en: {
    app_name: "BridgeEd", welcome_headline: "Inclusive Learning, Limitless Future.", btn_get_started: "Get Started",
    // ... (put ALL your keys here – exactly the same as before)
  },
  // ... yo, ha, ig, pcm exactly as you had
};

window.translate = () => {
  const lang = appState.language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[lang]?.[key]) el.textContent = dictionary[lang][key];
    const titleKey = el.getAttribute('data-i18n-title');
    if (titleKey && dictionary[lang]?.[titleKey]) el.title = dictionary[lang][titleKey];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dictionary[lang]?.[key]) el.placeholder = dictionary[lang][key];
  });
};

window.setLanguage = (langCode) => {
  appState.language = langCode;
  document.documentElement.lang = langCode;
  translate();
};