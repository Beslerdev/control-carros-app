import React from "react";
import Tablero from "./Tablero";

const PlantaView = ({ vehiculos, onCambiarEstado, onCambiarSalida, onEliminar }) => {
  return (
    <div>
      <Tablero
        vehiculos={vehiculos}
        onCambiarEstado={onCambiarEstado}
        onCambiarSalida={onCambiarSalida}
        onEliminar={onEliminar}
      />
    </div>
  );
};

export default PlantaView;
