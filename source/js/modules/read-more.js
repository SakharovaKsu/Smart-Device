export const readMore = () => {
  // const dots = document.getElementById('dots');
  const more = document.querySelectorAll('.information__text--more');
  const moreMobile = document.querySelector('.information__hide');
  const button = document.querySelector('.information__button');

  button.addEventListener('click', () => {
    for (let i = 0; i < more.length; i++) {
      if(more[i].style.display === 'none') {
        button.innerHTML = 'Скрыть';
        more[i].style.display = 'block';
        moreMobile.style.display = 'block';
      } else {
        button.innerHTML = 'Подробнее';
        more[i].style.display = 'none';
        moreMobile.style.display = 'none';
      }

      // if(moreMobile.style.display === 'block') {
      //   moreMobile.style.display = 'none';
      // } else {
      //   moreMobile.style.display = 'block';
      // }
    }
  })
};