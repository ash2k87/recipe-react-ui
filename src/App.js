import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./components/pages/Pages";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
