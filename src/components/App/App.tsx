import { Global, css } from "@emotion/react";
import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalNav, Routes } from "./components";

import openSansBold from "@assets/fonts/OpenSans-Bold.ttf";
import openSansRegular from "@assets/fonts/OpenSans-Regular.ttf";

export const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Global
        styles={css`
          @font-face {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: normal;
            src: url("${openSansRegular}") format("truetype");
          }

          @font-face {
            font-family: "Open Sans";
            font-style: normal;
            font-weight: bold;
            src: url("${openSansBold}") format("truetype");
          }

          body {
            font-family: "Open Sans";
          }
        `}
      />

      <GlobalNav />

      <Routes />
    </BrowserRouter>
  );
};
