export const initAccordion = () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.target.closest('.accordion');

      accordions.forEach((el) => {
        if (el === self && !self.classList.contains('accordion__content--open')) {
          el.classList.add('accordion__content--open');
        } else {
          el.classList.remove('accordion__content--open');
        }
      });
    });
  });
};
