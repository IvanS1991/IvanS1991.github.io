import * as nav from "./components/nav";
import { emitter } from "./page-events";

nav.init({
  nav: "nav",
  container: "nav__container",
  mobile: "nav__mobile",
  button: "nav__button",
  langSwitch: "nav__language",
});

const currentPage = sessionStorage.getItem("currentPage") || "home";

emitter.emit("page-change", currentPage);
