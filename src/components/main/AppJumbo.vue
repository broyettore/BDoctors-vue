<script>
import store from '../../store';
import AppSearch from './AppSearch.vue';
import axios from 'axios';
import AppCard from '../../pages/AppCard.vue';

export default {
    name: "AppJumbo",
    components: {
        AppSearch,
        AppCard,
    },
    data() {
        return {
            store,
            sponsoredDoctors: [],
        }
    },
    methods: {

        getSponsoredDoctors() {
            axios.get("http://127.0.0.1:8000/api/sponsored")
                .then((response) => {
                    this.sponsoredDoctors = response.data.results;
                    console.log(this.sponsoredDoctors);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    created() {
        this.getSponsoredDoctors();
    }
}
</script>

<template>
    <section id="jumbo">
        <div class="container">
            <div class="d-flex justify-content-center text-center mb-5">
                <h1>NON È MAI STATO COSÌ SEMPLICE CHIAMARE UN DOTTORE</h1>
            </div>
            <AppSearch></AppSearch>
        </div>
    </section>
    <section id="sponsored" class="d-flex flex-column justify-content-center align-items-center"
        v-if="sponsoredDoctors.length > 0">
        <h2 class="mb-4 fs-2">Medici In Evidenza</h2>
        <div class="card-sponsored d-flex justify-content-center flex-wrap gap-5">
            <div v-for="sponsoredDoctor in sponsoredDoctors.slice(0, 3)">
                    <AppCard :doctor="sponsoredDoctor" class="h-100" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;


#sponsored {
    background-color: darken($color: $header-background, $amount: 20%);
    color: $header-text ;
    padding: 50px 0;

    .card-sponsored {
        width: 100%;
    }

}

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
    margin: 0 auto;
}

#search-form {
    position: relative;

    .text-container {
        width: 100%;

        input {
            width: 100%;
        }

        #search-list {
            position: absolute;
            width: 100%;
            left: 0px;
            top: 38px;
            background-color: white;
            color: black;

            li:hover {
                cursor: pointer;
                background-color: rgb(224, 224, 224);
            }

            li:first-child {
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            li:last-child {
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }


        }
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