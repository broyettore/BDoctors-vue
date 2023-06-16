import { createApp } from 'vue'
import "./assets/styles/main.scss"
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import * as bootstrap from 'bootstrap'

/* /* import the fontawesome core / */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse as House } from '@fortawesome/free-solid-svg-icons'
/* import specific icons  */
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

/* add icons */
library.add(House, faFacebook, faTwitter, faInstagram, faLinkedinIn)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
