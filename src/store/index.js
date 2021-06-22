<<<<<<< HEAD
import Vue from 'vue';
import Vuex from 'vuex';
=======
import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
>>>>>>> 96863643158bfc8cafb3b67d6edcba0c38542d8d

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shoppingCart: 0,
    itemList: [
      {
        id: 1,
<<<<<<< HEAD
        name: 'Croissant',
        image: {
          source: '/images/crossiant.jpg',
          alt: 'Un croissant',
        },
        inStock: true,
        quantity: 13,
        price: 2.99,
      },
      {
        id: 2,
        name: 'Baguette de pain',
        image: {
          source: '/images/french-baguette.jpeg',
          alt: 'Quatre baguettes de pain',
        },
        inStock: true,
        quantity: 14,
        price: 3.99,
      },
      {
        id: 1,
        name: 'Éclair',
        image: {
          source: '/images/eclair.jpg',
          alt: 'Éclair au chocolat',
        },
        inStock: false,
        quantity: 15,
        price: 4.99,
      },
=======
        name: "Chaussette",
        color: "green",
        quantity: 10,
        price: 5,
        img: "/products/sockets.jpg"
      },
      {
        id: 2,
        name: "Chaussette",
        color: "grey",
        quantity: 10,
        price: 5,
        img: "/products/sockets.jpg"
      },
      {
        id: 3,
        name: "Gants",
        color: "blue",
        quantity: 0,
        price: 15,
        img: "/products/gloves.jpg"
      },
      {
        id: 4,
        name: "Gants",
        color: "pink",
        quantity: 5,
        price: 15,
        img: "/products/gloves.jpg"
      }
>>>>>>> 96863643158bfc8cafb3b67d6edcba0c38542d8d
    ],
    cart: [],
  },
  mutations: {
    INCREMENT_SHOPPING_CART(state, amount) {
      state.shoppingCart += amount;
    },
    ADD_TO_SHOPPING_CART(state, item) {
      state.panier.push(item);
    },
  },
  actions: {
    updateShoppingCart({ commit }, amount) {
      commit('INCREMENT_SHOPPING_CART', amount);
    },
    updateCart({ commit }, item) {
      commit('ADD_TO_SHOPPING_CART', item);
    },
  },
  modules: {},
});
