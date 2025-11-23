// js/navigation.js
window.navigateTo = (pageId) => {
  const area = document.getElementById('content-area');
  const newPage = document.getElementById(`page-${pageId}`);
  if (!newPage) return console.error(`Page ${pageId} not found`);

  document.querySelectorAll('.page-content.active').forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  appState.currentPage = pageId;
  setTimeout(() => {
    newPage.style.display = 'flex';
    newPage.classList.add('active');
    translate();
  }, 320);
};

window.nextOnboardingFlowStep = (step) => {
  const map = {
    language: 'language',
    signup: 'signup',
    'a11y-setup': 'a11y-setup',
    'education-setup': 'education-setup',
    'study-goals': 'study-goals',
    'premium-intro': 'premium-intro',
    'onboarding-tour': () => {
      appState.onboardingStep = 0;
      navigateTo('onboarding-tour');
      renderOnboardingSlide(0);
    },
  };
  typeof map[step] === 'function' ? map[step]() : navigateTo(map[step] || 'dashboard');
};

window.nextOnboardingStep = () => {
  appState.onboardingStep++;
  if (appState.onboardingStep < 4) renderOnboardingSlide(appState.onboardingStep);
  else navigateTo('dashboard');
};