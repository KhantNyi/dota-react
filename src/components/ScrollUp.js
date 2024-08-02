import React, { useEffect } from 'react';

const ScrollUp = () => {
  useEffect(() => {
    const scrollUp = document.getElementById('scroll-up');
    const handleScroll = () => {
      window.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default ScrollUp;
