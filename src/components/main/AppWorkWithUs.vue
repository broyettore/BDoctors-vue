<script >
export default {
    name: "AppWorkWithUs"
}
</script>

<template>
    <section id="work" class="container d-flex justify-content-center">
        <div class="custom-ctn d-flex justify-content-between align-items-center">
            <div class="container-img left">
                <img src="/stretta-mano.png" class="img-fluid" alt="">
            </div>

            <div class="text-center pt-4 right">
                <h2>Sei un dottore? Lavora con noi!</h2>
                <p class="my-3 fs-5">
                    Contattaci e inviaci la tua esperienza!
                </p>
                <button class="btn ms-btn-cta">Contattaci</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

#work {
    padding: 80px 0;

    .custom-ctn {
        max-width: 80%;
    }

    h2 {
        font-weight: bold;
    }

    .ms-btn-cta {
        background-color: $main-background;
        color: #fff;
        padding: 10px 20px;
        border: 2px solid $main-background;
        border-radius: 10px;
        max-width: 150px;

        &:hover {
            background-color: transparent;
            font-weight: bold;
            color: $main-background;
            border: 2px solid $main-background;
            transform: translateY(-6px);
            transition: ease-in-out .30s;
        }
    }

    .left {
        width: 40%;
    }

    .right {
        width: 55%;
    }
}

@media screen and (min-width: 768px) {
    .custom-ctn {
        max-width: 60%;
    }

    .left,
    .right {
        width: 48%;
    }
}
</style>