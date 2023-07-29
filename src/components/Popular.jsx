import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Gradient } from "./styled/styled";
import { Card } from "./styled/styled";
import { Wrapper } from "./styled/styled";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const getLocal = JSON.parse(localStorage.getItem("popularRecipes"));

    if (getLocal && getLocal.length > 0) {
      setPopular(getLocal);
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&number=600`
      );
      const data = (await api.json()).recipes.filter(
        (recipe) => recipe.veryPopular
      );
      console.log(data);
      setPopular(data);
      localStorage.setItem("popularRecipes", JSON.stringify(data));
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          arrows: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default Popular;
