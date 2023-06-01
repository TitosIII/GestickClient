import Header from "../components/micro_components/Header";
import "../../../public/CSS/CSS_Gestick.css";
import Form from "./Form";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from "react";
import Session from "react-session-api";

export default function EditarEmpleado() {
  const [loading, setLoading] = useState(true);

  window.addEventListener("load", () => setLoading(false));
  console.log(loading);

  useEffect(()=>{
    if (document.readyState === "complete") {
      setLoading(false);
    }
  }, []);

  if (Session.get("type") == 1) {
    return (
      <section>
        {loading ? (
          <div className="contenedorCarga">
            <ClockLoader color="#01a7c2" size={100} loading={loading} />
          </div>
        ) : (
          <div>
            <Header />
            <section className="pruebas">
                  <Form />
            </section>
          </div>
        )}
      </section>
    );
  } else {
    window.location.href = "/loginAdministrador";
  }
}
