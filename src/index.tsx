import ReactDOM from "react-dom";
import "./assets/index.css";
import reportWebVitals from "./reportWebVitals";
import LoginView from "./app/LoginView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileView from "./app/ProfileView";
import React from "react";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="login" element={<LoginView />} />
      <Route path="profile" element={<ProfileView />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
