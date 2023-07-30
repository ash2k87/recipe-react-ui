import React from "react";
import Home from "../pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import SearchResults from "./SearchResults";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cuisine/:category" element={<Cuisine />}></Route>
        <Route path="/searched/:search" element={<SearchResults />}></Route>
        <Route path="/recipe/:id" element={<Recipe />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
