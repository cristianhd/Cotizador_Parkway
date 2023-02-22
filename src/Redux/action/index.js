import axios from "axios";

const GET_SEARCH = "GET_SEARCH",
  GET_PRODUCT_ID = "GET_PRODUCT_ID",
  GET_SUGGEST_PLACES = "GET_SUGGEST_PLACES",
  GET_SUGGEST_CITIES = "GET_SUGGEST_CITIES",
  CREATE_USER = "CREATE_USER",
  CREATE_PRODUCT = "CREATE_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT";

export function getSearch(origin, destination, date, typeProduct, pax, days) {
  return (dispatch) => {
    axios
      .get(
        `/products/${typeProduct}?origin=${origin}&destination=${destination}&date=${date}&pax=${pax}&days=${days}`
      )
      .then((res) => {
        dispatch({
          type: GET_SEARCH,
          payload: { querySearch: res.data },
        });
      });
  };
}

export function getProductbyId(id, typeProduct) {
  return (dispatch) => {
    axios.get(`/products/${typeProduct}?id=${id}`).then((res) => {
      dispatch({
        type: GET_PRODUCT_ID,
        payload: { productById: res.data },
      });
    });
  };
}

export function getSuggestPlaces(query) {
  return (dispatch) => {
    axios.get(`/places/suggest?name=${query}`).then((res) => {
      dispatch({
        type: GET_SUGGEST_PLACES,
        payload: { suggest5Places: res.data },
      });
    });
  };
}

export function getSuggestCities(query) {
  return (dispatch) => {
    axios.get(`/cities/suggest?name=${query}`).then((res) => {
      dispatch({
        type: GET_SUGGEST_CITIES,
        payload: { suggest5Cities: res.data },
      });
    });
  };
}

export function createUser(data, token) {
  return (dispatch) => {
    axios
      .post(`/users`, data, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch({ type: CREATE_USER });
      });
  };
}

export function createProduct(data, typeProduct) {
  return (dispatch) => {
    axios
      .post(`/products/${typeProduct}`, {
        [typeProduct]: data,
      })
      .then((res) => {
        dispatch({ type: CREATE_PRODUCT, payload: res.data });
      });
  };
}

export function deleteProduct(id, typeProduct) {
  return (dispatch) => {
    axios
      .delete(`/products/${typeProduct}`, {
        data: {
          id,
        },
      })
      .then((res) => {
        dispatch({ type: DELETE_PRODUCT, payload: res.data });
      });
  };
}

export function updateProduct(id, update, typeProduct) {
  return (dispatch) => {
    axios
      .patch(`/products/${typeProduct}`, {
        [typeProduct]: {
          id,
          update,
        },
      })
      .then((res) => {
        dispatch({ type: UPDATE_PRODUCT });
      });
  };
}
