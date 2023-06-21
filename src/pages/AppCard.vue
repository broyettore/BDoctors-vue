<script>
import store from '../store';
export default {
    name: 'AppCard',
    data() {
        return {
            store,
        }
    },
    props: {
        doctor: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="card-doctor p-4 m-4 d-flex justify-content-between align-items-center">

            <div class="container-img-name d-flex">
                <img v-if="doctor.photo != ''" :src="this.store.testApi + doctor.photo" :alt="doctor.photo" class="rounded-circle" />
                <img v-else src="/avatar-medico-edited.jpg" :alt="doctor.last_name + 'photo'">
                <div class="name-and-star">
                    <h3 class="p-2">{{ doctor.user.first_name }} {{ doctor.user.last_name }}</h3>
                    <!--inserire le stelline delle recensioni qui-->
                </div>
            </div>

            <div class="info-1 d-flex flex-column text-center">
                <p><strong class="p-2">Indirizzo dell'ufficio del dottore:</strong>{{ doctor.address }}</p>
                <p><strong class="p-2">Contatto telefonico:</strong>{{ doctor.phone_number }}</p>
                <p><strong class="p-2">Specializzazione del dottore:</strong>{{ doctor.services }}</p>
            </div>

            <div class="info-2 d-flex">
                <!--inserire il prezzo qui-->
                <button class="button-type-1">prenota</button>
            </div>

        </div>
    </div>
</template>
  
<style scoped lang="scss">
@use "../assets/styles/_partials/variables.scss" as *;

.card-doctor {

    border-bottom: 3px solid $main-title-text;

    img {
        max-width: 100px;
    }

    h3 {
        color: $main-title-text
    }
}
</style>