import { UserProduct } from "../../../public/JS/Data.js";
import Header from "../components/micro_components/Header";
import Dashboard from "../components/micro_components/Dashboard";
import { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Session from "react-session-api";
import Footer from "../components/micro_components/Footer.jsx";
import FooterDueno from "../components/micro_components/FooterDueno.jsx";
import {dashboardDUENNO} from "../../api/gestick.api.js"

export default function EstadoGeneralAdmin() {
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState({anno:0,mes:0,dia:0,productosVendidosACTUALES:0,porcentajeVENTAACTUAL:0,totalactual:0, porcentajeACTUAL:0, gananciasACTUALES:0,dataLINE:[],historialCARRITO:[]});

  useEffect(() => {
    dashboardDUENNO({ idAdmin: Session.get("id") }).then((results) => {
      setTable(results.data);
      console.log(results.data);
    });

    if (document.readyState === "complete") {
      setLoading(false);
    }
  }, [])

    window.addEventListener("load", () => setLoading(false));
    console.log(loading);

  const [userProduct, setUserProduct] = useState({
    labels: UserProduct.map((data) => data.Productos_idProductos),
    datasets: [
      {
        label: "Ventas",
        data: UserProduct.map((data) => data.CantidadVendida),
      },
    ],
  });

  if (Session.get("type") == 1) {
  return (
    <section>
      {loading ? (
        <div className="contenedorCarga">
          <ClockLoader color="#01a7c2" size={100} loading={loading} />
        </div>
      ) : (
        <section>
          <Header />
          <section className="Tableros-General">
            <Dashboard results = {table}/>
          </section>
        </section>
      )}
      <div className="FooterDueno"><FooterDueno /></div>
    </section>
  );}
  else {
    window.location.href = "/loginAdministrador";
  }

}
