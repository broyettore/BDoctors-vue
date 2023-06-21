<script>
import AppCard from "./AppCard.vue";
import store from "../store";
import axios from "axios";
export default {
    //name: "DoctorList", //??
    name: "AppList",
    components: {
        AppCard,
    },

    data() {
        return {
            store,
            doctorsList: [],
            ratingValue: null,
            reviewOrder: null,
        };
    },

    methods: {
        getDoctors() {
            axios
                .get(`http://127.0.0.1:8000/api/doctors/${this.$route.params.search}`)
                .then((response) => {
                    this.doctorsList = response.data.results;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        votesAverage(votes) {
            let sum = 0;

            for (let i = 0; i < votes.length; i++) {
                sum += votes[i].value;
            }
            const avg = sum / votes.length;

            return Math.floor(avg);
        },
        resetDatas() {
            this.ratingValue = null;
            this.reviewOrder = null;
        },
    },
    created() {
        this.getDoctors();
    },
    computed: {
        orderDoctorList() {
            if (this.reviewOrder === "desc") {
                return this.doctorsList.sort(
                    (a, b) => a.reviews.length - b.reviews.length
                );
            } else if (this.reviewOrder === "asc") {
                return this.doctorsList.sort(
                    (a, b) => b.reviews.length - a.reviews.length
                );
            } else {
                return this.doctorsList.sort((a, b) => b.id - a.id);
            }
        },
    },
};
</script>

<template>
    <main id="app-list-main">
        <div class="container ms-ctn d-flex flex-column flex-md-row py-5">
            <!-- side bar  -->
            <div class="side-bar p-2 mb-2">
                 <!-- versione tablet +  -->
                <div class="d-none d-md-block">
                    <h5 class="mb-4">Filtri <font-awesome-icon icon="fa-solid fa-filter" class="filter" /></h5>
                        <div class="ms-radio-ctn mb-4">
                            <h6 class="mb-2">Valutazioni</h6>
                            <form>
                                <label v-for="n in 5">
                                    <input type="radio" name="radio" :value="n" v-model="ratingValue"
                                        @click="ratingValue = n" />
                                    <span><font-awesome-icon v-for="n in n" icon="fa-solid fa-star"
                                            class="ms-star" /></span>
                                </label>
                            </form>
                        </div>
                        <div class="ms-radio-ctn mb-3">
                            <h6 class="mb-1">Recensioni</h6>
                            <form>
                                <label>
                                    <input type="radio" name="radio" value="desc" v-model="reviewOrder" @click="reviewOrder = 'desc'" />
                                    <span><font-awesome-icon icon="fa-solid fa-plus" /> Reviews</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio" value="asc"  v-model="reviewOrder" @click="reviewOrder = 'asc'"/>
                                    <span><font-awesome-icon icon="fa-solid fa-minus"/> Reviews</span>
                                </label>
                            </form>
                        </div>
                        <button class="btn ms-btn-primary mb-3" @click="resetDatas">
                            Reset
                        </button>
                    </div>
                    <!-- /versione tablet +  -->

                    <!-- versione mobile  -->
                    <div class="d-md-none">
                        <a class="btn ms-btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                            aria-controls="offcanvasExample">
                            Filtro <font-awesome-icon icon="fa-solid fa-filter" class="filter" />
                        </a>

                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filtri <font-awesome-icon icon="fa-solid fa-filter" class="filter" /></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div class="ms-radio-ctn">
                                    <h6 class="mb-2">Valutazioni</h6>
                                    <form>
                                        <label v-for="n in 5">
                                            <input type="radio" name="radio" :value="n" v-model="ratingValue"
                                                @click="ratingValue = n" />
                                            <span><font-awesome-icon v-for="n in n" icon="fa-solid fa-star"
                                                    class="ms-star" /></span>
                                        </label>
                                    </form>
                                </div>
                                <div class="ms-radio-ctn my-2">
                                    <h6 class="mb-1">Recensioni</h6>
                                    <form>
                                        <label>
                                            <input type="radio" name="radio" value="desc" v-model="reviewOrder" @click="reviewOrder = 'desc'" />
                                            <span><font-awesome-icon icon="fa-solid fa-plus" /> Reviews</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="radio" value="asc"  v-model="reviewOrder" @click="reviewOrder = 'asc'"/>
                                            <span><font-awesome-icon icon="fa-solid fa-minus" /> Reviews</span>
                                        </label>
                                    </form>
                                </div>
                                <button class="btn ms-btn-primary mb-3" @click="resetDatas">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                     <!-- /versione mobile  -->
            </div>
            <!-- /side bar  -->

            <!-- AppCard -->
            <div class="main-content  d-flex flex-wrap">
                <div v-for="doctor in orderDoctorList">
                    <AppCard :doctor="doctor" v-if="votesAverage(doctor.votes) == ratingValue || ratingValue == null
                        " />
                </div>
            </div>
            <!-- /AppCard -->

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/styles/_partials/variables.scss" as *;

#app-list-main {
    min-height: calc(100vh - 96px);

    .filter {
        font-size: .925rem;
    }

    .ms-ctn {
        .side-bar {
            width: 25%;
        }

        .main-content {
            width: 75%;
        }

        .ms-btn-primary {
            background-color: $main-background;
            color: $header-text;

            &:hover {
                transform: scale(1.1);
                transition: ease-in-out 0.2s;
            }
        }
    }

    form {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        .ms-star {
            color: $main-background;
            font-size: 1.1rem;
        }

        label {
            display: flex;
            cursor: pointer;
            font-weight: 500;
            position: relative;
            overflow: hidden;
            margin-bottom: 0.375em;

            input {
                position: absolute;
                left: -9999px;

                &:checked+span {
                    background-color: mix(#fff, $header-background, 84%);

                    &:before {
                        box-shadow: inset 0 0 0 0.4375em $header-background;
                    }
                }
            }

            span {
                display: flex;
                align-items: center;
                padding: 0.375em 0.75em 0.375em 0.375em;
                border-radius: 99em; // or something higher...
                transition: 0.25s ease;

                &:hover {
                    background-color: mix(#fff, $header-background, 84%);
                }

                &:before {
                    display: flex;
                    flex-shrink: 0;
                    content: "";
                    background-color: #fff;
                    width: 1.1rem;
                    height: 1.1rem;
                    border-radius: 50%;
                    margin-right: 0.375em;
                    transition: 0.25s ease;
                    box-shadow: inset 0 0 0 0.125em $header-background;
                }
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .main-content {
            width: 75%;
            border-left: 1px solid $main-background;
            padding-left: 20px;
        }
}
</style>
