import { MyEventEmitter } from './utils/event-emitter';
import { Fetch } from './utils/fetch';
import * as emailForm from './components/email-form';

const emitter = new MyEventEmitter();
const fetch = new Fetch();

const $context = $('.content');

emitter.on('page-change', (page) => {
  let template;
  $(`#${page}`).addClass('nav__button_active');
  return fetch.template(page)
    .then((output) => {
      template = output;
      return fetch.content(page);
    })
    .then((output) => {
      $context.html(template(output));
    })
    .then(() => {
      if (page === 'contacts') {
        emailForm.init();
      }
    });
});

emitter.on('language-change', (language) => {
  
});

export { emitter };
