<template>
    <h1 class=" text-center">
        Contacts
    </h1>
    <div class="container">
        <!--FORM-->
        <form>
            <div class="mb-3">
                <label for="inputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" aria-describedby="inputName" v-model="name">
                <div id="inputName" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="InputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="InputPhone" class="form-label">Phone Number</label>
                <input type="phone" class="form-control" id="InputPhone" v-model="phone">
            </div>

            <div class="mb-3">
                <label for="messagge" class="form-label">Message</label>
                <input type="message" class="form-control" id="message" v-model="message">
            </div>
            <button type="submit" @click="this.sendForm()" class="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Contact',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
        }
    },

    methods: {
        sendForm() {
            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message
            };
            console.log(payload);
            //axios.post
        }
    }
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
    background-color: rgb(240, 236, 236);
    width: 100%;
}

.member_item {
    text-align: center;
}
</style>