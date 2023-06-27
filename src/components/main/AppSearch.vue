<script>
import store from '../../store';
import axios from 'axios';
export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    },

    methods: {
        goToDoctorsList() {
            console.log("eseguita")
            this.$router.push({ name: 'list', params: { search: this.store.query } })
        },

        getSpecialisations() {
            axios
                .get(`http://127.0.0.1:8000/api/specialisations`)
                .then((response) => {
                    const results = response.data.results;
                    results.forEach((specialisation) => {
                        this.store.suggestions.push(specialisation.name.toLowerCase());
                    });
                    console.log(this.store.suggestions);
                    this.filterResults(); // Filtra i risultati in base alla query
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        filterResults() {
            if (this.store.query.length === 0) {
                this.store.results = []; // Resetta l'array dei risultati se la query è vuota
            } else {
                const filteredResults = this.store.suggestions.filter((word) =>
                    word.toLowerCase().includes(this.store.query.toLowerCase())
                );
                this.store.results = Array.from(new Set(filteredResults)); // Rimuovi le ripetizioni dall'array
            }
        },

        updateSuggestions() {
            axios
                .get(`http://127.0.0.1:8000/api/specialisations`)
                .then((response) => {
                    const results = response.data.results;
                    results.forEach((specialisation) => {
                        this.store.suggestions.push(specialisation.name.toLowerCase());
                    });
                    console.log(this.store.suggestions);
                    this.filterResults(); // Filtra i risultati in base alla query
                    this.store.showSuggestions = true
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        selectResult(result) {
            this.store.query = result;
            this.goToDoctorsList();
        },

    },

    created() {
        this.getSpecialisations();
        this.store.showSuggestions = false;
    },

}
</script>

<template>
    <div class="container-s-bar d-flex align-items-center justify-content-center ">
        <div class="container py-2">
            <form class="ms-search d-flex justify-content-center" id="search-form" @submit.prevent="goToDoctorsList">
                <div class="text-container">
                    <input class="form-control me-2 " type="text" placeholder="Cerca lo specialista di cui hai bisogno"
                        aria-label="Search" v-model="this.store.query" @submit.prevent="goToDoctorsList"
                        @input="updateSuggestions">
                    <ul id="search-list" class="rounded" v-show="store.showSuggestions === true">
                        <li @click="selectResult(result)" class="px-3 py-2" v-for="result in store.results" :key="result">
                            {{ result }}
                        </li>
                    </ul>
                </div>
                <router-link :to="{ name: 'list', params: { search: this.store.query } }" class="btn btn-primary"
                    v-if="this.store.query.length > 0">
                    Cerca
                </router-link>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;


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
            z-index: 2;

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
</style>
