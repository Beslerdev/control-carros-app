import React, { useState } from "react";

const tipos = [
  { key: "granel", label: "Granel", img: "/assets/granel.png" },
  { key: "bigbag", label: "BigBag", img: "/assets/bigbag.png" },
  { key: "bolsa", label: "Bolsa", img: "/assets/bolsa.png" },
  { key: "carro", label: "Carro/Tolva", img: "/assets/carro.png" },
];

const CargaView = ({ onAgregar }) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);
  const [formData, setFormData] = useState({
    descripcion: "",
    cliente: "",
    variedad: "",
    kilos: "",
    ingreso: "",
    salida: "",
    recibe: "",
    despacha: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar({ ...formData, tipoEmpaque: tipoSeleccionado });
    setTipoSeleccionado(null);
    setFormData({
      descripcion: "",
      cliente: "",
      variedad: "",
      kilos: "",
      ingreso: "",
      salida: "",
      recibe: "",
      despacha: "",
    });
  };

  return (
    <div>
      {!tipoSeleccionado ? (
        <div className="selector">
          <h2>Selecciona tipo de carga</h2>
          <div className="imagenes">
            {tipos.map((t) => (
              <div key={t.key} className="opcion" onClick={() => setTipoSeleccionado(t.key)}>
                <img src={t.img} alt={t.label} />
                <span className="label">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario">
          <label>Descripción del carro</label>
          <input name="descripcion" value={formData.descripcion} onChange={handleChange} />

          <label>Cliente</label>
          <input name="cliente" value={formData.cliente} onChange={handleChange} />

          <label>Variedad</label>
          <input name="variedad" value={formData.variedad} onChange={handleChange} />

          <label>Kilos</label>
          <input name="kilos" value={formData.kilos} onChange={handleChange} />

          <label>Ingreso</label>
          <input name="ingreso" type="date" value={formData.ingreso} onChange={handleChange} />

          <label>Salida</label>
          <input name="salida" type="date" value={formData.salida} onChange={handleChange} />

          <label>Recibe</label>
          <input name="recibe" value={formData.recibe} onChange={handleChange} />

          <label>Despacha</label>
          <input name="despacha" value={formData.despacha} onChange={handleChange} />

          <button type="submit">Aceptar ingreso</button>
        </form>
      )}
    </div>
  );
};

export default CargaView;





