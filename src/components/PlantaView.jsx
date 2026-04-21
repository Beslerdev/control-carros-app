import React from "react";
import Tablero from "./Tablero";

const PlantaView = ({ vehiculos, onCambiarEstado, onEliminar }) => {
  return (
    <div>
      <Tablero
        vehiculos={vehiculos}
        onCambiarEstado={onCambiarEstado}
        onEliminar={onEliminar}
      />
    </div>
  );
};

export default PlantaView;
