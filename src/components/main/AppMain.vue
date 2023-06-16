<script >
import AppCall from './main-components/AppCall.vue';
import AppReview from './main-components/AppReview.vue';

export default {
    name: "AppMain",
    components: {
        AppCall,
        AppReview
    }
}
</script>

<template>
    <main>
        <AppCall />
        <AppReview />
    </main>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

section {
    padding: 100px;
}
</style>