<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },

  data() {
    return {
      message: "Hello guys!",
    };
  },

  methods: {},

  mounted() {
    console.log(`Hi!`);
  },
};
</script>

<template>
  <body>
    <AppHeader></AppHeader>
    <main class="vh-100">
      <router-view></router-view>
    </main>
    <AppFooter></AppFooter>
  </body>
</template>

<script lang="scss"></script>
