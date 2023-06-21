<script>
import AppCard from "./AppCard.vue"
import store from '../store';
import axios from "axios";
export default {
    //name: "DoctorList", //??
    name: 'AppList',
    components: {
        AppCard
    },

    data() {
        return {
            store,
            doctorsList: [],
            ratingValue: null,
            reviewOrder: null,
        }
    },

    methods: {
        getDoctors() {
            axios.get(`http://127.0.0.1:8000/api/doctors/${this.$route.params.search}`)
                .then((response) => {
                    this.doctorsList = response.data.results;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        votesAverage(votes) {

            let sum = 0;

            for (let i = 0; i < votes.length; i++) {
                sum += votes[i].value;
            }
            const avg = sum / votes.length

            return Math.floor(avg)
        },
        resetDatas() {
            this.ratingValue = null;
            this.reviewOrder = null;
        }
    },
    created() {
        this.getDoctors();
    },
    computed: {
        orderDoctorList() {

            if(this.reviewOrder === "desc") {
                return  this.doctorsList.sort((a, b) => a.reviews.length - b.reviews.length);
            } else if (this.reviewOrder === "asc") {
                return  this.doctorsList.sort((a, b) => b.reviews.length - a.reviews.length);
            } else {
                return  this.doctorsList.sort((a, b) => b.id - a.id);
            }
     }
    }
}
</script>

<template>
    <main>
        <div class="container-fluid justify-content-center d-flex content">
            <div class="side-bar me-auto">
                <div class="d-flex justify-content-start flex-row-reverse" v-for="n in 5">
                    <input type="radio" name="rating-checkboxes" class="ms-2 rating-checkboxes" :value="n" v-model="ratingValue" @click="ratingValue = n">
                    <label for="rating-checkboxes">
                        <font-awesome-icon v-for="n in n" icon="fa-solid fa-star" />
                    </label>
                </div>
                <div class="reviews">
                    <div>
                        <input type="radio" name="review-checkboxes" value="asc" class="ms-2 rating-checkboxes" v-model="reviewOrder" @click="reviewOrder = 'asc'">
                        <label for="rating-checkboxes">+ reviews</label>
                    </div>

                    <div>
                        <input type="radio" name="review-checkboxes" value="desc" class="ms-2 rating-checkboxes" v-model="reviewOrder">
                        <label for="rating-checkboxes" @click="reviewOrder = 'desc'">- reviews</label>
                    </div>
                </div>
                <button class="btn btn-secondary mb-3" @click="resetDatas">Reset</button>
            </div>
            <!--<AppCard />-->

            <div class="main-content">
                <div v-for="doctor in orderDoctorList">
                    <AppCard :doctor="doctor" v-if="votesAverage(doctor.votes) == ratingValue || ratingValue == null"/>
                </div>
            </div>

            <!--<ul>
                <li v-for="doctor in doctorsList">{{ doctor.user.first_name }}</li>
            </ul>-->
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/styles/_partials/variables.scss" as *;

.content {
    max-width: 81.25rem;

    .side-bar {
        width: 30%;
    }

    .main-content {
        width: 70%;
    }
}
</style>