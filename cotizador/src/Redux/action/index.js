import axios from "axios";


const GET_SEARCH = "GET_SEARCH",
  GET_SEARCH_PLACES = "GET_SEARCH_PLACES",
  CREATE_USER = "CREATE_USER",
  CREATE_PRODUCT = "CREATE_PRODUCT";

  const BaseUrl = process.env.REACT_APP_BASE_URL;

export function getSearch(origin, destination, typeProduct) {
  return (dispatch) => {
    axios
      .get(
        `${BaseUrl}/products/${typeProduct}?origin=${origin}&destination=${destination}`
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

export function getSearchPlaces(query) {
  console.log(BaseUrl)
  return (dispatch) => {
    axios
      .get(`https://${BaseUrl}/places?place=${query}`)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_SEARCH_PLACES,
          payload: { queryPlaces: res.data },
        });
      });
  };
}

export function createUser(data, token) {
  return (dispatch) => {
    console.log(data);
    axios
      .post(`${BaseUrl}/user`, data, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((r) => {
        console.log(r);
        dispatch({ type: CREATE_USER });
      });
  };
}

export function createProduct(data, typeProduct) {
  return (dispatch) => {
    console.log({ [typeProduct]: data });
    axios
      .post(`${BaseUrl}/products/${typeProduct}`, {
        [typeProduct]: [data],
      })
      .then((r) => {
        console.log(r);
        dispatch({ type: CREATE_PRODUCT });
      });
  };
}
