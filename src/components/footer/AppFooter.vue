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
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h4 class="pt-4">Informazioni di contatto:</h4>
                    <ul class="pt-4">
                        <li>Telefono: +01 23456789</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4 class="pt-4">Seguici sui social:</h4>
                    <ul class="social-media-icons pt-4">
                        <li>
                            <a href="#" class="facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']" />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="twitter">
                                <font-awesome-icon :icon="['fab', 'twitter']" />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="linkedin">
                                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="instagram">
                                <font-awesome-icon :icon="['fab', 'instagram']" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h4 class="pt-4">Contatta l'assistenza:</h4>
                    <ul class="pt-4">
                        <li>prova</li>
                        <li>prova</li>
                        <li>prova</li>
                    </ul>
                </div>
            </div>
            <p class="p-5">&copy;<small>La parola Terracotta è bella.2023.Tutti i diritti riservati.</small> </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/_partials/variables.scss" as *;

footer {
    color: $footer-text;
    background-color: $footer-background;
}

.container {
    padding-top: 40px;
    padding-bottom: 40px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: 10px;
}

@media (max-width: 767.98px) {
    .container {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .col-md-4 {
        text-align: center;
        margin-bottom: 30px;
    }
}
</style>