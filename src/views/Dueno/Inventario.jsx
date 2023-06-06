import Header from "../components/micro_components/Header";
import "../../../public/CSS/CSS_Gestick.css";
import CardsProducto from "../components/micro_components/CardsProducto";
import HeaderOpcionesAdmin from "../components/micro_components/HeaderOpcionesAdmin";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useRef, useState } from "react";
import Session from "react-session-api";
import { deleteProduct, getProducts } from "../../api/gestick.api";
import ConfirmModal from "../components/micro_components/ConfirmModal";

export default function Inventario() {
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);

  const deleteModal = useRef();
  let idProductToDel;

  const updateData = () => {
    getProducts({ idAdmin: Session.get("id") }).then((results) => {
      setTable(results.data);
      console.log(results.data);
    });
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
    updateData();
  }, []);

  window.addEventListener("load", () => setLoading(false));
  console.log(loading);

    return (
      <>
        {loading ? (
          <div className="contenedorCarga">
            <ClockLoader color="#01a7c2" size={100} loading={loading} />
          </div>
        ) : (
          <>
            <ConfirmModal
              title={"Confirmación."}
              message={
                "¿Está seguro de borrar el Producto?. Está acción no se puede deshacer."
              }
              option
              modal={deleteModal}
              action={() => {
                deleteProduct({ idProductos: idProductToDel });
                setTimeout(updateData, 150);
              }}
            />
            <Header />
            <HeaderOpcionesAdmin />
            <section className="cardscontainer">
              {table.length == 0 ? (
                <h1>No hay productos registrados.</h1>
              ) : (
                table.map((row) => (
                  <div className="product">
                    <div className="image">
                      <img src={row.PrURLimg} alt="" />
                    </div>
                    <div className="namePrice">
                      <h4>{row.PrNombre}</h4>
                      <span>$ {row.PrPrecio}</span>
                    </div>
                    <p>Descripción Del Producto:</p>
                    <div className="stars">
                      <p>
                        Existencias: <span>{row.PrExistencias}</span>
                      </p>
                    </div>
                    <div className="stars">
                      <button
                        className="saber-mas-P"
                        href={`/EditarProducto/${row.idProductos}`}
                      >
                        Editar
                      </button>
                      <button
                        className="saber-mas-P"
                        onClick={() => {
                          idProductToDel = row.idProductos;
                          deleteModal.current.style.display = "flex";
                        }}
                      >
                        Borrar
                      </button>
                    </div>
                  </div>
                ))
              )}
            </section>
          </>
        )}
      </>
    );
 
}
