import { FunctionComponent } from "react";

import { Footwork, LongswordGuards } from "./components";

export const MartialArtsPage: FunctionComponent = () => {
  return (
    <main>
      <h1>Martial Arts</h1>

      <Footwork />

      <LongswordGuards />
    </main>
  );
};
