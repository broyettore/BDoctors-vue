<script >
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import AppFooter from './components/footer/AppFooter.vue';

export default {
    components: {
        AppFooter,
        AppHeader,
        AppMain
    }
}
</script>

<template>
<AppHeader />
<AppMain />
<AppFooter />
</template>

<style lang="scss" scoped>
@use "./assets/styles/_partials/variables.scss" as *;

</style>
