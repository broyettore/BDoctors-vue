<script>
export default {
    name: "AppNavHeader"
};

</script>

<template>
    <nav>
            <ul>
                <li class="ms-item d-flex flex-row-reverse">
                    <div>SEI DOTTORE ?
                        &nbsp
                        <a href="http://127.0.0.1:8000/login">ACCEDI</a>
                        &nbsp
                        <a href="http://127.0.0.1:8000/register">REGISTRATI</a>
                    </div>
                </li>
            </ul>
    </nav>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/_partials/variables.scss" as *;

.ms-burger-btn {
    background-color: darken($color: $main-background, $amount: 5%);
    padding: 5px 8px;
    border-radius: 5px;

    &:hover {
        background-color: $header-text;
        transition: background-color .20s;
    }

    &:focus {
        box-shadow: none;
    }
}

.ms-item {
    width: 300px;
}


a {
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


.navbar-toggler {
    border: none;
    outline: none;
}

@media (max-width: 480px) {

    /* Stili per dispositivi mobili */
    a {
        font-size: 16px;
    }
}

@media (min-width: 481px) and (max-width: 768px) {

    /* Stili per iPad e tablet */
    a {
        font-size: 18px;
    }
}

</style>