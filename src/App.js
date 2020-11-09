import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import {  Home, About, Contact } from "./components/index";
import Navigation from './components/Nav'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
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
