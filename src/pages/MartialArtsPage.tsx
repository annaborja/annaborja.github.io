import { FunctionComponent } from "react";

import { Page } from "@components";
import { MartialArtsData } from "@data";

export const MartialArtsPage: FunctionComponent = () => {
  return <Page data={MartialArtsData} />;
};
