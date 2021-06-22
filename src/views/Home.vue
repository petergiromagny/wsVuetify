<template>
  <div class="home">
    <div v-for="product in products" :key="product.id">
      <Products :name="product.name" :color="product.color" :quantity="product.quantity" :price="product.price" :img="product.img" />
    </div>
  </div>
</template>

<script>
import productsData from '@/data/products'
import Products from '@/components/Products'

export default {
  name: 'Home',
  components: {
    Products
  },
  data: function() {
    return {
        products: productsData
      };
    }
  }
</script>

<style>
  .product--list{
    flex-direction: column;
    justify-content: space-between;
  }
</style>
