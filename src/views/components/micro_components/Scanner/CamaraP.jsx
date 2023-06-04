import Scanner from "./Scanner";
import { useState } from "react";

export default function CamaraP({ setFieldValue }) {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = (result) => {
    setResult(result);
    setFieldValue("code", result);
  };

  return (
    <div>
      <div className="containerCamaraP">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
      <p>{result ? result : "Escaneando..."}</p>
      <button
        className="btn btn-sell"
        onClick={(e) => {
          e.preventDefault();
          setCamera(!camera);
        }}
      >
        {camera ? "Parar" : "Iniciar"}
      </button>
    </div>
  );
}
