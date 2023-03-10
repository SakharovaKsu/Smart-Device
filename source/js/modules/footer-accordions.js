export const initFooterAccordions = () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.target.closest('.accordion');

      accordions.forEach((element) => {
        if (element === self && !self.classList.contains('accordion--open')) {
          element.classList.add('accordion--open');
        } else {
          element.classList.remove('accordion--open');
        }
      });
    });
  });
};
