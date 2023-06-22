<script >
import AppNavHeader from './header-components/AppNavHeader.vue';

export default {
    name: "AppHeader",
    components: {
        AppNavHeader,
    }
};

</script>

<template>
    <header>
        <div class="container-header container d-flex justify-content-between align-items-center py-4">
            <a href="/" class="logo">
                <h1>
                    <font-awesome-icon icon="fa-solid fa-notes-medical" class="px-3" />BDoctors 
                </h1>
            </a>
            <AppNavHeader />
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

header {
    background-color: $header-background;
    color: $header-text ;

    .logo {
        color: $header-text;
    }
}
</style>