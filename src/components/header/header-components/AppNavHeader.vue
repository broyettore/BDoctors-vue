<script>
export default {
    name: "AppNavHeader"
};

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav">
                <li class="nav-item m-2 p-2">
                    <a class="hover " href="#">Prova</a>
                </li>
                <li class="nav-item m-2 p-2">
                    <a class="hover " href="#">Prova</a>
                </li>
                <li class="nav-item m-2 p-2 p-0 m-0">
                    <a class="hover" href="#">Prova</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/_partials/variables.scss" as *;

a {
    color: $header-text;
}

.navbar-toggler {
    border: none;
    outline: none;
}

@media (max-width: 480px) {

    /* Stili per dispositivi mobili */
    a {
        font-size: 16px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {

    /* Stili per iPad e tablet */
    a {
        font-size: 18px;
    }
}
</style>