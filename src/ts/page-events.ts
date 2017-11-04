import { MyEventEmitter } from './utils/event-emitter';
import { Fetch } from './utils/fetch';
import * as emailForm from './components/email-form';

const emitter: MyEventEmitter = new MyEventEmitter();
const fetch: Fetch = new Fetch();

const contentContainer: string = 'content';
const $context: JQuery = $(`.${contentContainer}`);
const classFadedOut: string = `${contentContainer}__is-faded-out`;
const transitionDelay: number = 150;

const wait = (ms: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

emitter.on('page-change', (page) => {
  let template;
  $(`#${page}`).addClass('nav__button_active');
  $context.addClass(classFadedOut);
  return wait(200)
    .then(() => {
      return fetch.template(page);
    })
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
      return wait(200);
    })
    .then(() => {
      $context.removeClass(classFadedOut);
    });
});

emitter.on('language-change', (language) => {
  
});

export { emitter };
