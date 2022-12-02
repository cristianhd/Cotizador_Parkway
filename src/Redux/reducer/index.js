const intialState = {
  data: [],
  querySearch: [],
  suggest5Places: [],
  suggest5Cities: [],
};

export function rootReducer(state = intialState, action) {
  switch (action.type) {
    case "GET_SEARCH":
      return {
        ...state,
        querySearch: action.payload,
        typeProduct: action.payload,
        suggest5Places: [],
        suggest5Cities: [],
      };
    case "GET_SUGGEST_PLACES":
      return {
        ...state,
        suggest5Places: action.payload,
      };
    case "GET_SUGGEST_CITIES":
      return {
        ...state,
        suggest5Cities: action.payload,
      };
    case "CLEAN_QUERY_SEARCH":
      return {
        ...state,
        querySearch: [],
      };

    default:
      return state;
  }
}

export default rootReducer;
