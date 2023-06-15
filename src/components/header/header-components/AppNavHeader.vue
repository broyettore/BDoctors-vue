<script>
export default {
    name: "AppNavHeader"
};

</script>

<template>
    <nav>
        <ul class="d-flex">
            <li class="p-2"><a class="hover" href="#"> prova</a></li>
            <li class="p-2"><a class="hover" href="#"> prova</a></li>
            <li class="p-2"><a class="hover" href="#"> prova</a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/_partials/variables.scss" as *;

a {
    color: $header-text;
}
</style>