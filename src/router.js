import { createRouter, createWebHistory } from "vue-router";

// IMPORTO I COMPONENTI
import AppHome from './pages/AppHome.vue';
import AppList from './pages/AppList.vue';
import AppDoctor from './pages/AppDoctor.vue';

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
        },
        {
            path: '/doctor/:id',
            name: 'doctor',
            component: AppDoctor
        }
    ]
});

export { router };