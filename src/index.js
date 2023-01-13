import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router"
import { BrowserRouter } from "react-router-dom";
import { AnimeController } from "./context/AnimeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AnimeController>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </AnimeController>
);
