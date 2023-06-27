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
            <div class="row row-cols-2 row-cols-md-4 py-3 mb-4 d-flex justify-content-center">
                <div class="col mb-3">
                    <h4 class="mb-3">Informazioni di contatto:</h4>
                    <ul>
                        <li>Telefono: +01 23456789</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
                <div class="col mb-3">
                    <h4 class="mb-3">Seguici sui social:</h4>
                    <ul class="social-media-icons">
                        <li>
                            <a href="#" class="facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']" />
                                facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" class="twitter">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                                twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" class="linkedin">
                                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                                linkedin
                            </a>
                        </li>
                        <li>
                            <a href="#" class="instagram">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                                instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="text-center mb-0">&copy;<small>La parola Terracotta è bella.2023.Tutti i diritti riservati.</small> </p>
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