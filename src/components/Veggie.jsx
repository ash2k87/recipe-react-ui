import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Gradient } from "./styled/styled";
import { Card } from "./styled/styled";
import { Wrapper } from "./styled/styled";
const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const getVeggie = async () => {
    const getLocal = localStorage.getItem("veggieRecipes");

    if (getLocal) {
      setVeggie(JSON.parse(getLocal));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      console.log(data);
      setVeggie(data.recipes);
      localStorage.setItem("veggieRecipes", JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <Wrapper>
      <h3>Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          arrows: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
