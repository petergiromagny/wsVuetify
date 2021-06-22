<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <!-- <div class="text-overline mb-4">
          <img :src="require(img)" :alt="name">
        </div> -->
        <div class="text-overline mb-4">
          <p>{{ name }}</p>
          <div v-if="quantity > 0">
            <p>In stock</p>
          </div>
          <div v-if="quantity == 0">
            <p>Out of stock</p>
          </div>
        </div>
        <v-list-item-title class="text-h5 mb-1"> Headline 5 </v-list-item-title>
        <v-list-item-subtitle
          >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text @click="addToCard()"> Add to cart </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Product',
  props: {
    id: Number,
    name: String,
    color: String,
    quantity: String,
    price: String,
    img: String,
  },
  methods: {
    ...mapActions(["updateCart"]),
    addToCard() {
      let item = {
        id: this.id,
        name: this.name,
        color: this.color,
        quantity: this.quantity,
        price: this.price,
        img: this.img
      }
      this["updateChart"](item)
    }
  }
}
</script>
<style>
</style>