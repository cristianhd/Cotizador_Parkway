import axios from "axios";

const GET_SEARCH = "GET_SEARCH";

export function getSearch(origin, destination, typeProduct) {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:3001/products/${typeProduct}?origin=${origin}&destination=${destination}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_SEARCH,
          payload: { querySearch: res.data, typeProduct },
        });
      });
  };
}
