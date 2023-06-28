import { createApp } from 'vue'
import { router } from './router'
import "./assets/styles/main.scss"
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import * as bootstrap from 'bootstrap'


/* /* import the fontawesome core / */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse as House, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faStar as Star } from '@fortawesome/free-solid-svg-icons'

/* import specific icons  */
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faFilter as filter } from '@fortawesome/free-solid-svg-icons';
import { faPlus as plus } from '@fortawesome/free-solid-svg-icons';
import { faMinus as minus} from '@fortawesome/free-solid-svg-icons';
import { faArrowUpWideShort as wideShort } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight as angleRight } from '@fortawesome/free-solid-svg-icons';

/* add icons */
library.add(House, faFacebook, faTwitter, faInstagram, faLinkedinIn, faNotesMedical, Star, filter, plus, minus, wideShort, angleRight)

/* dropdown */
//import "../node_modules/vue-simple-search-dropdown/dist/vue-simple-search-dropdown.js";
//import "../node_modules/vue-simple-search-dropdown/dist/vue-simple-search-dropdown.min.js";

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')