import { FunctionComponent } from "react";

import { Page } from "@components";
import { PodcastsData } from "@data";

export const PodcastsPage: FunctionComponent = () => {
  return <Page data={PodcastsData} />;
};
