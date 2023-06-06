import Scanner from "./Scanner/Scanner";
import React, { useState } from "react";

export default function Camara({ renderCart, table, getExistences }) {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);
  var freeze = false;

  const onDetected = (result) => {
    table.forEach(({ idProductos, PrNombre, PrPrecio, Pcodigo, PrExistencias }) => {
      if (Pcodigo == result && !freeze && getExistences(idProductos) < PrExistencias ) {
        freeze = true;
        setResult(`Añadiendo: ${PrNombre}`);
        renderCart({ idProductos, PrNombre, PrPrecio }, true);
        setTimeout(() => {
          setResult("Escaneando...");
          freeze = false;
        },1500);
      }else if(getExistences(idProductos) >= PrExistencias){
        setResult("No hay más existencias disponibles");
        setTimeout(() => {
          setResult("Escaneando...");
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
