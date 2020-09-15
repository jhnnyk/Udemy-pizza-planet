const state = {
  orders: [],
};

const getters = {
  numberOfOrders: (state) => state.orders.length,
};

const mutations = {
  addOrder: (state, order) => state.orders.push(order),
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
