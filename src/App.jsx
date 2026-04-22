import React, { useState } from "react";
import CargaView from "./components/CargaView";
import PlantaView from "./components/PlantaView";
import vehiculosIniciales from "./data/vehiculos.json";
import "./App.css";

function App() {
  const [vista, setVista] = useState("planta");
  const [vehiculos, setVehiculos] = useState(vehiculosIniciales);

  const agregarVehiculo = (nuevo) => {
    setVehiculos([...vehiculos, { ...nuevo, estado: "En Planta", id: Date.now() }]);
    setVista("planta");
  };

  const cambiarEstado = (id, nuevoEstado) => {
    setVehiculos(
      vehiculos.map((v) =>
        v.id === id ? { ...v, estado: nuevoEstado } : v
      )
    );
  };

  const cambiarSalida = (id, nuevaFecha) => {
    setVehiculos(
      vehiculos.map((v) =>
        v.id === id ? { ...v, salida: nuevaFecha } : v
      )
    );
  };

  const eliminarVehiculo = (id) => {
    setVehiculos(vehiculos.filter((v) => v.id !== id));
  };

  return (
    <div>
      <h1>Control de Carros y Tolvas en Planta</h1>
      <div className="menu">
        <button onClick={() => setVista("carga")}>Agregar ingreso</button>
        <button onClick={() => setVista("planta")}>Ver planta</button>
      </div>
      {vista === "carga" ? (
        <CargaView onAgregar={agregarVehiculo} />
      ) : (
        <PlantaView
          vehiculos={vehiculos}
          onCambiarEstado={cambiarEstado}
          onCambiarSalida={cambiarSalida}
          onEliminar={eliminarVehiculo}
        />
      )}
    </div>
  );
}

export default App;





