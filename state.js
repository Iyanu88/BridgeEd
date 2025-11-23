// js/state.js
window.appState = {
  currentPage: 'landing',
  language: 'en',
  a11y: {
    fontSize: 'base',      // base | lg | xl
    contrast: false,
    dyslexiaMode: true,
    audioFirst: false,
    simplifiedMode: false,
    voiceNavigation: false,
  },
  onboardingStep: 0,
};

const fontSizeClasses = { base: 'text-base', lg: 'text-lg', xl: 'text-xl' };

window.updateA11y = () => {
  const body = document.body;
  body.classList.remove('text-base', 'text-lg', 'text-xl');
  body.classList.add(fontSizeClasses[appState.a11y.fontSize]);

  body.classList.toggle('high-contrast', appState.a11y.contrast);
  body.classList.toggle('dyslexia-mode', appState.a11y.dyslexiaMode);
};

window.toggleContrast = () => {
  appState.a11y.contrast = !appState.a11y.contrast;
  updateA11y();
};

window.increaseFontSize = () => {
  const sizes = ['base', 'lg', 'xl'];
  const i = sizes.indexOf(appState.a11y.fontSize);
  appState.a11y.fontSize = sizes[(i + 1) % sizes.length];
  updateA11y();
};