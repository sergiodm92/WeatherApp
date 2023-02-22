import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/strore/store.js";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter outer >
      <App />
    </BrowserRouter>
  </Provider>,
);
