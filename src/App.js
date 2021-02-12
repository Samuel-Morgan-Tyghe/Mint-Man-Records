import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { Home, Releases, Artists, Info,Videos } from "./components/index";
import Navigation from "./components/Nav";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={"/Mint-Man-Records"} component={Home} />
        <Route exact path={"/Releases"} component={Releases} />
        <Route exact path={"/Artists"} component={Artists} />
        <Route exact path={"/info"} component={Info} />
        <Route exact path={"/Videos"} component={Videos} />
        <Router path={"*"}>
          <NotFound />
        </Router>
      </Switch>
    </Router>
  );
}

function NotFound() {
  let location = useLocation();
  return <h2>Page not found {location.pathname}</h2>;
}

export default App;
