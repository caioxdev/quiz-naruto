import Swup from 'https://unpkg.com/swup@4?module';

export const iniciarSwup = () => {
  const swup = new Swup({
    containers: ['#swup'],
    animateHistoryBrowsing: true,
    cache: false,
    linkSelector: 'a[href]:not([target="_blank"]):not([href^="#"])',
  });

  return swup;
};