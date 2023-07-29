import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  let params = useParams();

  const getSearchResults = async (searchTerm) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&query=${searchTerm}`
    );
    const data = await api.json();
    setResults(data.results);
  };
  useEffect(() => {
    getSearchResults(params.search);
  }, [params.search]);
  return (
    <Grid>
      {results.length > 0 ? (
        results.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Card>
          );
        })
      ) : (
        <p>No results found</p>
      )}
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
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchResults;
