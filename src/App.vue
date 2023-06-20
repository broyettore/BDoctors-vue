<script >
import AppHeader from './components/header/AppHeader.vue';
import AppFooter from './components/footer/AppFooter.vue';

export default {
    components: {
        AppFooter,
        AppHeader,
    }
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
