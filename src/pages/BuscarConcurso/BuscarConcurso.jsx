import { Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "@mkyy/mui-search-bar";
import ConcursoIndividual from "./ConcursoIndividual/ConcursoIndividual";
import axios from "axios";
import { Delete, Edit } from "@mui/icons-material";
import Swal from "sweetalert2";
const BuscarConcurso = () => {
  const [ordenPrelacionBuscado, setOrdenPrelacionBuscado] = useState("");
  const [showConcursoIndividual, setShowConcursoIndividual] = useState(false);
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!/^[0-9]+$/.test(ordenPrelacionBuscado)) {
      return;
    }
    try {
      const checkOrdenPrelacion = await axios.post(
        "http://localhost/concursos/API/check_orden_prelacion.php",
        { ordenPrelacion: ordenPrelacionBuscado },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!checkOrdenPrelacion.data) {
        alert("no existe el nro de prelacion " + ordenPrelacionBuscado);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      const searchConcurso = await axios.post(
        "http://localhost/concursos/API/search_concurso.php",
        { ordenPrelacion: ordenPrelacionBuscado },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(searchConcurso.data);
      setResultadoBusqueda(searchConcurso.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }

    /*  setConcursoIndividualData({
    }); */

    setShowConcursoIndividual(true);
  };

  const handleDelete = () => {
    return Swal.fire({
      title: "¿Eliminar Concurso?",
      icon: "warning",
      text: "Atención: Esta acción no puede ser revertida",
      confirmButtonText: "Confirmar",
      showCancelButton: true,
      cancelButtonText: "Volver",
    });
  };

  return (
    <>
      <Typography variant="h4" className="mt-2 mb-4" align="center">
        Buscar concurso
      </Typography>

      <Container>
        <Typography variant="p" className="mt-2 mb-3" align="center">
          Ingrese el Orden de Prelación del concurso
        </Typography>
        <span className="d-flex gap-4 mt-3">
          <SearchBar
            placeholder="Ingrese el Orden de Prelación"
            style={{ border: "1px solid gray" }}
            value={ordenPrelacionBuscado}
            onChange={(newValue) => {
              if (/^[0-9]+$/.test(newValue)) {
                setOrdenPrelacionBuscado(newValue);
              }
            }}
            onSearch={handleSearch}
          />
          <Button onClick={handleSearch} variant="contained">
            Buscar
          </Button>
        </span>
        {isLoading && "Cargando concurso..."}
        {showConcursoIndividual && (
          <>
            <ConcursoIndividual data={resultadoBusqueda} />
            <div className="bg-dark-subtle mx-1 px-3 w-100 justify-content-center my-3 mb-5 d-flex gap-4 border py-3">
              <Button
                className="iconButton"
                onClick={handleSearch}
                color="primary"
                variant="contained"
                disableRipple
              >
                <Edit sx={{ fontSize: 16, marginRight: "8px" }} />
                Editar
              </Button>

              <Button
                className="iconButton"
                onClick={handleDelete}
                color="error"
                disableRipple
                variant="contained"
              >
                <Delete sx={{ fontSize: 16, marginRight: "8px" }} />
                Eliminar
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default BuscarConcurso;
