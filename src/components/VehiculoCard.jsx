import React from "react";

const VehiculoCard = ({ vehiculo, onCambiarEstado, onEliminar }) => {
  const imagen = `/assets/${vehiculo.tipoEmpaque}.png`;

  return (
    <div className="vehiculo-card">
      <img src={imagen} alt={vehiculo.tipoEmpaque} />
      <div>
        <p>
          {vehiculo.descripcion} | {vehiculo.cliente} <br />
          {vehiculo.variedad} | {vehiculo.kilos} kg | {vehiculo.tipoEmpaque}
        </p>
        <p>
          Ingreso: {vehiculo.ingreso} | Salida: {vehiculo.salida} <br />
          Recibe: {vehiculo.recibe} | Despacha: {vehiculo.despacha}
        </p>
        <select
          value={vehiculo.estado}
          onChange={(e) => onCambiarEstado(vehiculo.id, e.target.value)}
        >
          <option value="En Planta">En Planta</option>
          <option value="Listos para salida">Listos para salida</option>
          <option value="Despachados">Despachados</option>
        </select>
        <button onClick={() => onEliminar(vehiculo.id)} className="btn-eliminar">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default VehiculoCard;




