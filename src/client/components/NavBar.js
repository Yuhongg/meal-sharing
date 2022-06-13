import React from "react";
import "./HomePage.css";
import { SearchBarFeature } from "./SearchBarFeature";

export function NavBar() {
  return (
    <nav>
      <SearchBarFeature />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/meals">Add a Meal</a>
        </li>
        <li>
          <a href="/contactus">Contact us</a>
        </li>
      </ul>
    </nav>
  );
}
