import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initFooterAccordions} from './modules/footer-accordions';
import {readMore} from './modules/read-more';
import {scrollPage} from './modules/scroll-page';
import {initAccordions} from './modules/accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  initFooterAccordions();
  readMore();
  scrollPage();
  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
  });

});
