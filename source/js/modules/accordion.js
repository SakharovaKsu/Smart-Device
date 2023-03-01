export default accordionElement = () => {
  const accordions = document.querySelectorAll('.accordeon');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
      const content = document.querySelector('.accordeon__content');
			const control = document.querySelector('.accordion__control');

			self.classList.toggle('accordeon__open');

			// если открыт аккордеон
			if (self.classList.contains('accordeon__open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				content.style.maxHeight = null;
			}
		});
	});
}