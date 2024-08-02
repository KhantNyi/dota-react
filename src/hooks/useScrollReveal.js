import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    sr.reveal('.home__title, .choose__container, .features__img, .roles__filters');
    sr.reveal('.home__subtitle', { delay: 500 });
    sr.reveal('.home__subtext', { delay: 600 });
    sr.reveal('.home__img', { delay: 800 });
    sr.reveal('.home__stat-data', { delay: 900, interval: 100, origin: 'bottom' });
    sr.reveal('.home__button', { delay: 1000, origin: 'bottom' });
    sr.reveal('.heroes__group, .play__data', { origin: 'left' });
    sr.reveal('.heroes__data, .play__img', { origin: 'right' });
    sr.reveal('.features__card, .jugg', { interval: 200 });
    sr.reveal('.roles__card, .logos__content, .footer__content', { interval: 100 });

  }, []);
};

export default useScrollReveal;
