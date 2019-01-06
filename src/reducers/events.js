export default (state = {}, action = {}) => {
  if (action.type === "EVENTS") {
    return action.payload;
  }
  return state;
};
