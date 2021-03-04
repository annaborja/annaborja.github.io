import { FunctionComponent } from "react";

import { Page } from "@components";
import { WeightliftingData } from "@data";

export const WeightliftingPage: FunctionComponent = () => {
  return <Page data={WeightliftingData} />;
};
