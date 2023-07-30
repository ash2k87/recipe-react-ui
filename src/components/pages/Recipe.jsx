import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [activeTab, setActiveTab] = useState("Instructions");

  let params = useParams();

  const getRecipe = async (recipeId) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&includeNutrition=false`);
    const data = await api.json();
    console.log(data);
    setRecipe(data);
  };
  useEffect(() => {
    getRecipe(params.id);
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button className={activeTab === "Instructions" ? "active" : ""} onClick={() => setActiveTab("Instructions")}>
          Instructions
        </Button>
        <Button className={activeTab === "Ingredients" ? "active" : ""} onClick={() => setActiveTab("Ingredients")}>
          Ingredients
        </Button>
        {activeTab === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}
        {activeTab === "Ingredients" && (
          <ul>{recipe.extendedIngredients?.length > 0 && recipe.extendedIngredients?.map((ingredient) => <li key={ingredient.id}>{ingredient.original}</li>)}</ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
