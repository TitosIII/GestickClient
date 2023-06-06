import Scanner from "./Scanner/Scanner";
import React, { useState } from "react";

export default function Camara({ renderCart, table }) {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  var freeze = false;

  const onDetected = (result) => {
    table.forEach(({ idProductos, PrNombre, PrPrecio, Pcodigo }) => {
      if (Pcodigo == result && !freeze) {
        freeze = true;
        setResult(`Añadiendo: ${PrNombre}`);
        renderCart({ idProductos, PrNombre, PrPrecio }, true);
        setTimeout(() => {
          freeze = false;
        },1500);
      }
    });
  };

  return (
    <div>
      <p>{result ? result : "Escaneando..."}</p>
      <button className="btn btn-sell" onClick={() => setCamera(!camera)}>
        {camera ? "Parar" : "Iniciar"}
      </button>
      <div className="containerCamara">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}
