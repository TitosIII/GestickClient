import React, { useState } from "react";
import "../../../../public/CSS/CSS_Gestick.css";

const SearchComponent = ({ baseDeDatos, renderCart, getExistences }) => {
  //setear los hooks useState
  const [search, setSearch] = useState("");

  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado 2
  const results = !search
    ? baseDeDatos
    : baseDeDatos.filter((dato) =>
        dato.PrNombre.toLowerCase().includes(search.toLocaleLowerCase())
      );

  //renderizamos la vista
  return (
    <>
      <div className="buscar2">
        <input
          className="Buscador"
          type="text"
          placeholder="Buscar"
          onChange={searcher}
        />
      </div>
      {results.map(
        ({ PrURLimg, PrNombre, PrPrecio, PrExistencias, idProductos }) => (
          <div className="cardCarrito col-sm-4" key={idProductos}>
            <div className="cardCarrito-body">
              <img className="img-fluid" src={PrURLimg} />
              <h6 className="cardCarrito-title">{PrNombre}</h6>
              <p className="cardCarrito-text">${PrPrecio}</p>
              {PrExistencias === 0 ? (
                <p className="cardCarrito-text">Sin Existencias</p>
              ) : (
                <p className="cardCarrito-text">Existencias: {PrExistencias}</p>
              )}
              <button
                id="btnCarrito"
                className="btn-buy"
                key={idProductos}
                onClick={() => {
                  renderCart({ idProductos, PrNombre, PrPrecio }, true);
                }}
                disabled={PrExistencias <= getExistences(idProductos)}
              >
                +
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default SearchComponent;
