<script >
import AppHeader from './components/header/AppHeader.vue';
import AppFooter from './components/footer/AppFooter.vue';
import store from './store';
import axios from 'axios';



export default {
    components: {
        AppFooter,
        AppHeader,
    },

    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <AppHeader />
    <router-view />
    <AppFooter />
</template>

<style lang="scss" scoped>
@use "./assets/styles/_partials/variables.scss" as *;
</style>
