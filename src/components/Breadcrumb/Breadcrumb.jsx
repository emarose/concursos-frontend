import React from "react";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        return (
          <Breadcrumbs aria-label="Breadcrumb">
            <RouterLink color="inherit" to="/">
              Home
            </RouterLink>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value}
                </Typography>
              ) : (
                <RouterLink color="inherit" to={to} key={to}>
                  {value}
                </RouterLink>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
};

export default Breadcrumb;
