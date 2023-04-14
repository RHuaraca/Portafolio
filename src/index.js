import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.scss";
//import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/es/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
