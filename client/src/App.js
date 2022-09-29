import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "../src/Components/Landing/Landing.jsx";
import Home from "../src/Components/Home/Home.jsx";
import CreateRecipe from "../src/Components/CreateRecipe/CreateRecipe.jsx";
import DetailRecipe from "../src/Components/DetailsRecipe/DetailsRecipe.jsx";
import About from "../src/Components/About/About.jsx";
import Page404 from "../src/Components/Page404/Page404.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/createRecipe" component={CreateRecipe} />
        <Route exact path="/detailsRecipes/:id" component={DetailRecipe} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
