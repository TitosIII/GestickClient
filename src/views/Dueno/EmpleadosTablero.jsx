import Header from "../components/micro_components/Header";
import "../../../public/CSS/CSS_Gestick.css";
import "../../../public/CSS/CSS_Gestick.css";
import HeaderOpcionesAdmin from "../components/micro_components/HeaderOpcionesAdmin.jsx";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from "react";
import Session from "react-session-api";
import { deleteEmpleado, getEmp } from "../../api/gestick.api";

export default function EmpleadosTablero() {
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);

  async function updateData() {
    const {data} = await getEmp({ idAdmin: Session.get("id") });
    setTable(data);
  }

  useEffect(() => {
    updateData();
    if (document.readyState === "complete") {
      setLoading(false);
    }
  }, []);

  window.addEventListener("load", () => setLoading(false));
  console.log(loading);

  if (Session.get("type") == 1) {
    return (
      <section>
        {loading ? (
          <div className="contenedorCarga">
            <ClockLoader color="#01a7c2" size={100} loading={loading} />
          </div>
        ) : (
          <section>
            <Header></Header>
            <HeaderOpcionesAdmin />
            <section className="Tableros">
              {table.length === 0 ? (
                <h1>No tienes ningún empleado registrado.</h1>
              ) : (
                table.map((emp, i) => {
                  const idEmpleado = emp.idEmpleado;
                  return (
                    <div className="Servicio" key={i}>
                      <div className="cover">
                        <img src={emp.EmURLimg} alt="Sin Foto de Perfil." />
                        <div className="img_back"></div>
                      </div>
                      <div className="descripcion">
                        <h2>
                          {emp.EmNombre} {emp.EmApat} {emp.EmAmat}
                        </h2>
                        <a href={`/EditarEmpleado/${idEmpleado}`} className="saber-mas-E">
                          Editar
                        </a>
                        <button className="saber-mas-E"
                        onClick={()=>{deleteEmpleado({idEmpleado});setTimeout(updateData,300);}}>
                          Borrar
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </section>
          </section>
        )}
      </section>
    );
  } else {
    window.location.href = "/loginAdministrador";
  }
}
