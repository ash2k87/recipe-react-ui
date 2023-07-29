import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const navigate = useNavigate();
  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&cuisine=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.category);
    console.log(params.category);
  }, [params.category]);

  return (
    <Grid>
      {cuisine.length > 0 &&
        cuisine.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              onClick={() => {
                navigate(`/recipe/${recipe.id}`);
              }}
            >
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Card>
          );
        })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(5rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
