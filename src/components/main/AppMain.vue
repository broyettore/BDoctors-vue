<script >
import AppCall from './main-components/AppCall.vue';
import AppReview from './main-components/AppReview.vue';
import AppWorkWithUs from './main-components/AppWorkWithUs.vue';


export default {
    name: "AppMain",
    components: {
        AppCall,
        AppReview,
        AppWorkWithUs
    }
}
</script>

<template>
    <main>
        <AppCall />
        <AppReview />
        <AppWorkWithUs />
    </main>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

section {
    padding: 100px;
}
</style>