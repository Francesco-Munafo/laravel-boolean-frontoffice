<template>
    <div class="p-5 mb-4 jumbotron shadow">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">
                About Us

                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                </svg>
            </h1>
            <div class="col-md-8 fs-4" v-if="!random_phrase">

                <a class="btn btn-primary btn-lg" type="button" @click="getRandomPhrase()">Click to find your phrase</a>
            </div>
            <div class="col-md-8 fs-4 mt-4" v-else>
                <h3>{{ random_phrase }}</h3>
                <a class="btn btn-primary btn-lg mt-3" type="button" @click="getRandomPhrase()">Click to change your
                    phrase</a>
            </div>
        </div>
    </div>

    <div class="container mt-4">

        <!-- our team -->
        <div class="row row-cols-1 row-cols-md-2 my-4">

            <div class="col-12 col-md-6 p-2 text-center">
                <h3 class="display-3">Our Team</h3>
                <img class="img-fluid rounded-pill" src="../assets/img/Foto team.png" alt="">
                <p class="px-4 pt-4 display-6 text-muted">

                    Il nostro Team è composto da seri professionisti che ti potranno accompagnare nel percorso che ti
                    condurrà ad una felice e tranquilla sbornia. Fatti trasportare sulle nuvole di ebrezza che solo l'alcol
                    di qualità servito dai migliori sul mercato ti possono regalare. Per qualsiasi domanda

                </p>
                <router-link to="/contact" class="text-decoration-none display-6" type="button">contattaci</router-link>

            </div>

            <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-2">

                <!--Team Member-->
                <div
                    class="d-flex align-items-center justify-content-around border border-3 rounded-5 border-black ms-5 py-2 member_card  bg_custom text-white ">
                    <!--Member Image-->
                    <div class="col-4 text-center">
                        <img src="https://avatars.githubusercontent.com/u/137309407?v=4" alt=""
                            class="contact_avatar img-fluid">
                    </div>
                    <!-- Member Name-->
                    <div class="col-4 text-center">
                        <h4>
                            Francesco Munafò
                        </h4>
                        <p>
                            Web-dev - Project Coordinator/Bartender
                        </p>
                    </div>
                    <!-- Member Github-->
                    <div class="col-4 text-center d-flex gap-2 justify-content-center">
                        <a href="https://github.com/Francesco-Munafo" class=" btn btn-outline-light">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://github.com/Francesco-Munafo" class=" btn btn-outline-primary">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <!--Team Member-->
                <div
                    class="d-flex align-items-center justify-content-around border border-3 rounded-5 border-black ms-5 py-2 member_card  bg_custom text-white ">
                    <!--Member Image-->
                    <div class="col-4 text-center">
                        <img src="https://avatars.githubusercontent.com/u/135619487?v=4" alt=""
                            class="contact_avatar img-fluid">
                    </div>
                    <!-- Member Name-->
                    <div class="col-4 text-center">
                        <h4>
                            Lorenzo Neri
                        </h4>
                        <p>
                            Web-dev - Collaborator/Mail-Responsable/Sommelier
                        </p>
                    </div>
                    <!-- Member Github-->
                    <div class="col-4 text-center d-flex gap-2 justify-content-center">
                        <a href="https://github.com/lorenzo-neri" class=" btn btn-outline-light">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://github.com/lorenzo-neri" class=" btn btn-outline-primary">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <!--Team Member-->
                <div
                    class="d-flex align-items-center justify-content-around border border-3 rounded-5 border-black ms-5 py-2 member_card  bg_custom text-white ">
                    <!--Member Image-->
                    <div class="col-4 text-center">
                        <img src="https://avatars.githubusercontent.com/u/136013237?v=4" alt=""
                            class="contact_avatar img-fluid">
                    </div>
                    <!-- Member Name-->
                    <div class="col-4 text-center">
                        <h4>
                            Giacomo Branchi
                        </h4>
                        <p>
                            Web-dev - Collaborator/Route-Responsable/StandUpComedian
                        </p>
                    </div>
                    <!-- Member Github-->
                    <div class="col-4 text-center d-flex gap-2 justify-content-center">
                        <a href="https://github.com/giacomobranchi" class=" btn btn-outline-light">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://github.com/giacomobranchi" class=" btn btn-outline-primary">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <!--Team Member-->
                <div
                    class="d-flex align-items-center justify-content-around border border-3 rounded-5 border-black ms-5 py-2 member_card  bg_custom text-white ">
                    <!--Member Image-->
                    <div class="col-4 text-center">
                        <img src="https://avatars.githubusercontent.com/u/134152768?v=4" alt=""
                            class="contact_avatar img-fluid">
                    </div>
                    <!-- Member Name-->
                    <div class="col-4 text-center">
                        <h4>
                            Matteo Nocera
                        </h4>
                        <p>
                            Web-dev - Collaborator/Designer/Drink tester
                        </p>
                    </div>
                    <!-- Member Github-->
                    <div class="col-4 text-center d-flex gap-2 justify-content-center">
                        <a href="https://github.com/MatteoNocera" class=" btn btn-outline-light">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://github.com/MatteoNocera" class=" btn btn-outline-primary">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <!--Team Member-->
                <div
                    class="d-flex align-items-center justify-content-around border border-3 rounded-5 border-black ms-5 py-2 member_card  bg_custom text-white ">
                    <!--Member Image-->
                    <div class="col-4 text-center">
                        <img src="../assets/img/Matteo Napoli.png" alt="" class="contact_avatar img-fluid">
                    </div>
                    <!-- Member Name-->
                    <div class="col-4 text-center">
                        <h4>
                            Matteo Napoli
                        </h4>
                        <p>
                            Web-dev - Collaborator/Route-Responsable/Alcoholic
                        </p>
                    </div>
                    <!-- Member Github-->
                    <div class="col-4 text-center d-flex gap-2 justify-content-center">
                        <a href="https://github.com/matteoNapoli42" class=" btn btn-outline-light">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://github.com/matteoNapoli42" class=" btn btn-outline-primary">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>


            </div>

        </div>

        <!-- our mission -->
        <div class="row row-cols-1 row-cols-lg-2 g-4">


            <div class="col">
                <div class="card text-center bg_custom text-white shadow h-100">
                    <div class="card-body">
                        <h2>La nostra Mission</h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, sequi amet, natus fuga
                            officia cupiditate
                            fugiat reiciendis fugit impedit dolorem quisquam provident voluptas obcaecati culpa
                            necessitatibus hic quia?
                            Fuga impedit atque unde sequi autem dolorem sunt laboriosam distinctio doloremque sapiente
                            libero consequuntur
                            commodi voluptas placeat dolor numquam, perferendis asperiores corrupti!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt fugiat iusto, vel
                            labore id amet aspernatur eveniet illo perferendis voluptas, provident rem, ipsum similique!
                            Ullam porro eum natus quod, debitis ipsum distinctio cumque! Ab voluptatum, et aut molestiae,
                            sunt perspiciatis atque nemo aperiam error dignissimos, ut perferendis dicta. Omnis optio
                            veritatis ducimus nostrum iste temporibus asperiores architecto quasi iusto id! Officia fugiat
                            eaque in quisquam magni esse ipsam saepe, ducimus nobis adipisci alias a deserunt culpa
                            asperiores necessitatibus beatae quasi inventore, voluptatibus incidunt? Quam odit, cumque neque
                            repellat ipsa deleniti error inventore illum consequuntur consectetur nobis ipsam itaque nulla!
                        </p>
                    </div>
                </div>
            </div>
            <div class="col">


                <div class="card text-center bg_custom text-white shadow h-100">
                    <img class="img-fluid rounded-2 shadow" src="https://picsum.photos/200" alt="">
                </div>


            </div>
        </div>

        <!-- our partners -->
        <h2 class="text-center my-5 text-white-50 display-4">I nostri Partners</h2>
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-6 g-3 mb-5">
            <div class="col d-flex justify-content-center align-items-center" v-for="spirit in spirits_images">
                <div class="card">
                    <img height="200" width="200" class="img-fluid" :src="spirit.img" alt="">
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: 'AboutView',
    data() {
        return {
            cocktail_phrases:
                [
                    'Non ci può essere una bella vita dove non ci sono buoni cocktail. - Benjamin Franklin', 'I cocktail sono la miscela perfetta di fantasia, colori e divertimento. - Fabrizio Caramagna', 'La risposta è dentro di te, ma devi innaffiarla con tre cocktail. - Anonimo', 'È amore quando sa il tuo cocktail preferito. - Marco Salvati', 'I cocktail ti regalano gioie.I cocktail ti mettono allegria.I cocktail ti fanno dimenticare i problemi.Tenetevi stretti i cocktail, non le persone. - Anonimo', 'Nel mio cocktail ideale ci metterei il rosso di Marte, un anello di Saturno, tutto il ghiaccio di Urano e una spolverata di stelle. - Fabrizio Caramagna', 'Soffro di crisi d’abbandono, quando finisco un cocktail ne voglio subito un altro. - godzyperplesso, Twitter', 'Si scrive “mi manchi” e si pronuncia “cameriere, un altro cocktail uguale!” - BarbyeTurica, Twitter', 'Tutti dovrebbero credere in qualcosa; io credo che mi farò un altro cocktail. - Anonimo', 'La pace nel mondo sta dentro un cocktail. - Anonimo', 'Lo spritz è il riso in bianco dei cocktails. - bon1z, Twitter', 'A mali estremi, bevi e rimedi. - NiceToMatthew, Twitter',

                ],
            random_phrase: '',

            spirits_images:
                [
                    { 'img': 'https://brandlogos.net/wp-content/uploads/2011/06/bacardi-logo-vector-01.png' },
                    { 'img': 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032016/untitled-1_51.png?itok=AB9j2Lth' },
                    { 'img': 'https://brandlogos.net/wp-content/uploads/2021/12/jack_daniels-brandlogo.net_-200x200.png' },
                    { 'img': 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0020/4281/brand.gif?itok=9lw_k2jr' },
                    { 'img': 'https://krysmelo.files.wordpress.com/2014/06/logo-campari.png' },
                    { 'img': 'https://www.malfygin.com/wp-content/themes/malfy/assets/images/logo.svg' }
                ],
        }
    },
    methods: {
        getRandomPhrase() {
            const randomIndex = Math.floor(Math.random() * this.cocktail_phrases.length);
            this.random_phrase = this.cocktail_phrases[randomIndex];

        }
    }
}
</script>

<style lang="scss" scoped>
.contact_avatar {
    border-radius: 90%;
    max-height: 120px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

.member_card {

    width: 100%;
}

/* .member_item {
    text-align: center;
}*/
</style>

