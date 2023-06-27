<script >
export default {
    name: "AppHeader",
};

</script>

<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center py-4 px-3">
                <a href="/" class="logo">
                    <h1>
                        <font-awesome-icon icon="fa-solid fa-notes-medical"  />BDoctors 
                    </h1>
                </a>
            <div class="link-ctn pt-1">
                <a href="http://127.0.0.1:8000/login" class="ms-link me-1">Accedi</a>
                <a href="http://127.0.0.1:8000/register" class="ms-link">Registrati</a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

header {
    background-color: $header-background;
    color: $header-text ;

    .logo {
        color: $header-text;
    }

    .link-ctn {
        .ms-link {
            box-shadow: inset 0 0 0 0 #54b3d6;
            margin: 0 -.25rem;
            padding: .25rem;
            transition: color .3s ease-in-out, box-shadow .5s ease-in-out;
            color: $header-text;
            
            &:hover {
                box-shadow: inset 400px 0 0 0 #54b3d6;
                color: darken($color: $main-background, $amount: 20%);
            }
        }
    }
}
</style>