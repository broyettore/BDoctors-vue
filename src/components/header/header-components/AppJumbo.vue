<script>
export default {
    name: "AppJumbo"
}
</script>

<template>
    <section id="jumbo" class="container">

        <div class="d-flex justify-content-center text-center">
            <h1>NON È MAI STATO COSÌ SEMPLICE CHIAMARE UN DOTTORE</h1>
        </div>

        <div class="container-s-bar d-flex align-items-center justify-content-center ">
            <div class="container">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Cerca lo specialista di cui hai bisogno"
                        aria-label="Search">
                    <button class=" btn btn-primary" type="submit">Cerca</button>
                </form>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/_partials/variables.scss" as *;

#jumbo {
    div {
        h1 {
            width: 700px;
        }
    }

    .container-s-bar {
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