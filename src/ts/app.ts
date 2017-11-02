import * as nav from './components/nav';
import { emitter } from './page-events';

nav.init({
  nav: 'nav',
  mobile: 'nav__mobile',
  button: 'nav__button'
});

emitter.emit('page-change', 'home');