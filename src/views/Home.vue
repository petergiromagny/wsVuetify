<template>
  <div class="home">
    <div v-for="product in products" :key="product.id">
      <Products />
    </div>
  </div>
</template>

<script>
import products from '@/data/products'
import Products from '@/components/Products'

export default {
  name: 'Home',
  components: {
    Products
  },
  data: function() {
    return {
        products: products
      };
    }
  }
</script>
