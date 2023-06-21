import { createRouter, createWebHistory } from "vue-router";

// IMPORTO I COMPONENTI
import AppHome from './pages/AppHome.vue';
import AppList from './pages/AppList.vue';
import AppCard from './pages/AppCard.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        //specifichiamo le rotte
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/list/:search',
            name: 'list',
            component: AppList
        }
    ]
});

export { router };