<template>
  <div class="p-5 mb-4 jumbotron shadow">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">
        Contact Us

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"
          />
        </svg>
      </h1>
    </div>
  </div>
  <div class="container">
    <div class="alert alert-success" role="alert" v-if="success">
      <strong>
        {{ success }}
      </strong>
    </div>
    <!--FORM-->
    <form class="form_text" action="" v-on:submit.prevent="sendForm()">
      <div v-if="!loading">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            :class="{ 'is-invalid': errors.name }"
            class="form-control"
            id="name"
            aria-describedby="name"
            v-model="name"
          />
          <div class="alert alert-danger" role="alert" v-if="errors.name">
            <strong>Errors!</strong>

            <ul>
              <li v-for="message in errors.name">{{ message }}</li>
            </ul>
          </div>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            :class="{ 'is-invalid': errors.email }"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            v-model="email"
          />
          <div class="alert alert-danger" role="alert" v-if="errors.email">
            <strong>Errors!</strong>

            <ul>
              <li v-for="message in errors.email">{{ message }}</li>
            </ul>
          </div>
        </div>

        <div class="mb-3">
          <label for="phone" class="form-label">Phone Number</label>
          <input
            type="phone"
            class="form-control"
            :class="{ 'is-invalid': errors.phone }"
            id="phone"
            v-model="phone"
          />
          <div class="alert alert-danger" role="alert" v-if="errors.phone">
            <strong>Errors!</strong>

            <ul>
              <li v-for="message in errors.phone">{{ message }}</li>
            </ul>
          </div>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <input
            type="message"
            :class="{ 'is-invalid': errors.message }"
            class="form-control"
            id="message"
            v-model="message"
          />
          <div class="alert alert-danger" role="alert" v-if="errors.message">
            <strong>Errors!</strong>

            <ul>
              <li v-for="message in errors.message">{{ message }}</li>
            </ul>
          </div>
        </div>

        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </div>
      <div class="loader text-center py-5" v-else>
        <i class="fa-solid fa-spinner fa-spin-pulse fa-2xl"></i>
        <div class="mt-3">Loading...</div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      success: null,
      errors: [],
      loading: false,
    };
  },

  methods: {
    sendForm() {
      this.loading = true;
      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      console.log(payload);

      axios
        .post("http://127.0.0.1:8000/api/contact", payload)
        .then((resp) => {
          const success = resp.data.success;
          if (!success) {
            console.log(resp);
            console.log(resp.data.errors);
            this.errors = resp.data.errors;
          } else {
            console.log(resp);
            console.log(resp.data.message);

            this.name = "";
            this.email = "";
            this.phone = "";
            this.message = "";
            this.success = resp.data.message;
          }
          this.loading = false;
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
