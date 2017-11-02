import { MyEventEmitter } from './utils/event-emitter';
import { Fetch } from './utils/fetch';

const emitter = new MyEventEmitter();
const fetch = new Fetch();

const $context = $('.content');

emitter.on('page-change', (page) => {
  let template;
  return fetch.template(page)
    .then((output) => {
      template = output;
      return fetch.content(page);
    })
    .then((output) => {
      $context.html(template(output));
    });
});

emitter.on('language-change', (language) => {
  
});

export { emitter };