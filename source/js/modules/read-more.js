export const readMore = () => {

  const aboutParent = document.querySelector('[data-accordion="parent"]');
  const accordionElement = aboutParent.querySelector('[data-accordion="element"]');
  const accordionButton = aboutParent.querySelector('[data-accordion="button"]');

  const accordionButtonToggler = () => {
    if (!accordionElement.classList.contains('is-active')) {
      accordionButton.textContent = 'свернуть';
    } else {
      accordionButton.textContent = 'подробнее';
    }
  };

  const executeAboutButton = () => {
    if (aboutParent && accordionButton && accordionElement) {
      accordionButton.addEventListener('click', accordionButtonToggler);
    }
  };

  executeAboutButton();
};
