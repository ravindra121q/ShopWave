import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { SingleProductPage } from "../pages/SingleProductPage";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route
          path="/singleproductpage/:id"
          element={<SingleProductPage />}
        ></Route>
      </Routes>
    </div>
  );
};
