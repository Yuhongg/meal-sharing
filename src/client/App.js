import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AddMeal } from "./components/AddMeal";
import { NavBar } from "./components/NavBar";
import { ContactUs } from "./components/ContactUs";
import { Menu } from "./components/Menu";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <br />
        <HomePage />
      </Route>
      <NavBar />
      <Route exact path="/meals">
        <br />
        <AddMeal />
      </Route>
      <Route path="/menu">
        <br />
        <Menu />
      </Route>
      <Route path="/contactus">
        <br />
        <ContactUs />
      </Route>
    </Router>
  );
}

export default App;
