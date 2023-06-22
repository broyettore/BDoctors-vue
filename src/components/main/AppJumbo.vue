<script>
import store from '../../store';
export default {
    name: "AppJumbo",
    data() {
        return {
            store,
            query: "",
        }
    },
}
</script>

<template>
    <section id="jumbo">
        <div class="container">
            <div class="d-flex justify-content-center text-center">
                <h1>NON È MAI STATO COSÌ SEMPLICE CHIAMARE UN DOTTORE</h1>
            </div>

            <div class="container-s-bar d-flex align-items-center justify-content-center ">
                <div class="container py-5">
                    <form class="d-flex justify-content-center">
                        <input class="form-control me-2 ms-search" type="search" placeholder="Cerca lo specialista di cui hai bisogno"
                        aria-label="Search" v-model="query" >
                        <router-link :to="{ name: 'list', params: { search: query } }" class="btn btn-primary"
                        v-if="query.length > 0">
                            Cerca
                        </router-link>
                    </form>
                </div>
            </div>
        </div>


    </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

#jumbo {
    background-color: $header-background;
    color: $header-text ;
    padding: 100px 0;

    div {
        h1 {
            width: 700px;
        }
    }
}

.ms-search {
    max-width: 600px;
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