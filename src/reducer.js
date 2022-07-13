

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DETAIL':
      state = [...state, action.payload];
      return state;
  
    default:
      return state;
  }
};
export default reducer;
