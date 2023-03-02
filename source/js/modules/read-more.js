export const readMore = () => {
  // const dots = document.getElementById('dots');
  const more = document.querySelectorAll('.information__text--more');
  const button = document.querySelector('.information__button');

  button.addEventListener('click', () => {
    for (let i = 0; i < more.length; i++) {
      if(more[i].style.display === 'none') {
        button.innerHTML = 'Скрыть';
        more[i].style.display = 'block';
      } else {
        button.innerHTML = 'Подробнее';
        more[i].style.display = 'none';
      }
    }
  })
};