import { FunctionComponent } from "react";

import { Page } from "@components";
import { MoviesData } from "@data";

export const MoviesPage: FunctionComponent = () => {
  return <Page data={MoviesData} />;
};
