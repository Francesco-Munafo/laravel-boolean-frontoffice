<template>
    <h1 class=" text-center">
        Contacts
    </h1>
    <div class="container d-flex justify-content-center align-items-center mt-5 mx-auto">

        <!--FORM-->
        <div class="col-6">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

        <div class="col-6 d-flex flex-column align-items-center justify-content-center gap-2">

            <!--Team Member-->
            <div
                class="d-flex justify-content-center align-items-center gap-5 border border-3 rounded-5 border-black w-100 ms-5 py-2 member_card">
                <!--Member Image-->
                <div class="col-1">
                    <img src="https://avatars.githubusercontent.com/u/137309407?v=4" alt="" class="contact_avatar">

                </div>
                <!-- Member Name-->
                <div class="col-4">
                    <h4>
                        Francesco Munafò
                    </h4>
                </div>
                <!-- Member Github-->
                <div class="col-4"><a href="">GitHub</a></div>
            </div>

            <!--Team Member-->
            <div
                class="d-flex justify-content-center align-items-center gap-5 border border-3 rounded-5 border-black w-100 ms-5 py-2 member_card">
                <!--Member Image-->
                <div class="col-1">
                    <img src="https://avatars.githubusercontent.com/u/136013237?v=4" alt="" class="contact_avatar">
                </div>
                <!-- Member Name-->
                <div class="col-4">
                    <h4>
                        Giacomo Branchi
                    </h4>
                </div>
                <!-- Member Github-->
                <div class="col-4"><a href="">GitHub</a></div>
            </div>

            <!--Team Member-->
            <div
                class="d-flex justify-content-center align-items-center gap-5 border border-3 rounded-5 border-black w-100 ms-5 py-2 member_card">
                <!--Member Image-->
                <div class="col-1">
                    <img src="https://avatars.githubusercontent.com/u/134152768?v=4" alt="" class="contact_avatar">
                </div>
                <!-- Member Name-->
                <div class="col-4">
                    <h4>Matteo Nocera</h4>
                </div>
                <!-- Member Github-->
                <div class="col-4"><a href="">GitHub</a></div>
            </div>


            <!--Team Member-->
            <div
                class="d-flex justify-content-center align-items-center gap-5 border border-3 rounded-5 border-black w-100 ms-5 py-2 member_card">
                <!--Member Image-->
                <div class="col-1">
                    <img src="https://avatars.githubusercontent.com/u/135619487?v=4" alt="" class="contact_avatar">
                </div>
                <!-- Member Name-->
                <div class="col-4">
                    <h4>
                        Lorenzo Neri
                    </h4>
                </div>
                <!-- Member Github-->
                <div class="col-4"><a href="">GitHub</a></div>
            </div>

            <!--Team Member-->
            <div
                class="d-flex justify-content-center align-items-center gap-5 border border-3 rounded-5 border-black w-100 ms-5 py-2 member_card">
                <!--Member Image-->
                <div class="col-1">
                    <img src="" alt="">
                </div>
                <!-- Member Name-->
                <div class="col-4">
                    <h4>
                        Matteo Napoli
                    </h4>
                </div>
                <!-- Member Github-->
                <div class="col-4"><a href="">GitHub</a></div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: black;
}

.contact_avatar {
    border-radius: 90%;
    height: 60px;
}

.member_card {
    background-color: rgb(212, 198, 198);
}
</style>