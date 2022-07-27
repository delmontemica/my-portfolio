import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLinkedin,
  faGithub,
  faBehanceSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faGithub, faBehanceSquare, faInstagram);

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
