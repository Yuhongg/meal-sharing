import React, { useState } from "react";
import "./HomePage.css";
import { MealsList } from "./MealsList";
import { NavBar } from "./NavBar";

export const SearchContext = React.createContext();
export const SetSearchContext = React.createContext();

export function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={search}>
      <SetSearchContext.Provider value={setSearch}>
        <NavBar className="NavbarItems" />

        <p className="mainPage">Welcome to meal sharing website.</p>
        <MealsList />
        <section style={{ marginTop: "20px" }}>
          <footer>
            <p>All rights reserved @ Hamed karachi</p>
          </footer>
        </section>
      </SetSearchContext.Provider>
    </SearchContext.Provider>
  );
}
