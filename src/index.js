import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        {/* <Auth0Provider
          domain="dev-ascvuavf.us.auth0.com"
          clientId="uUrXX199qFCQUOV5i94fc47p2sBTR27b"
          redirectUri={window.location.origin}
          audience="https:/www.cotizador-api.com"
          scope="openid profile email"
        > */}
          <App />
        {/* </Auth0Provider> */}
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
