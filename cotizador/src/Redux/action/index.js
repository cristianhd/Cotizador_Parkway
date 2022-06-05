import axios from "axios";

const GET_SEARCH = "GET_SEARCH",
  CREATE_USER = "CREATE_USER";

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

export function createUser(data,token) {
  return (dispatch) => {
    console.log(data)
    axios
      .post("http://localhost:3001/users", data, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      .then((r) => {
        console.log(r);
        dispatch({ type: CREATE_USER });
      });
  };
}
