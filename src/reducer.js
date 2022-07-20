const initialstate = [
  {
    id: 1,
    name: 'User 1',
    email: 'user1@gmail.com',
    number: 1324324,
  },
];

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'ADD_DETAIL':
      state = [...state, action.payload];
      return state;
    case 'DEL_DETAIL':
      if (state.length > 0) {
        state = state.filter((data) => data.id != action.payload);
        return state;
      }
    case 'UPDATE_DETAIL':
      state = action.payload;
      console.log(state);
      return state;
    default:
      return state;
  }
};
export default reducer;
