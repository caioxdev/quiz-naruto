import Swup from 'https://unpkg.com/swup@4?module';

export const iniciarSwup = () => {
  const swup = new Swup({
    containers: ['#swup'],
    linkSelector: 'a[href]'
  });
  return swup;
}