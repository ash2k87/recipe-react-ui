import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./components/pages/Pages";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork></GiKnifeFork>
          <Logo to={"/"}>Delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 500;
  font-family: "Lobster Two", cursive;
  font-style: italic;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 3rem;
    margin-right: 0.5rem;
  }
`;

export default App;
