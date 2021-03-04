import { FunctionComponent } from "react";

import { Page } from "@components";
import { DrawingData } from "@data";

export const DrawingPage: FunctionComponent = () => {
  return <Page data={DrawingData} />;
};
