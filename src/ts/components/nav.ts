import "jquery";
import { emitter } from "../page-events";
import { Fetch } from "../utils/fetch";

const fetch: Fetch = new Fetch();

const insertTemplate = async () => {
  try {
    const page = "nav-main";
    const template = await fetch.template(page);
    const content = await fetch.content(page);
    const html = template(content);

    $("header.header").html(html);
  } catch {
    console.warn("unable to insert nav");
  }
};

const init = async (selectors): Promise<void> => {
  await insertTemplate();
  const $nav: JQuery = $(`.${selectors.nav}`);
  const $navContainer: JQuery = $(`.${selectors.container}`);
  const $mobileTrigger: JQuery = $(`.${selectors.mobile}`);
  const $languageSwitch: JQuery = $(`.${selectors.langSwitch}`);
  const $buttons: JQuery = $(`.${selectors.nav} .${selectors.button}`);
  const classActive: string = `${selectors.button}_active`;
  const classExpanded: string = `${selectors.nav}__container__is-expanded`;
  $nav.on("click", (event): void => {
    event.preventDefault();
    const $this: JQuery = $(event.target);
    const currentPage = $this.attr("data-page");
    if ($this.hasClass(selectors.button)) {
      emitter.emit("page-change", currentPage);
      $buttons.removeClass(classActive);
      $this.addClass(classActive);
      $navContainer.removeClass(classExpanded);
      sessionStorage.setItem("currentPage", currentPage);
    }
  });

  $mobileTrigger.on("click", (event): void => {
    event.preventDefault();
    const $this: JQuery = $(event.target);
    const $navContainer = $this.next();
    $navContainer.toggleClass(classExpanded);
  });

  $languageSwitch.on("click", (event): void => {
    event.preventDefault();
    const $this: JQuery = $(event.target);
    console.log($this);
  });
};

export { init };
