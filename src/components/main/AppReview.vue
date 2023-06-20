<script >
export default {
    name: "AppReview"
}
</script>

<template>
    <section id="review">

        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <img src="../../../../public/5-Star-Rating-Vector-Transparent-PNG.png" alt="" class="img-fluid">
                </div>
                <div class="col-md-12 text-center">
                    <h2>Sentiti libero di condividerci la tua esperienza</h2>
                    <p class="mt-4 h5">
                        Avrai a disposizione la possibilità di inserire la tua recensione e di poter leggere quelle altrui.
                        Questo ti aiuterà nella scelta del professionista che più si addice alle tue esigenze.
                    </p>
                </div>
            </div>
        </div>


    </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

#review {
    background-color: $main-background;
    color: $main-text;
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

    #review {
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

    #review {
        div {
            h2 {
                margin: 0px;
            }
        }
    }
}
</style>