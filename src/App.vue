<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader,
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
    <main>
      <router-view></router-view>
    </main>
  </body>
</template>

<script lang="scss"></script>
