import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import { AppRoute } from "@constants";

export const GlobalNav: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to={AppRoute.HOME}>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
