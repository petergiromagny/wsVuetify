import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import {stack} from "vuetify/src/components/VCalendar/modes/stack";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoppingCart: 0,
    itemList: [
      {
        id:1,
        name: "Croissant",
        image: {
          source: "/images/crossiant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        quantity: 13,
        price: 2.99
      },
      {
        id:2,
        name: "Baguette de pain",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        quantity: 14,
        price: 3.99
      },
      {
        id:1,
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        quantity: 15,
        price: 4.99
      }
    ],
    cart:[
    ]
  },
  mutations: {
    INCREMENT_SHOPPING_CART(state, amount) {
      state.shoppingCart += amount
    },
    ADD_TO_SHOPPING_CART(state, item) {
      state.panier.push(item)
    }
  },
  actions: {
    updateShoppingCart({ commit }, amount) {
      commit("INCREMENT_SHOPPING_CART", amount)
    },
    updateCart({commit}, item) {
      commit("ADD_TO_SHOPPING_CART", item)
    }
  },
  modules: {
  }
})
