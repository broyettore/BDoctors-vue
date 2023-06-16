<script >
export default {
    name: "AppCall"
}
</script>

<template>
    <section id="call" class="call-container container d-flex">
        <div class="container-img ">
            <img src="../../../../public/doctor-white-background.png" alt="">
        </div>

        <div class="text-center">
            <h2>Scegli il professionista più adatto alle tue esigenze</h2>
            <p class="mt-4">
                Le nostre chat sono organizzate in canali tematici in cui puoi scegliere il dottore che preferisci. Puoi
                parlare
                del tuo problema col professionista che reputi più adatto alla tua casistica.
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/_partials/variables.scss" as *;

main {
    #call {
        padding: 100px;
    }

    div {
        h2 {
            margin-top: 100px;
        }
    }
}



// Media query per dispositivi mobili
@media (max-width: 480px) {

    #call {
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
@media (min-width: 481px) and (max-width: 768px) {

    #call {
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

@media (min-width: 768px) and (max-width: 1000px) {

    #call {
        div {
            h2 {
                margin: 0px;
            }
        }
    }
}
</style>