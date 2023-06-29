<script>
import store from "../store";
import axios from "axios";
export default {
  name: "AppCard",
  data() {
    return {
      store,
      sponsoredDoctors: null,
    };
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
    },
  },
  props: {
    doctor: Object,
  },
  computed: {
    votesAverage() {
      let sum = 0;

      for (let i = 0; i < this.doctor.votes.length; i++) {
        sum += this.doctor.votes[i].value;
      }
      const avg = sum / this.doctor.votes.length;

      return Math.floor(avg);
    },
  },
  created() {
    this.getSponsoredDoctors();
  }
};
</script>

<template>
     <router-link :to="{ name: 'doctor', params: { id: doctor.id } }">
    <div class="card-ctn d-flex flex-column align-items-center">
      <div v-for="sponsoredDoctor in sponsoredDoctors">
        <span class="pro" v-if="sponsoredDoctor.user.id === doctor.id">SPONSOR</span>
      </div>
      <img v-if="doctor.photo != '' && doctor.photo != null" :src="this.store.testApi + doctor.photo" :alt="doctor.photo"
        class="round ms-profile" />
      <img v-else src="/avatar-medico-edited.jpg" class="round ms-profile" :alt="doctor.last_name + 'photo'" />
      <h3>{{ doctor.user.first_name }} {{ doctor.user.last_name }}</h3>
      <h5 class="fs-5 mb-2">{{ doctor.address }}</h5>
      <p class="fs-5 my-2" v-for="specialisation in doctor.specialisations">{{ specialisation.name }}</p>
      <h6 class="my-2">{{ doctor.phone_number }}</h6>
      <div class="vote_review mt-auto d-flex flex-column align-items-center">
        <div class="buttons mt-auto ">
        </div>
        <ul>
          <li class="text-center " v-if="doctor.votes.length > 0">
            Valutazione:
            <font-awesome-icon v-for="n in votesAverage" icon="fa-solid fa-star" />
          </li>
          <li class="text-center" v-else="doctor.votes.length === 0">
            Nessuna valutazione
          </li>
          <li class="text-center">Recensioni: {{ doctor.reviews.length }}</li>
        </ul>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
@use "../assets/styles/_partials/variables.scss" as *;

.card-ctn {
  background-color: darken($color: $main-background, $amount: 10%);
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    cursor: pointer;
    transition: ease-in-out 0.2s;
  }

  .ms-profile {
    height: 150px;
    width: 150px;
  }

  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 8px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    line-height: 21px;
    margin: 5px 0;
  }

  .pro {
    color: #231e39;
    background-color: #febb0b;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 14px;
    left: 14px;
  }

  .round {
    border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
  }

  button.primary {
    background-color: #03bfcb;
    border: 1px solid #03bfcb;
    border-radius: 3px;
    color: #231e39;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;

    &:hover {
      background-color: transparent;
      color: #03bfcb;
      border: 1px solid #03bfcb;
      transition: ease 0.3s;
    }
  }

  .vote_review {
    background-color: darken($color: $main-background, $amount: 20%);
    text-align: left;
    padding: 15px;
    margin-top: 30px;
    width: 100%;
  }
}

</style>
