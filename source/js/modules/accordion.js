export const initAccordion = () => {
  const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;

			if(self.classList.contains('accordion__content--open')) {
				self.classList.remove('accordion__content--open');
			} else {
				accordions.forEach(el => {
					el.classList.toggle('accordion__content--open');
				})
			} 
			
			// accordions.forEach(el => {
			// 	el.classList.remove('accordion__open');

				// if (self.classList.contains('accordion__open')) {
				// 	control.setAttribute('aria-expanded', true);
				// 	content.setAttribute('aria-hidden', false);
				// } else {
				// 	control.setAttribute('aria-expanded', false);
				// 	content.setAttribute('aria-hidden', true);
				// }

				
			// })
			
			self.classList.add('accordion__open');

		});
	});
}
