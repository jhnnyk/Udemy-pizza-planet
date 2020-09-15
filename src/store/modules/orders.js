import { firestoreAction } from 'vuexfire';
import { dbOrdersRef } from '../../firebase';

const state = {
  orders: [],
};

const getters = {
  numberOfOrders: (state) => state.orders.length,
  getOrders: (state) => state.orders,
};

const mutations = {};

const actions = {
  setOrdersRef: firestoreAction((context) => {
    return context.bindFirestoreRef('orders', dbOrdersRef.orderBy('createdAt'));
  }),
  addNewOrder: async (context, order) => {
    try {
      await dbOrdersRef.add(order);
    } catch (error) {
      alert('Sorry, there was a problem placing your order. Please try again.');
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
