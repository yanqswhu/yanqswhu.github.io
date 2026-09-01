(() => {
  const storageKey = 'site-language';
  const supportedLanguages = new Set(['zh', 'en']);

  function normalizeLanguage(language) {
    return supportedLanguages.has(language) ? language : 'zh';
  }

  function updateLocalizedContent(activeLanguage) {
    const hiddenLanguage = activeLanguage === 'zh' ? 'en' : 'zh';
    let visibilityStyle = document.getElementById('language-visibility');

    if (!visibilityStyle) {
      visibilityStyle = document.createElement('style');
      visibilityStyle.id = 'language-visibility';
      document.head.appendChild(visibilityStyle);
    }

    visibilityStyle.textContent = `[data-i18n="${hiddenLanguage}"] { display: none !important; }`;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const isVisible = element.dataset.i18n === activeLanguage;
      element.hidden = !isVisible;
      element.setAttribute('aria-hidden', String(!isVisible));
    });
  }

  function applyLanguage(language, persist = false) {
    const activeLanguage = normalizeLanguage(language);
    const root = document.documentElement;
    const toggle = document.getElementById('language-toggle');

    root.dataset.lang = activeLanguage;
    root.lang = activeLanguage === 'zh' ? 'zh-CN' : 'en';
    updateLocalizedContent(activeLanguage);

    if (toggle) {
      const switchesToEnglish = activeLanguage === 'zh';
      toggle.textContent = switchesToEnglish ? 'EN' : '中文';
      toggle.setAttribute('aria-label', switchesToEnglish ? 'Switch to English' : '切换至中文');
      toggle.setAttribute('title', switchesToEnglish ? 'Switch to English' : '切换至中文');
    }

    if (persist) {
      try {
        localStorage.setItem(storageKey, activeLanguage);
      } catch (_) {
        // Continue without persistence when browser storage is unavailable.
      }
    }
  }

  const initialLanguage = document.documentElement.dataset.lang;
  applyLanguage(initialLanguage);

  document.getElementById('language-toggle')?.addEventListener('click', () => {
    const nextLanguage = document.documentElement.dataset.lang === 'zh' ? 'en' : 'zh';
    applyLanguage(nextLanguage, true);
  });
})();
