import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  let params = useParams();

  const getRecipe = async (recipeId) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&includeNutrition=false`
    );
    const data = await api.json();
    setRecipe(data);
  };
  useEffect(() => {
    getRecipe(params.id);
  }, [params.id]);

  return <div>{params.id}</div>;
};

export default Recipe;
