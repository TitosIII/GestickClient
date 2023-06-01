import Scanner from './Scanner/Scanner';
import React, { useState } from "react";

export default function Camara() {

  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    setResult(result);
  };


  return (
    <div>
      <p>{result ? result : "Escaneando..."}</p>
      <button className='btn btn-sell' onClick={() => setCamera(!camera)}>
        {camera ? "Parar" : "Iniciar"}
      </button>
      <div className="containerCamara">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  )
}
