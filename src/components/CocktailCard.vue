<template>
  <div class="card h-100 text-center">
    <!-- lascio :src="base_url + '/storage/' ... come nello scorso progetto perché in questo momento non so bene dove saranno le immagini ma ipotizzo che avremo nei data un base_url e le img saranno in una cartella '/storage/' -->
    <img class="card-img-top img-fluid" :src="cocktail.image" alt="" />

    <div class="card-body">
      <h2>
        {{ cocktail.name }}
      </h2>
      <!-- /NAME -->

      <div class="badge p-2 bg-danger text-dark text-align-center">
        Category: <strong>{{ cocktail.category }}</strong>
      </div>
      <!-- /CATEGORY -->

      <hr />

      <div class="mb-2">Categories:</div>
      <div
        v-for="tag in cocktail.tags"
        class="badge p-2 bg-warning text-dark me-2 mb-2"
      >
        {{ tag }}
      </div>
      <!-- /TAGS -->

      <hr />

      <div class="mb-2">Ingredients:</div>

      <ul class="p-0 list-unstyled">
        <li
          v-for="ingredient in cocktail.ingredients"
          class="badge bg-primary mx-1"
        >
          {{ ingredient.name }} - {{ ingredient.quantity }}
        </li>
      </ul>
      <!-- /INGREDIENTS -->

      <hr />

      <div>
        Instructions:
        <p>{{ cocktail.instruction }}</p>
      </div>
      <!-- /INSTRUCTIONS -->
    </div>
    <!-- /.card-body -->

    <!-- <div class="card-footer">
      <router-link :to="{ name: 'cocktail', params: { slug: slug } }">View cocktail</router-link>
    </div> -->
  </div>
  <!-- /.card -->
</template>

<script>
export default {
  name: "CocktailCard",
  props: {
    cocktail: Object,
  },
};
</script>

<style lang="scss">
@import "../../src/assets/style/style.scss";
</style>
