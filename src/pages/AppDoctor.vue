<script >
import store from "../store";
import axios from "axios";
export default {
    name: "AppDoctor",
    data() {
        return {
            store,
            singleDoctor: null,
            stars: [1, 2, 3, 4, 5],
            reviewForm: {
                first_name: "",
                last_name: "",
                email: "",
                description: "",
                vote: 0,
            },
            msgForm: {
                user: "",
                email: "",
                message: ""
            },
            sentReview: false,
            sentEmail: false,
            isLoading: true
        }
    },
    methods: {
        getDoctor() {
            return new Promise((resolve, reject) => {
                axios
                    .get(`http://127.0.0.1:8000/api/doctor/${this.$route.params.id}`)
                    .then((response) => {
                        this.singleDoctor = response.data.result[0];
                        this.sortReviews();
                        console.log(this.singleDoctor);
                        resolve(); // Resolve the promise when the data is successfully fetched
                    })
                    .catch((error) => {
                        console.log(error);
                        reject(error); // Reject the promise if an error occurs
                    });
            });
        },
        getVotes(votes, n) {

            const finalVotes = votes.filter(vote => vote.value === n);

            return finalVotes.length
        },
        reviewDate(date) {
            const reviewdate = new Date(date);
            return reviewdate.toLocaleString();
        },
        sortReviews() {
            this.singleDoctor.reviews.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
        },
        sendReview() {
            console.log(this.reviewForm.first_name);
            console.log(this.reviewForm.last_name);
            console.log(this.reviewForm.email);
            console.log(this.reviewForm.description);
            console.log(this.reviewForm.vote);
            console.log(this.singleDoctor.id);

            const data = {
                review: {
                    first_name: this.reviewForm.first_name,
                    last_name: this.reviewForm.last_name,
                    email: this.reviewForm.email,
                    description: this.reviewForm.description,
                    vote: this.reviewForm.vote,
                    doctor_id: this.singleDoctor.id
                }
            }

            axios.post("http://127.0.0.1:8000/api/review/create", data)
                .then((response) => {
                    console.log(response);

                    if (response.status === 201 || response.status === 200) {
                        this.reviewForm.first_name = "";
                        this.reviewForm.last_name = "";
                        this.reviewForm.email = "";
                        this.reviewForm.description = "";
                        this.reviewForm.vote = "";
                        this.sentReview = true;
                        setTimeout(() => {
                            this.sentReview = false;
                        }, 3000);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        sendMsg() {
            console.log(this.msgForm.user);
            console.log(this.msgForm.email);
            console.log(this.msgForm.message);
            console.log(this.singleDoctor.id);

            const data = {
                user: this.msgForm.user,
                email: this.msgForm.email,
                message: this.msgForm.message,
                doctor_id: this.singleDoctor.id
            }

            axios.post("http://127.0.0.1:8000/api/doctor/contact", data)
                .then((response) => {
                    console.log(response);

                    if (response.status === 201 || response.status === 200) {
                        this.msgForm.user = "";
                        this.msgForm.email = "";
                        this.msgForm.message = "";
                        this.sentEmail = true;
                        setTimeout(() => {
                            this.sentEmail = false;
                        }, 3000);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        },
    },
    created() {
        setTimeout(() => {
            this.getDoctor()
                .then(() => {
                    this.isLoading = false; // Set isLoading to false when the data is loaded
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 2000);
    }
}
</script>

<template>
    <section id="detailed-page" class="d-flex flex-column justify-content-center align-items-center">
        <div class="loader" v-if="isLoading">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-5" v-else>
            <!-- Doctor info and Photo  -->
            <div class="main-ctn  d-flex flex-column flex-sm-row  justify-content-between align-items-start mb-5">
                <div class="left">
                    <ul>
                        <li class="fs-1">
                            Dott. {{ singleDoctor.user.fist_name }} {{ singleDoctor.user.last_name }}
                        </li>
                        <li v-for="specialisation in singleDoctor.specialisations" class="fs-4">
                            {{ specialisation.name }}
                        </li>
                        <li class="mb-1 mt-2">
                            Email: {{ singleDoctor.user.email }}
                        </li>
                        <li class="mb-1">
                            Telefono: {{ singleDoctor.phone_number }}
                        </li>
                        <li class="mb-1">
                            Indirizzo: {{ singleDoctor.address }}
                        </li>
                        <li class="mb-2">
                            Servizio/i: {{ singleDoctor.services }}
                        </li>
                        <li class="ms-cv">
                            <a :href="this.store.testApi + singleDoctor.cv" target="_blank" rel="noopener noreferrer">
                                <font-awesome-icon icon="fa-solid fa-angle-right" class="me-1" /> Guarda Cv
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <div class="img-ctn">
                        <img v-if="singleDoctor.photo != '' && singleDoctor.photo != null"
                            :src="this.store.testApi + singleDoctor.photo" :alt="singleDoctor.photo"
                            class="round ms-profile" />
                        <img v-else src="/avatar-medico-edited.jpg" class="round ms-profile"
                            :alt="singleDoctor.last_name + 'photo'" />
                    </div>
                </div>
            </div>
            <!-- /Doctor info and Photo  -->

            <!-- Review and votes  -->
            <div class="review-list  row mb-5 d-flex justify-content-between">
                <div class="left   col-12  col-lg-7  mb-5">
                    <h3>Recensioni</h3>
                    <hr>
                    <ul class="scroll-review">
                        <li v-for="review in singleDoctor.reviews" class="my-2">
                            <h4 class="fs-5 mb-2">{{ review.first_name }} {{ review.last_name }} <span>({{ review.email
                            }}),</span> <small>{{ reviewDate(review.created_at) }}</small></h4>
                            <p>{{ review.description }}</p>
                            <hr>
                        </li>
                    </ul>
                </div>
                <div class="right  col-12 col-lg-4">
                    <h3>Valutazioni</h3>
                    <hr>
                    <ul>
                        <li v-for="n in stars.slice().reverse()" class="my-2">
                            ({{ getVotes(singleDoctor.votes, n) }}) <font-awesome-icon v-for="y in n"
                                icon="fa-solid fa-star" class="ms-star" />
                            <hr>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- /Review and votes  -->

            <div class="drop-msg-review d-flex flex-column flex-md-row">
                <!-- Form to drop review and vote  -->
                <div class="accordion ms-accordion" id="accordionExample1">
                    <div class="accordion-item ">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Lascia una recensione
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                            <div class="accordion-body">
                                <form @submit.prevent="sendReview()">
                                    <div class="mb-3"><span><em>(Campi obbligatori*)</em></span></div>
                                    <div class="mb-3">
                                        <label for="first_name" class="form-label">Nome*</label>
                                        <input type="text" class="form-control" id="first_name"
                                            v-model="reviewForm.first_name">
                                    </div>
                                    <div class="mb-3">
                                        <label for="last_name" class="form-label">Cognome*</label>
                                        <input type="text" class="form-control" id="last_name"
                                            v-model="reviewForm.last_name">
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email*</label>
                                        <input type="email" class="form-control" id="email" v-model="reviewForm.email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="description" class="form-label">Recensione*</label>
                                        <textarea class="form-control" id="description" rows="3"
                                            v-model="reviewForm.description"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="vote" class="form-label">Valutazione*</label>
                                        <select class="form-select" aria-label="Default select example" id="vote"
                                            v-model="reviewForm.vote">
                                            <option value="0" selected>Scegli una valutazione</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <button class="btn btn-primary">Invia</button>
                                    <transition name="fade">
                                        <div v-if="sentReview" class="alert alert-success mt-3"
                                            :class="{ 'hidden': !sentReview }">
                                            Recensione inviata con successo!
                                        </div>
                                    </transition>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Form to drop review and vote  -->
                <!-- Form doctor a message -->
                <div class="accordion ms-accordion" id="accordionExample2">
                    <div class="accordion-item ">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                Contatta il Medico
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                            <div class="accordion-body">
                                <form @submit.prevent="sendMsg">
                                    <div class="mb-3"><span><em>(Campi obbligatori*)</em></span></div>
                                    <div class="mb-3">
                                        <label for="user" class="form-label">Nome e Cognome*</label>
                                        <input type="text" class="form-control" id="user" v-model="msgForm.user">
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email*</label>
                                        <input type="email" class="form-control" id="email" v-model="msgForm.email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="message" class="form-label">Messaggio*</label>
                                        <textarea class="form-control" id="message" rows="3"
                                            v-model="msgForm.message"></textarea>
                                    </div>
                                    <button class="btn btn-primary">Invia</button>
                                    <transition name="fade">
                                        <div v-if="sentEmail" class="alert alert-success mt-3"
                                            :class="{ 'hidden': !sentEmail }">
                                            Email inviata con successo!
                                        </div>
                                    </transition>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Form doctor a message -->
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../assets/styles/_partials/variables.scss" as *;

#detailed-page {
    min-height: calc(100vh - 96px);
    animation: headerFadein 1.2s linear forwards;

    .loader {
        width: 16em;
        height: 8em;
        position: relative;
        overflow: hidden;

        &::before,
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
        }

        &::before {
            width: inherit;
            height: 0.2em;
            background-color: $main-background;
        }

        &::after {
            box-sizing: border-box;
            width: 50%;
            height: inherit;
            border: 0.2em solid $main-background;
            border-radius: 50%;
            left: 25%;
        }

        & span {
            position: absolute;
            width: 5%;
            height: 10%;
            background-color: black;
            border-radius: 50%;
            bottom: 0.2em;
            left: -5%;
            animation: 2s linear infinite;
            transform-origin: 50% -3em;
            animation-name: run, rotating;
        }

        & span:nth-child(2) {
            animation-delay: 0.075s;
        }

        & span:nth-child(3) {
            animation-delay: 0.15s;
        }

        @keyframes run {
            0% {
                left: -5%;
            }

            10%,
            60% {
                left: calc((100% - 5%) / 2);
            }

            70%,
            100% {
                left: 100%;
            }
        }

        @keyframes rotating {

            0%,
            10% {
                transform: rotate(0deg);
            }

            60%,
            100% {
                transform: rotate(-1turn);
            }
        }
    }


    .review-list {
        .left {
            .scroll-review {
                overflow-y: scroll;
                max-height: 400px;
            }
        }

        .right {
            max-height: 400px;

            .ms-star {
                color: $main-background;
            }
        }
    }

    .main-ctn {
        .left {
            margin-bottom: 30px;

            .ms-cv {

                &:hover {
                    margin-left: 8px;
                    transition: margin-left .30s;
                }

                a {
                    color: $main-background;
                }
            }
        }

        .right {

            .img-ctn {
                align-self: center;

                img {
                    width: 250px;
                    border: 1px solid $header-text;
                    // border-radius: 50%;

                }
            }
        }
    }

    .ms-accordion {
        width: 100%;
        margin-bottom: 20px;
    }

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.hidden {
    display: none;
}

@media screen and (min-width: 768px) {
    .ms-accordion {
        width: 50%;
        margin-right: 20px;
    }
}


// @media screen and (min-width: 992px) {
//     //
// }
</style>