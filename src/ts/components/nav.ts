import 'jquery';

const init = (selectors): void => {
  const $nav:JQuery = $(`.${selectors.nav}`);
  const $buttons: JQuery = $(`.${selectors.nav} .${selectors.button}`);
  const classActive = `${selectors.button}_active`;
  $nav.on('click', (event) => {
    event.preventDefault();
    const $this: JQuery = $(event.target);
    if ($this.hasClass(selectors.button)) {
      $buttons.removeClass(classActive);
      $this.addClass(classActive);
    }
  });
};

export { init };
