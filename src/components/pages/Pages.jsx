import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchResults from "./SearchResults";
import Recipe from "./Recipe";
const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cuisine/:category" element={<Cuisine />}></Route>
      <Route path="/searched/:search" element={<SearchResults />}></Route>
      <Route path="/recipe/:id" element={<Recipe />}></Route>
    </Routes>
  );
};

export default Pages;
