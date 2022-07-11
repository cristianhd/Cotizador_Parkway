const intialState = {
  data: [],
  querySearch: [],
  queryPlaces:[]
};

export function rootReducer(state = intialState, action) {
  switch (action.type) {
    case "GET_SEARCH":
      return {
        ...state,
        querySearch: action.payload,
        typeProduct: action.payload,
      };
    case "GET_SEARCH_PLACES":
      return {
        ...state,
        queryPlaces: action.payload
      };

    default:
      return state;
  }
}

export default rootReducer;
