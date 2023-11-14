import React from "react";
import { Container } from "@mui/material";
import moment from "moment";
const ConcursoIndividual = ({ data }) => {
  console.log(data);

  if (!data) {
    return null;
  }

  // TERMINAR DFSIGNACION, HAY QUE BUSCAR POR IDS

  const {
    ordenPrelacion,
    area,
    asignaturas,
    fechaPaseArchivo,
    expedienteLlamado,
    expedienteConcurso,
    depto,
    convenio,
    cargo,
    oca,
    dedicacion,
    cantidadCargos,
    recusacion,
    interino,
    sustancia,
    fechaSustancia,
    nup,
    disidencia,
    designados,
    fechaDesignacion,
    fechaCierre,
    observacion,
    comisiones,
  } = data;

  const formatDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
  };

  return (
    <Container className="mt-5 ">
      <div className="row gap-5">
        <div className="col">
          <p>
            <b> Orden de Prelación: </b> {ordenPrelacion}
          </p>
          <p>
            <b> Area: </b>
            {area && area.area}
          </p>
          <p>
            <p>
              <b> Asignatura: </b> {asignaturas[0].asignatura}
            </p>
            <p>
              <b> Extensión: </b> {asignaturas.extension === "1" ? "Si" : "No"}
            </p>
          </p>
          <p>
            <b> Fecha de pase a Archivo: </b> {formatDate(fechaPaseArchivo)}
          </p>
          <p>
            <b> Expediente Llamado: </b>
            {expedienteLlamado}
          </p>
          <p>
            <b> Expediente Concurso: </b>
            {expedienteConcurso}
          </p>
          <p>
            <b> Departamento: </b>
            {depto && depto.depto}
          </p>
          <p>
            <b> Convenio: </b>
            {convenio && convenio.convenio}
          </p>
          <p>
            <b> Cargo: </b>
            {cargo && cargo.cargo}
          </p>
          <p>
            <b> OCA: </b> {oca}
          </p>

          <span className="d-flex gap-4">
            <p>
              <b> Dedicación: </b> {dedicacion && dedicacion.dedicacion}
            </p>
            {dedicacion && dedicacion.idSubdedicacion ? (
              <>
                <b> Sub-dedicación: </b> {dedicacion.idSubdedicacion}
              </>
            ) : null}
          </span>
          <p>
            <b> Cantidad de Cargos: </b> {cantidadCargos}
          </p>
        </div>
        <div className="col">
          <p>
            <b> Recusaciones: </b>{" "}
            {recusacion === "" ? "Sin recusaciones" : recusacion}
          </p>
          <p>
            <b> Interino: </b> {interino}
          </p>
          <p>
            <b> Sustanciado: </b> {sustancia === "1" ? "Sí" : "No"}
          </p>
          <p>
            <b> Fecha de sustanciación: </b>
            {formatDate(fechaSustancia)}
          </p>
          <p>
            <b> NUP:</b> {nup}
          </p>
          <p>
            <b> Disidencia:</b> {disidencia === "1" ? "Sí" : "No"}
          </p>
          <p>
            <b> Designación: </b>

            {designados && designados.length > 0
              ? designados[0]?.designado
              : "-"}
          </p>

          <p>
            <b>Fecha de designación: </b>
            {formatDate(fechaDesignacion)}
          </p>
          <p>
            <b>Fecha de cierre: </b>
            {formatDate(fechaCierre)}
          </p>

          <ul className="p-0">
            <b> Comisión: </b>
            {comisiones.map((jurado, i) => (
              <li className="px-0 py-1 mx-2" key={i}>
                {">"} {jurado.miembro}
              </li>
            ))}
          </ul>
          {observacion && (
            <p>
              <b>Observaciones: </b>
              {observacion}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ConcursoIndividual;
