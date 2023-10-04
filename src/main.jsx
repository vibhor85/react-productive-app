import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoStore } from "./store/TodoStore.js";
import { Provider } from "react-redux";
import { SchedulerStore } from "./store/SchedulerStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={TodoStore}>
    <Provider store={SchedulerStore}>
      <App />
    </Provider>
  </Provider>
);
