// js/pages.js
const renderPageTemplate = (id, html) => {
  const area = document.getElementById("content-area");
  let page = document.getElementById(`page-${id}`);

  if (!page) {
    page = document.createElement("div");
    page.id = `page-${id}`;
    page.className =
      "page-content flex-grow flex flex-col items-center justify-center w-full p-6 fade-in";
    page.style.display = "none";
    area.appendChild(page);
  }

  page.innerHTML = html;
  lucide.createIcons();
  document.dispatchEvent(new Event("page-rendered"));
};

/* ------------------------------------------
   LANDING PAGE
-------------------------------------------*/
renderPageTemplate(
  "landing",
  `
  <section class="text-center fade-in max-w-xl">
    <h1 class="text-4xl font-extrabold mb-4" data-i18n="welcome_headline">
      Welcome to BridgeEd
    </h1>

    <p class="text-lg opacity-80 mb-6" data-i18n="welcome_tagline">
      Inclusive learning for everyone.
    </p>

    <button onclick="navigateTo('language')" 
            class="cta-button primary">
      <span data-i18n="btn_get_started">Get Started</span>
    </button>
  </section>
`
);

/* ------------------------------------------
   LANGUAGE SELECTION
-------------------------------------------*/
renderPageTemplate(
  "language",
  `
  <div class="text-center fade-in">
    <h2 class="text-3xl font-bold mb-4" data-i18n="choose_language">Choose Your Language</h2>

    <select onchange="setLanguage(this.value)" 
            class="p-3 rounded-xl border mt-4">
      <option value="en">English</option>
      <option value="yo">Yoruba</option>
      <option value="ha">Hausa</option>
      <option value="ig">Igbo</option>
      <option value="pcm">Pidgin</option>
    </select>

    <button onclick="navigateTo('signup')" class="cta-button primary mt-6">
      <span data-i18n="continue">Continue</span>
    </button>
  </div>
`
);

/* ------------------------------------------
   SIGNUP
-------------------------------------------*/
renderPageTemplate(
  "signup",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">Create Your Learning Profile</h2>

    <input class="input-field mb-3" placeholder="Full Name"/>
    <input class="input-field mb-3" placeholder="Email"/>

    <button onclick="navigateTo('a11y-setup')" class="cta-button primary mt-4">
      Continue
    </button>
  </div>
`
);

/* ------------------------------------------
   ACCESSIBILITY SETUP
-------------------------------------------*/
renderPageTemplate(
  "a11y-setup",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">Accessibility Settings</h2>

    <div class="flex flex-col space-y-3 mt-4">
      <button class="cta-button secondary" onclick="toggleContrast()">High Contrast</button>
      <button class="cta-button secondary" onclick="increaseFontSize()">Increase Text Size</button>
    </div>

    <button onclick="navigateTo('education-setup')" class="cta-button primary mt-6">
      Continue
    </button>
  </div>
`
);

/* ------------------------------------------
   EDUCATION SETUP
-------------------------------------------*/
renderPageTemplate(
  "education-setup",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">Education Level</h2>

    <select class="p-3 rounded-xl border mb-4">
      <option>Primary</option>
      <option>Secondary</option>
      <option>University</option>
    </select>

    <button onclick="navigateTo('study-goals')" class="cta-button primary">
      Continue
    </button>
  </div>
`
);

/* ------------------------------------------
   STUDY GOALS
-------------------------------------------*/
renderPageTemplate(
  "study-goals",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">Your Study Goals</h2>

    <input placeholder="e.g. Improve Math, Learn English" 
           class="input-field mb-4"/>

    <button onclick="navigateTo('premium-intro')" class="cta-button primary">
      Continue
    </button>
  </div>
`
);

/* ------------------------------------------
   PREMIUM INTRO
-------------------------------------------*/
renderPageTemplate(
  "premium-intro",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">BridgeEd Premium</h2>
    <p class="opacity-80 mb-4">Unlock advanced tools, AI tutor & offline access.</p>

    <button onclick="navigateTo('onboarding-tour')" 
            class="cta-button secondary">
      Continue Free
    </button>
  </div>
`
);

/* ------------------------------------------
   ONBOARDING TOUR
-------------------------------------------*/
renderPageTemplate(
  "onboarding-tour",
  `
  <div class="fade-in text-center">
    <div id="onboarding-slide-container"></div>

    <button onclick="nextOnboardingStep()" class="cta-button primary mt-6">
      Next
    </button>
  </div>
`
);

/* ------------------------------------------
   DASHBOARD
-------------------------------------------*/
renderPageTemplate(
  "dashboard",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">Welcome to Your Dashboard</h2>

    <div class="grid grid-cols-2 gap-4 mt-6">
      <button class="feature-card" onclick="navigateTo('home')">Home</button>
      <button class="feature-card" onclick="navigateTo('learn')">Learn</button>
      <button class="feature-card" onclick="navigateTo('settings')">Settings</button>
    </div>
  </div>
`
);

/* ------------------------------------------
   HOME
-------------------------------------------*/
renderPageTemplate(
  "home",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">Home</h2>
    <p class="opacity-80">Your quick actions and updates will appear here.</p>
  </div>
`
);

/* ------------------------------------------
   LEARN
-------------------------------------------*/
renderPageTemplate(
  "learn",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">Learning Hub</h2>
    <p class="opacity-80">Courses, materials, lessons and more.</p>
  </div>
`
);

/* ------------------------------------------
   SETTINGS
-------------------------------------------*/
renderPageTemplate(
  "settings",
  `
  <div class="fade-in text-center">
    <h2 class="text-3xl font-bold mb-4">Settings</h2>

    <div class="space-y-3 mt-4">
      <button class="cta-button secondary" onclick="toggleContrast()">Toggle Contrast</button>
      <button class="cta-button secondary" onclick="increaseFontSize()">Font Size</button>
    </div>
  </div>
`
);
