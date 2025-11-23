// js/main.js
document.addEventListener('firebaseReady', () => {
  updateA11y();
  setLanguage(appState.language);

  // Hide all pages first
  document.querySelectorAll('.page-content').forEach(p => p.style.display = 'none');

  // Show starting page
  navigateTo(appState.currentPage);
});