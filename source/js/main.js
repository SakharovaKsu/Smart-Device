import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordionFooter} from './modules/accordion-footer';
import {readMore} from './modules/read-more';
import {scrollPage} from './modules/scroll-page';
import {initAccordions} from './modules/accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  initAccordionFooter();
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
