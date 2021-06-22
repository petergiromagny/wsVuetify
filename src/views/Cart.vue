

<script>
import Product from "@/components/Products";
import { mapState } from "vuex"
export default {
  name: "Cart",
  components: {Product},
  computed: {
    ...mapState({
      shoppingCart: "shoppingCart",
      itemList: "itemList",
      panier: "panier"
    })
  }
}
</script>

<template>
  <div>
    <Banner> </Banner>

    <Product
        v-for="item in panier"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :key="item.name"
    />
  </div>

</template>

<style scoped>

</style>
