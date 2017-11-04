import 'jquery';
import { emitter } from '../page-events';

const init = (selectors): void => {
  const $nav:JQuery = $(`.${selectors.nav}`);
  const $navContainer: JQuery = $(`.${selectors.container}`);
  const $mobileTrigger: JQuery = $(`.${selectors.mobile}`);
  const $buttons: JQuery = $(`.${selectors.nav} .${selectors.button}`);
  const classActive: string = `${selectors.button}_active`;
  const classExpanded: string = `${selectors.nav}__container__is-expanded`;
  $nav.on('click', (event): void => {
    event.preventDefault();
    const $this: JQuery = $(event.target);
    const currentPage = $this.attr('data-page');
    if ($this.hasClass(selectors.button)) {
      $buttons.removeClass(classActive);
      $this.addClass(classActive);
      $navContainer.removeClass(classExpanded);
      emitter.emit('page-change', currentPage);
      sessionStorage.setItem('currentPage', currentPage);
    }
  });

  $mobileTrigger.on('click', $mobileTrigger, (event): void => {
    event.preventDefault();
    const $this: JQuery = $(event.target);
    $this.next().addClass(classExpanded);
  });
};

export { init };
