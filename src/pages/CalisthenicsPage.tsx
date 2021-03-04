import { FunctionComponent } from "react";

import { Page } from "@components";
import { CalisthenicsData } from "@data";

export const CalisthenicsPage: FunctionComponent = () => {
  return <Page data={CalisthenicsData} />;
};
