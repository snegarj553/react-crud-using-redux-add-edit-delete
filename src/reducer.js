const initialstate = [
  {
    id: 1,
    name: 'aaaaaaaa',
    email: 'email',
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

    
    state=action.payload;
    console.log(state)
    return state;
    default:
      return state;
  }
};
export default reducer;
