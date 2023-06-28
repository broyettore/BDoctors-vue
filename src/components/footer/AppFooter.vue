<script >
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: "AppFooter",
    components: {
        FontAwesomeIcon,
    },
};
</script>

<template>
    <footer class="footer">
        <div class="container py-4">
            <div class="d-flex justify-content-between">
                <div class="mb-3">
                    <h4 class="mb-3">Informazioni di contatto:</h4>
                    <ul>
                        <li>Telefono: +01 23456789</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
                <div class="socials">
                    <h4 class="mb-2">I Nostri Socials</h4>
                    <ul class="social-media-icons d-flex">
                        <li class="m-1 p-1 ms-0 ps-0">
                            <a href="#" class="facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']" class="fs-4" />
                            </a>
                        </li>
                        <li class="m-1 p-1">
                            <a href="#" class="twitter">
                                <font-awesome-icon :icon="['fab', 'twitter']" class="fs-4" />
                            </a>
                        </li>
                        <li class="m-1 p-1">
                            <a href="#" class="linkedin">
                                <font-awesome-icon :icon="['fab', 'linkedin-in']" class="fs-4" />
                            </a>
                        </li>
                        <li class="m-1 p-1">
                            <a href="#" class="instagram">
                                <font-awesome-icon :icon="['fab', 'instagram']" class="fs-4" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="text-center">
                <p class="mb-0">&copy;<small>Team 6 Boolean, Tutti i diritti riservati.</small> </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

footer {
    color: $footer-text;
    background-color: $footer-background;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: 10px;
}

</style>