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

/* Principal investments carousel */
const investmentCarousel = document.querySelector('[data-investment-carousel]');

if (investmentCarousel) {
  const slides = Array.from(investmentCarousel.querySelectorAll('.investment-slide'));
  const leftBtn = investmentCarousel.querySelector('.investment-arrow-left');
  const rightBtn = investmentCarousel.querySelector('.investment-arrow-right');
  const counter = investmentCarousel.querySelector('[data-investment-counter]');
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === activeIndex);
    });
    if (counter) {
      counter.textContent = `${activeIndex + 1} / ${slides.length}`;
    }
  };

  if (leftBtn) {
    leftBtn.addEventListener('click', () => showSlide(activeIndex - 1));
  }
  if (rightBtn) {
    rightBtn.addEventListener('click', () => showSlide(activeIndex + 1));
  }
}

/* Key corporate events timeline */
const eventsSwiper = document.querySelector('[data-events-swiper]');

if (eventsSwiper) {
  const track = eventsSwiper.querySelector('.events-track');
  const leftBtn = eventsSwiper.querySelector('.events-nav-left');
  const rightBtn = eventsSwiper.querySelector('.events-nav-right');
  const slides = Array.from(eventsSwiper.querySelectorAll('.events-slide'));
  const chips = Array.from(eventsSwiper.parentElement?.querySelectorAll('.events-chip') ?? []);

  if (track && leftBtn && rightBtn && slides.length) {
    const getStep = () => {
      const slideRect = slides[0].getBoundingClientRect();
      const trackStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || '40');
      return slideRect.width + gap;
    };

    const updateNavState = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      leftBtn.disabled = track.scrollLeft <= 4;
      rightBtn.disabled = track.scrollLeft >= maxScrollLeft - 4;
    };

    const updateActiveChip = () => {
      let activeIndex = 0;
      const trackCenter = track.scrollLeft + track.clientWidth / 2;

      slides.forEach((slide, index) => {
        const center = slide.offsetLeft + slide.offsetWidth / 2;
        const activeCenter =
          slides[activeIndex].offsetLeft + slides[activeIndex].offsetWidth / 2;
        if (Math.abs(center - trackCenter) < Math.abs(activeCenter - trackCenter)) {
          activeIndex = index;
        }
        slide.classList.remove('is-centered');
      });

      slides[activeIndex]?.classList.add('is-centered');

      chips.forEach((chip, index) => {
        chip.classList.toggle('is-active', index === activeIndex);
      });
    };

    leftBtn.addEventListener('click', () => {
      track.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      track.scrollBy({ left: getStep(), behavior: 'smooth' });
    });

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const index = Number.parseInt(chip.dataset.eventIndex || '0', 10);
        const target = slides[index];
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      });
    });

    track.addEventListener('scroll', () => {
      updateNavState();
      updateActiveChip();
    });

    window.addEventListener('resize', updateNavState);
    updateNavState();
    slides[0]?.classList.add('is-centered');
    updateActiveChip();
  }
}
