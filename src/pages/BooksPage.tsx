import { FunctionComponent } from "react";

import { Page } from "@components";
import { BooksData } from "@data";

export const BooksPage: FunctionComponent = () => {
  return <Page data={BooksData} />;
};
