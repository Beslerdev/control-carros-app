import React from "react";
import VehiculoCard from "./VehiculoCard";

const Tablero = ({ vehiculos, onCambiarEstado, onCambiarSalida, onEliminar }) => {
  const estados = ["En Planta", "Listos para salida", "Despachados"];

  return (
    <div className="tablero">
      {estados.map((estado) => (
        <div key={estado} className="seccion">
          <h2>{estado}</h2>
          <div className="fila">
            {vehiculos
              .filter((v) => v.estado === estado)
              .map((v) => (
                <VehiculoCard
                  key={v.id}
                  vehiculo={v}
                  onCambiarEstado={onCambiarEstado}
                  onCambiarSalida={onCambiarSalida}
                  onEliminar={onEliminar}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tablero;








