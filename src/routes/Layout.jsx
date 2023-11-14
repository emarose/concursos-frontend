import React from "react";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ mt: 5 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
