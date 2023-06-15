<script >
import AppNavHeader from './header-components/AppNavHeader.vue';
import AppJumbo from './header-components/AppJumbo.vue';

export default {
    name: "AppHeader",
    components: {
        AppNavHeader,
        AppJumbo
    }
};

</script>

<template>
    <header>
        <div class="container-header container d-flex justify-content-between p-2 pt-4">
            <h1><font-awesome-icon icon="fa-solid fa-house" />BDoctors </h1>
            <div>
                <AppNavHeader />
            </div>
        </div>

        <div class="mt-5">
            <AppJumbo />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

header {
    background-color: $header-background;
    color: $header-text ;
}
</style>