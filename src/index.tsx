import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
    ,
  </React.StrictMode>
);
