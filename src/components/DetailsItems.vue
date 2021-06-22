<template>
  <div class="storetest">
    <div v-for="product in products" :key="product.id">
      <v-card
          max-width="375"
          class="mx-auto"
      >
        <v-img
            src=product.img
            height="300px"
            dark
        ></v-img>

        <v-list two-line>
          <v-list-item>
                Product Name
            <v-list-item-content>
              <v-list-item-title>{{product.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line>
          <v-list-item>
            Color
            <v-list-item-content>
              <v-list-item-title>{{product.color}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line>
          <v-list-item>
            Quantity
            <v-list-item-content>
              <v-list-item-title>{{product.quantity}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line>
          <v-list-item>
            Price
            <v-list-item-content>
              <v-list-item-title>{{product.price}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import products from '@/data/products'
export default {
  name : "storeComponent",
  data: function() {
    return {
      products: products
    };
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
