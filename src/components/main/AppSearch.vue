<script>
import axios from 'axios';

export default {
    name: 'AppSearch',
    data() {
        return {
            store: {
                query: '',
                suggestions: [],
                results: [],
                showSuggestions: false,
            },
        };
    },
    methods: {
        goToDoctorsList() {
            console.log('eseguita');
            this.$router.push({ name: 'list', params: { search: this.store.query } });
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
                const correctedResults = this.store.suggestions.filter((word) => {
                    const queryLowerCase = this.store.query.toLowerCase();
                    const wordLowerCase = word.toLowerCase();
                    const similarity = this.calculateSimilarity(queryLowerCase, wordLowerCase);
                    return similarity >= 0.8;
                });

                // Aggiungi la logica per la correzione automatica
                if (correctedResults.length === 0) {
                    const fuzzyMatch = this.store.suggestions.find((word) =>
                        word.toLowerCase().includes(this.store.query.toLowerCase().slice(0, -1))
                    );

                    if (fuzzyMatch) {
                        this.store.results.push(fuzzyMatch);
                    }
                }

                this.store.results = Array.from(new Set([...correctedResults, ...this.store.results])); // Rimuovi le ripetizioni dall'array
            }
        },
        calculateSimilarity(query, word) {
            const queryWords = query.split(' ');
            const wordWords = word.split(' ');
            const totalWords = Math.max(queryWords.length, wordWords.length);
            let matchingWords = 0;

            for (const queryWord of queryWords) {
                for (const wordWord of wordWords) {
                    const similarity = this.calculateWordSimilarity(queryWord.toLowerCase(), wordWord.toLowerCase());
                    if (similarity >= 0.9) {
                        matchingWords++;
                        break;
                    }
                }
            }

            return matchingWords / totalWords;
        },

        calculateWordSimilarity(queryWord, word) {
            const minLength = Math.min(queryWord.length, word.length);
            let matchingCharacters = 0;

            for (let i = 0; i < minLength; i++) {
                if (queryWord[i] === word[i]) {
                    matchingCharacters++;
                }
            }

            return matchingCharacters / minLength;
        },
        updateSuggestions() {
            axios
                .get(`http://127.0.0.1:8000/api/specialisations`)
                .then((response) => {
                    const results = response.data.results;
                    results.forEach((specialisation) => {
                        this.store.suggestions.push(specialisation.name.toLowerCase());
                    });

                    // Controlla se esiste una corrispondenza approssimativa
                    const fuzzyMatch = this.store.suggestions.find((word) =>
                        word.toLowerCase().includes(this.store.query.toLowerCase().slice(0, -1))
                    );

                    if (fuzzyMatch) {
                        this.store.results.push(fuzzyMatch);
                    }

                    console.log(this.store.suggestions);
                    this.filterResults(); // Filtra i risultati in base alla query
                    this.store.showSuggestions = true;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        selectResult(result) {
            this.store.query = result;
            this.goToDoctorsList();
            this.store.showSuggestions = false; // Nasconde i suggerimenti dopo aver selezionato un risultato
        },
    },
    created() {
        this.getSpecialisations();
        this.store.showSuggestions = false;
    },
};
</script>

<template>
    <div class="container-s-bar d-flex align-items-center justify-content-center py-2 pt-4">
        <div class="container">
            <form class="ms-search d-flex justify-content-center" id="search-form" @submit.prevent="goToDoctorsList">
                <div class="text-container">
                    <input class="form-control me-2" type="text" placeholder="Cerca lo specialista di cui hai bisogno"
                        aria-label="Search" v-model="store.query" @input="updateSuggestions" />
                    <ul id="search-list" class="rounded" v-show="store.showSuggestions === true">
                        <li @click="selectResult(result)" class="px-3 py-2" v-for="result in store.results" :key="result">
                            {{ result }}
                        </li>
                    </ul>
                </div>
                <router-link :to="{ name: 'list', params: { search: store.query } }" class="btn btn-primary"
                    v-if="store.query.length > 0">
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
