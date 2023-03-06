export const scrollPage = () => {
  const anchor = document.querySelector('a[href*="#"]');

  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const blockId = anchor.getAttribute('href');
    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};
