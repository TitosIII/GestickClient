import { useEffect, useRef, useState } from "react";
import "../../../../public/CSS/CSS_Gestick.css";
import Header from "../../components/micro_components/Header.jsx";
import Camara from "../../components/micro_components/Camara.jsx";
import SearchComponent from "../../components/micro_components/SearchComponent";
import ClockLoader from "react-spinners/ClockLoader";
import Session from "react-session-api";
import { getProducts, procesSale } from "../../../api/gestick.api";
import ConfirmModal from "../../components/micro_components/ConfirmModal";

///Lista de productos en el carrito.
let codeCart = [];

function Cart() {
  if (Session.get("type") === undefined || Session.get("type") === null) {
    window.location.href = "/loginEmpleado";
  }

  const [carrito, setCarrito] = useState([]); ///Los productos seleccionados para vender.
  const [table, setTable] = useState([]); ///Los productos de la base de datos///
  const [warningMessage, setWarningMessage] = useState([]);

  const modal = useRef();
  const warningModal = useRef();

  ///Función para renderizar el carrito.
  function renderCart(obj, add) {
    carrito.splice(0, carrito.length);
    if (add) {
      codeCart.push(obj);
    } else {
      codeCart = codeCart.filter((item) => item.idProductos != obj.idProductos);
    }

    const cart = new Set();
    codeCart.forEach((item) => {
      cart.add(JSON.stringify(item));
    });

    cart.forEach((item) => {
      var quant = 0;
      const product = JSON.parse(item);
      codeCart.forEach((prod) => {
        quant += prod.idProductos === product.idProductos ? 1 : 0;
      });
      product.quant = quant;

      carrito.push(product);
    });

    setCarrito([...carrito]);
  }

  ///Función para calcular el precio total.
  function totalPrice() {
    var totalPrice = 0;
    codeCart.forEach((item) => {
      totalPrice += parseInt(item.PrPrecio);
    });
    const suma = totalPrice.toFixed(2);
    return suma;
  }

  ///Función para obtener las existencias de un producto que están en el carrito.
  function getExistences(id) {
    var total = 0;
    codeCart.forEach((item) => {
      total += item.idProductos === id ? 1 : 0;
    });
    return total;
  }

  ///Función para actualizar el carrito;
  async function updateData() {
    const { data } = await getProducts({
      idAdmin: Session.get(Session.get("type") == 1 ? "id" : "idAdmin"),
    });
    console.log(data);
    data.forEach((item, index) => {
      if (item.PrExistencias === 0) {
        data.splice(index, 1);
        data.splice(data.length, 0, item);
      }
    });
    setTable(data);
  }

  const sendSale = async () => {
    const { data } = await procesSale({
      carrito,
      total: totalPrice(),
      id: Session.get("id"),
      idAdmin: Session.get(Session.get("type") == 1 ? "id" : "idAdmin"),
    });
    if (data.error) {
      console.log(data.error);
      setWarningMessage(
        "Hubo un error en el servidor, vuelva a intentarlo más tarde."
      );
      warningModal.current.style.display = "flex";
    } else {
      console.log(data);
      codeCart.splice(0, codeCart.length);
      setCarrito([]);
      setTimeout(updateData, 30);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      <Header />
      <ConfirmModal
        title={"Confirmación de Compra"}
        message={"Dé click en 'Aceptar' para continuar."}
        option
        action={sendSale}
        modal={modal}
      />
      <ConfirmModal
        title={"Error"}
        message={warningMessage}
        modal={warningModal}
      />
      <div className="containerCarrito">
        <div className="row">
          <aside className="col-sm-4">
            <h2>Productos seleccionados</h2>

            <ul id="cart" className="list-group">
              {carrito.length === 0 ? (
                <h5>Selecciona los productos a vender.</h5>
              ) : (
                carrito.map((item) => (
                  <li
                    className="list-group-item text-right"
                    key={item.idProductos}
                  >
                    {item.PrNombre} X {item.quant} - ${item.PrPrecio}
                    <button
                      id="btnCarrito"
                      className="btn-remover"
                      onClick={() => {
                        renderCart(item, false);
                      }}
                    >
                      X
                    </button>
                  </li>
                ))
              )}
            </ul>

            <p className="text-right">
              Total: $<span id="total">{totalPrice()}</span>
            </p>

            <button
              id="btnCarrito"
              className="btn-sell"
              onClick={() => {
                if (carrito.length == 0) {
                  console.log(carrito.length);
                  setWarningMessage("No hay ningún producto en el carrito.");
                  warningModal.current.style.display = "flex";
                } else {
                  modal.current.style.display = "flex";
                }
              }}
              disabled={carrito.length <= 0}
            >
              Vender
            </button>
            <button
              id="btnCarrito"
              className="btn-delete"
              onClick={() => {
                codeCart.splice(0, codeCart.length);
                setCarrito([]);
              }}
            >
              Cancelar todo
            </button>
          </aside>

          <main id="items" className="col-sm-8 row">
            {table.length === 0 ? (
              <h1>No hay ningún producto registrado en el inventario</h1>
            ) : (
              <SearchComponent
                renderCart={renderCart}
                baseDeDatos={table}
                getExistences={getExistences}
              />
            )}
          </main>
          <aside>
            <div className="camara">
              <Camara />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Cart;
