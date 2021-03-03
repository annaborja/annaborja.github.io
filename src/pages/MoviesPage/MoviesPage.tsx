import { FunctionComponent } from "react";

import { StarWars } from "./components";

export const MoviesPage: FunctionComponent = () => {
  return (
    <main>
      <h1>Movies</h1>

      <StarWars />
    </main>
  );
};
