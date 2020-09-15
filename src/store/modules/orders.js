import { firestoreAction } from 'vuexfire';
import { dbOrdersRef } from '../../firebase';

const state = {
  orders: [],
};

const getters = {
  numberOfOrders: (state) => state.orders.length,
  getOrders: (state) => state.orders,
};

const mutations = {
  addOrder: (state, order) => state.orders.push(order),
};

const actions = {
  setOrdersRef: firestoreAction((context) => {
    return context.bindFirestoreRef('orders', dbOrdersRef);
  }),
};

export default {
  state,
  getters,
  mutations,
  actions,
};
