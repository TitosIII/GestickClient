import Header from "../components/micro_components/Header.jsx";
import TableroCard from "../components/micro_components/TableroCard.jsx";
import Avatar from "../components/SoporteTECNICO/Admin/Avatar.jsx";
import Session from "react-session-api";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SupportWindow from "../components/SoporteTECNICO/Admin/Dueno/index.jsx";

export default function Tablero() {
  const [loading, setLoading] = useState(true);

  window.addEventListener("load", () => setLoading(false));
  console.log(loading);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
  }, []);

  if (Session.get("type") != 1) {
    window.location.href = "/loginAdministrador";
    console.log("a");
  } else {
    toast.success("Sesión Iniciada Correctamente");
    return (
      <section>
        <div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
        {loading ? (
          <div className="contenedorCarga">
            <ClockLoader color="#01a7c2" size={100} loading={loading} />
          </div>
        ) : (
          <section>
            <Header></Header>
            <section className="TablerosD">
              {/*<Avatar />*/}
              <TableroCard />
            </section>
          </section>
        )}
      </section>
    );
  }
}
