import React from "react";
import Tablero from "./Tablero";

const PlantaView = ({ vehiculos, onCambiarEstado }) => {
  return (
    <div>
      <Tablero vehiculos={vehiculos} onCambiarEstado={onCambiarEstado} />
    </div>
  );
};

export default PlantaView;
