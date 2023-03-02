export const readMore = () => {
  const dots = document.getElementById('dots');
  const more = document.querySelector('.information__text--more');
  const button = document.querySelector('.information__button');

  button.addEventListener('click', (e) => {
    if(dots.style.display === 'none') {
      dots.style.display = 'block';
      button.innerHTML = 'Подробнее';
      more.style.display = 'none';
    } else {
      dots.style.display = 'none';
      button.innerHTML = 'Скрыть';
      more.style.display = 'block';
    }
  })
};