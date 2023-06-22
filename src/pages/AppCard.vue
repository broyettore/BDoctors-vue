<script>
import store from "../store";
export default {
  name: "AppCard",
  data() {
    return {
      store,
    };
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
};
</script>

<template>
<div class="p-2">
  <div class="card-container">
    <span class="pro">SPONSOR</span>
    <img v-if="doctor.photo != ''" :src="this.store.testApi + doctor.photo" :alt="doctor.photo"
        class="round ms-profile" />
    <img v-else src="/avatar-medico-edited.jpg" class="round ms-profile" :alt="doctor.last_name + 'photo'" />
    <h3>{{ doctor.user.first_name }} {{ doctor.user.last_name }}</h3>
    <h5>{{ doctor.address }}</h5>
    <h6>{{ doctor.phone_number }}</h6>
    <p>{{ doctor.services }}</p>
    <div class="buttons">
      <button class="primary">Prenota</button>
    </div>
    <div class="vote_review">
      <h6></h6>
      <ul>
        <li class="text-center">
          Valutazione: <font-awesome-icon v-for="n in votesAverage" icon="fa-solid fa-star" /> ({{ doctor.votes.length }})
        </li>
        <li class="text-center">
          Recensioni: {{ doctor.reviews.length }}
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@use "../assets/styles/_partials/variables.scss" as *;

.card-container {
  background-color: darken($color: $main-background, $amount: 10%);
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: #b3b8cd;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    cursor: pointer;
    transition: ease-in-out .20s;
  }

  .ms-profile {
    height: 150px;
    width: 150px;
  }

  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 5px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    line-height: 21px;
  }

  .pro {
    color: #231e39;
    background-color: #febb0b;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 25px;
    left: 18px;
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
      transition: ease .30s;
    }
  }

  .vote_review {
    background-color: darken($color: $main-background, $amount: 20%);
    text-align: left;
    padding: 15px;
    margin-top: 30px;
  }
}
</style>
