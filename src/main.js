import { createApp } from 'vue'
import "./assets/styles/main.scss"
import App from './App.vue'
import * as bootstrap from 'bootstrap'

/* /* import the fontawesome core / */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse as House } from '@fortawesome/free-solid-svg-icons'
/* import specific icons  */


/* add icons */
library.add(House)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
