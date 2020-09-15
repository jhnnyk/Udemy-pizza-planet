export const addOrder = (state, order) => state.orders.push(order);

export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user.email;
  } else {
    state.currentUser = null;
  }
};
