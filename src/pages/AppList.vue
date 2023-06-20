<script>
import store from '../store';
import axios from "axios";
export default {
    name: "DoctorList",
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
            <ul>
            <li v-for="doctor in doctorsList">{{ doctor.user.first_name }}</li>
        </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/styles/_partials/variables.scss" as *;
</style>