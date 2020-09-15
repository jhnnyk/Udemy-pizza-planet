import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    menuItems: {
      1: {
        name: 'Margherita',
        description: 'A delicious tomato based pizza topped with mozzarella',
        options: [
          {
            size: 9,
            price: 6.95,
          },
          {
            size: 12,
            price: 10.95,
          },
        ],
      },
      2: {
        name: 'Pepperoni',
        description:
          'A delicious tomato based pizza topped with mozzarella and pepperoni',
        options: [
          {
            size: 9,
            price: 7.95,
          },
          {
            size: 12,
            price: 12.95,
          },
        ],
      },
      3: {
        name: 'Ham and Pineapple',
        description:
          'A delicious tomato based pizza topped with mozzarella, ham and pineapple -- aww yeah!',
        options: [
          {
            size: 9,
            price: 7.95,
          },
          {
            size: 12,
            price: 12.95,
          },
        ],
      },
    },
    orders: [],
    currentUser: null,
  },
  getters,
  mutations,
  actions,
});
