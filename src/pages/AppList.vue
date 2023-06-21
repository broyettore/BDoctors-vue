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
            ratingValue: null
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
        }
    },
    created() {
        this.getDoctors();
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
            </div>
            <!--<AppCard />-->

            <div class="main-content">
                <div v-for="doctor in doctorsList">
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