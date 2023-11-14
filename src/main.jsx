import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NuevoConcurso from "./pages/NuevoConcurso/NuevoConcurso.jsx";
import EditarConcurso from "./pages/EditarConcurso/EditarConcurso.jsx";
import VerConcursos from "./pages/VerConcursos/VerConcursos.jsx";
import Navigation from "./components/Navigation/Navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import deepPurple from "@mui/material/colors/deepPurple";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Layout from "./routes/Layout.jsx";
import BuscarConcurso from "./pages/BuscarConcurso/BuscarConcurso.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/nuevoConcurso",
    element: <NuevoConcurso />,
  },
  {
    path: "/editarConcurso",
    element: <EditarConcurso />,
  },
  {
    path: "/verConcursos",
    element: <VerConcursos />,
  },
]); */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        handle={{
          crumb: (data) => <span>sdf</span>,
        }}
        path="/nuevoConcurso"
        element={<NuevoConcurso />}
      />
      <Route path="/verConcursos" element={<VerConcursos />} />
      <Route path="/editarConcurso" element={<EditarConcurso />} />
      <Route path="/buscarConcurso" element={<BuscarConcurso />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </LocalizationProvider>
);
