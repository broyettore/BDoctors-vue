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
        }
    },

    created() {
        this.getDoctors();
    }
}
</script>

<template>
    <main>
        <div class="container">

            <!--<AppCard />-->

            <AppCard v-for="doctor in doctorsList" :key="doctor.id" :doctor="doctor" :address="doctor.address"
                :phone_number="doctor.phone_number" :services="doctor.services" :user_id="doctor.user_id"
                :created_at="doctor.created_at" :updated_at="doctor.updated_at" :photo="doctor.photo" />

            <!--<ul>
                <li v-for="doctor in doctorsList">{{ doctor.user.first_name }}</li>
            </ul>-->
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/styles/_partials/variables.scss" as *;
</style>