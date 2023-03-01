const initAccordion = () => {
  const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
      const content = document.querySelector('.accordion__content');
			const control = document.querySelector('.accordion__control');

			self.classList.toggle('accordion__open');

			// если открыт аккордеон
			if (self.classList.contains('accordion__open')) {
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

export default { initAccordion };