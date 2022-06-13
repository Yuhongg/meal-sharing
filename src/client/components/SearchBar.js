import React, { useState } from "react";
import { SearchBarFeature } from "./SearchBarFeature";
import { SearchList } from "./SearchList";

export function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <SearchBarFeature search={search} setSearch={setSearch} />
      <SearchList {...{ search }} />
    </div>
  );
}
