<script >
import AppJumbo from '../components/main/AppJumbo.vue';
import AppCall from '../components/main/AppCall.vue';
import AppReview from '../components/main/AppReview.vue';
import AppWorkWithUs from '../components/main/AppWorkWithUs.vue';
export default {
    name: "AppHome",
    components: {
        AppJumbo,
        AppCall,
        AppReview,
        AppWorkWithUs
    }
}
</script>

<template>
    <main>
        <AppJumbo />
        <AppCall />
        <AppReview />
        <AppWorkWithUs />
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/styles/_partials/variables.scss" as *;
section {
    padding: 100px;
}
</style>