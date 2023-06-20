<script >
export default {
    name: "AppWorkWithUs"
}
</script>

<template>
    <section id="work" class="container d-flex justify-content-center ">
        <div class="container-img ">
            <img src="../../../../public/stretta-mano.png" alt="">
        </div>

        <div class="text-center pt-4">
            <h2>Sei un dottore? Lavora con noi!</h2>
            <p class="mt-4 h5">
                Contattaci e inviaci la tua esperienza!
            <div><button class="button-type-2 hover-black">Contattaci</button></div>
            </p>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

// Media query per dispositivi mobili
@media (max-width: 480px) {

    #work {
        display: flex;
        flex-direction: column;

        div {
            h2 {
                margin-top: 50px;
            }

            p {
                font-size: 14px;
            }
        }
    }


}

// Media query per iPad e tablet
@media (min-width: 481px) and (max-width: 800px) {

    #work {
        display: flex;
        flex-direction: column;

        div {
            h2 {
                margin-top: 80px;
            }

            p {
                font-size: 16px;
            }
        }
    }
}

@media (min-width: 800px) and (max-width: 1000px) {

    #work {
        div {
            h2 {
                margin: 0px;
            }
        }
    }
}
</style>