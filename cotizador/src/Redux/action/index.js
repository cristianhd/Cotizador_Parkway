import axios from "axios";

const GET_SEARCH_EXPERIENCIAS = "GET_SEARCH_EXPERIENCIAS",
  GET_SEARCH_HOSPEDAJE = "GET_SEARCH_HOSPEDAJE",
  GET_SEARCH_TRASLADOS = "GET_SEARCH_TRASLADOS",
  GET_SEARCH_ACTIVIDADES = "GET_SEARCH_ACTIVIDADES",
  GET_SEARCH_ASISTENCIAS = "GET_SEARCH_ASISTENCIAS";

export function getSearchExperiencias(origin, destination) {
  return (dispatch) => {
    axios
      .get(
        `http://localhost:3001/products/experiencias?origin=${origin}&destination=${destination}`
      )
      .then((res) => {
        dispatch({
          type: GET_SEARCH_EXPERIENCIAS,
          payload: { querySearch: res.data },
        });
      });
  };
}

// export function getSearch(breed) {
//   return (dispatch) => {
//     axios.get(`http://localhost:3001/dogs?name=${breed}`).then((res) => {
//       dispatch({
//         type: GET_SEARCH,
//         payload: {
//           search: breed,
//           data: res.data,
//         },
//       });
//     });
//   };
// }

// export function getSearch(breed) {
//   return (dispatch) => {
//     axios.get(`http://localhost:3001/dogs?name=${breed}`).then((res) => {
//       dispatch({
//         type: GET_SEARCH,
//         payload: {
//           search: breed,
//           data: res.data,
//         },
//       });
//     });
//   };
// }

// export function getSearch(breed) {
//   return (dispatch) => {
//     axios.get(`http://localhost:3001/dogs?name=${breed}`).then((res) => {
//       dispatch({
//         type: GET_SEARCH,
//         payload: {
//           search: breed,
//           data: res.data,
//         },
//       });
//     });
//   };
// }

// export function getSearch(breed) {
//   return (dispatch) => {
//     axios.get(`http://localhost:3001/dogs?name=${breed}`).then((res) => {
//       dispatch({
//         type: GET_SEARCH,
//         payload: {
//           search: breed,
//           data: res.data,
//         },
//       });
//     });
//   };
// }
