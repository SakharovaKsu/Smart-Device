export const initAccordionFooter = () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.target.closest('.accordion');

      accordions.forEach((el) => {
        if (el === self && !self.classList.contains('accordion--open')) {
          el.classList.add('accordion--open');
        } else {
          el.classList.remove('accordion--open');
        }
      });
    });
  });
};
