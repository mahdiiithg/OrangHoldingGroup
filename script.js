const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });
}

const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('cookies-accept');
const essentialBtn = document.getElementById('cookies-essential');
const consentKey = 'holdco-cookie-consent';

const storedConsent = localStorage.getItem(consentKey);
if (storedConsent && cookieBanner) {
  cookieBanner.classList.add('hidden');
}

const setConsent = (value) => {
  localStorage.setItem(consentKey, value);
  if (cookieBanner) cookieBanner.classList.add('hidden');
};

if (acceptBtn) acceptBtn.addEventListener('click', () => setConsent('all'));
if (essentialBtn) {
  essentialBtn.addEventListener('click', () => setConsent('essential'));
}
