import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import HeaderHome from "./Component/HeaderHome.jsx";
import HomeTemplate from "./Templates/HomeTemplate.jsx";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <Routes>
        <Route path="" element={<HomeTemplate></HomeTemplate>}>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
