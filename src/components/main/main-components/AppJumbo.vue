<script>
export default {
    name: "AppJumbo"
}
</script>

<template>
    <section id="jumbo">
        <div class="container">
            <div class="d-flex justify-content-center text-center">
                <h1>NON È MAI STATO COSÌ SEMPLICE CHIAMARE UN DOTTORE</h1>
            </div>

            <div class="container-button d-flex align-items-center justify-content-center ">
                <button class="button-type-1 m-3 hover-red">ACCEDI COME PAZIENTE</button>
                <button class="button-type-2 hover-red">ACCEDI COME DOTTORE</button>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/_partials/variables.scss" as *;

#jumbo {
    background-color: $header-background;
    color: $header-text ;

    div {
        h1 {
            width: 700px;
        }
    }

    .container-button {
        margin: 100px;
        padding-bottom: 100px;
    }
}

@media (max-width: 480px) {

    /* Stili per dispositivi mobili */
    #jumbo {
        div {
            h1 {
                font-size: 24px;
            }
        }
    }
}

@media (min-width: 481px) and (max-width: 768px) {

    /* Stili per iPad e tablet */
    #jumbo {
        div {
            h1 {
                font-size: 28px;
            }
        }
    }
}
</style>