<script >
import AppCall from './main-components/AppCall.vue';

export default {
    name: "AppMain",
    components: {
        AppCall,
    }
}
</script>

<template>
    <main>
        <AppCall />
    </main>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;
</style>