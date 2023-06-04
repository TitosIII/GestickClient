import HeaderPro from "../components/micro_components/HeaderPro.jsx";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from "react";
import Session from "react-session-api";
import CamaraP from "../components/micro_components/Scanner/CamaraP.jsx";
import { Formik } from "formik";
import { addProduct, getAProduct, uploadImage } from "../../api/gestick.api.js";
import Uploader from "../components/micro_components/Uploader.jsx";
import { useParams } from "react-router-dom";
import { getTradeMark } from "../../api/gestick.api.js";
import { modifyProduct } from "../../api/gestick.api.js";
import * as yup from "yup";
import { Box, Button, TextField, Autocomplete } from "@mui/material";

export default function Productos() {
  const { idProduct } = useParams();
  const [loading, setLoading] = useState(true);
  const [tradeMarkList, setTradeMarkList] = useState([]);
  const [initialValues, setInitialValues] = useState({
    name: "",
    desc: "",
    status: true,
    type: "",
    price: 0,
    tradeMark: 1,
    exis: 0,
    img: undefined,
    code: "",
    idAdmin: Session.get("id"),
  });

  window.addEventListener("load", () => setLoading(false));

  async function handleFormSubmit(values) {
    console.log(values);
    const data = new FormData();
    data.append("file", values.img);
    data.append("upload_preset", "gestick");
    var response;
    try {
      if (idProduct) {
        if (values.img != initialValues.img) {
          const res = await uploadImage(data);
          values.img = res.data.secure_url;
        }
        response = await modifyProduct(values);
      } else {
        const res = await uploadImage(data);
        values.img = res.data.secure_url;
        response = await addProduct(values);
      }

      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log(response.data);

        window.location.href = "/InventarioProductos";
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }

    getTradeMark().then((results) => {
      setTradeMarkList(results.data);
    });

    getAProduct({ idProduct }).then(({ data }) =>
      setInitialValues({
        idP: idProduct,
        name: data.PrNombre,
        desc: data.PrDescripcion,
        type: data.Categoria_idCategoria,
        price: data.PrPrecio,
        tradeMark: data.Marca_idMarca,
        exis: data.PrExistencias,
        img: data.PrURLimg,
        idAdmin: Session.get("id"),
      })
    );
  }, []);

  const checkoutSchema = yup.object().shape({
    idAdmin: yup
      .string()
      .required("Campo Obligatorio")
      .min(6, `Ingresa Un ID Completo`)
      .max(6, `Ingresa Un ID De 6 Digitos`),
    password: yup
      .string()
      .required("Campo Obligatorio")
      .min(8, `Ingresa Más De 7 Digitos`)
      .max(150, `Ingresa Una Contraseña Valida`),
  });

  if (Session.get("type") == 1) {
    return (
      <>
        {loading ? (
          <div className="contenedorCarga">
            <ClockLoader color="#01a7c2" size={100} loading={loading} />
          </div>
        ) : (
          <div>
            <HeaderPro />

            <Formik
              enableReinitialize
              initialValues={initialValues}
              onSubmit={handleFormSubmit}
            >
              {({
                values,
                setFieldValue,
                handleSubmit,
                handleChange,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="idAdmin"
                    value={Session.get("id")}
                  />
                  <div className="InformacionPro">
                    <div className="NavProductoInfo">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TituloContenedorPropiedadesDelProducto"
                      >
                        Propiedades del producto{" "}
                      </label>
                      <div className="nombreProductoContent">
                        <label
                          htmlFor="NombreProducto"
                          className="TITULONOMBRE"
                        >
                          Nombre Del Producto:{" "}
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="NombreProducto"
                          className="form-control-P"
                          placeholder="Ejemplo: Pan Con Queso Y Aderezo"
                          value={values.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="DescripcionProContenedor">
                        <div className="form-group">
                          <label
                            htmlFor="DescripcionPro"
                            className="TITULONOMBRE"
                          >
                            Descripción Del Producto:{" "}
                          </label>
                          <textarea
                            style={{ resize: "none" }}
                            className="form-control-P"
                            name="desc"
                            id="DescripcionPro"
                            rows="3"
                            placeholder="Ejemplo: Este Producto Se Tiene Que Entregar En Condiciones Especificas"
                            value={values.desc}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="EstadoDelProducto">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TituloContenedorPropiedadesDelProducto"
                      >
                        Caracteristicas del producto
                      </label>
                      <div className="nombreProductoContentSelect">
                        <label
                          htmlFor="TituloEstadoDelProducto"
                          className="TITULONOMBRE"
                        >
                          Estado Del Producto:{" "}
                        </label>
                        <div className="selectBonito">
                          <select
                            name="status"
                            id="EstadoDelProducto"
                            value={values.status}
                            onChange={handleChange}
                          >
                            <option value={true}>Activo</option>
                            <option value={false}>Inactivo</option>
                          </select>
                        </div>
                      </div>
                      <div className="nombreProductoContent">
                        <label
                          htmlFor="TituloEstadoDelProducto"
                          className="TITULONOMBRE"
                        >
                          Precio:{" "}
                        </label>
                        <input
                          type="number"
                          className="form-control-P"
                          name="price"
                          id="ExistenciasPro"
                          aria-describedby="PrecioVentaHelp"
                          min="1"
                          placeholder="Precio"
                          value={values.price}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="ElementosMultimedia">
                      <div className="nombreProductoContent">
                        <label
                          htmlFor="TituloEstadoDelProducto"
                          className="TituloContenedorPropiedadesDelProducto"
                        >
                          Elementos multimedia
                        </label>
                        <div className="contenedroAgregar">
                          <Uploader
                            {...{ values, setFieldValue, initialValues }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="OrganizacionDelProducto">
                      <div className="ContenedorOrganizacionDelProducto">
                        <label
                          htmlFor="TituloEstadoDelProducto"
                          className="TituloContenedorPropiedadesDelProductoO"
                        >
                          Organizacion del producto{" "}
                        </label>
                      </div>
                      <div className="CategoriaDelProducto ">
                        <label
                          for="TituloEstadoDelProducto"
                          className="TITULONOMBREO"
                        >
                          Categoria:{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control-P"
                          name="type"
                          id="ExistenciasPro"
                          aria-describedby="PrecioVentaHelp"
                          placeholder="Ejemplo: Papeleria"
                          value={values.type}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="PrecioVentaContenedor">
                        <label
                          for="TituloEstadoDelProducto"
                          className="TITULONOMBREO"
                        >
                          Marca:{" "}
                        </label>

                        <select
                          type="text"
                          className="form-control-P"
                          name="tradeMark"
                          id="ExistenciasPro"
                          aria-describedby="PrecioVentaHelp"
                          placeholder="Ejemplo: Pelikan"
                          defaultValue={idProduct ? initialValues.tradeMark : 1}
                          value={values.tradeMark}
                          onChange={handleChange}
                        >
                          <option selected="true" disabled="disabled">
                            Seleccione Marca
                          </option>
                          {tradeMarkList.map((row) => (
                            <option value={row.idMarca}>{row.MarNombre}</option>
                          ))}
                        </select>
                      </div>
                      <div className="PrecioVentaContenedor">
                        <label
                          for="TituloEstadoDelProducto"
                          className="TITULONOMBREO"
                        >
                          Existencias:{" "}
                        </label>
                        <input
                          type="number"
                          className="form-control-P"
                          name="exis"
                          id="ExistenciasPro"
                          aria-describedby="PrecioVentaHelp"
                          min="0"
                          placeholder="Ejemplo: 2"
                          value={values.exis}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="CamaraPaginaProducto">
                      <div className="ProductCamara">
                        <label
                          htmlFor="TituloEstadoDelProducto"
                          className="TituloContenedorPropiedadesDelProductoO"
                        >
                          Codigo de Barras
                        </label>
                        <input
                          type="text"
                          className="form-control-P"
                          name="code"
                          id="code"
                          aria-describedby="PrecioVentaHelp"
                          min="0"
                          placeholder="00000000"
                          value={values.code}
                          onChange={handleChange}
                          disabled
                        />
                        <CamaraP {...{ setFieldValue }} />
                      </div>
                    </div>
                    <div className="BotonesProducto">
                      <button
                        className="BotonCrearProducto"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <span>
                          {idProduct
                            ? isSubmitting
                              ? "Cargando..."
                              : "Editar"
                            : idProduct
                            ? "Cargando..."
                            : "Registrar"}
                        </span>
                      </button>
                      <button className="BotonCancelarProducto">
                        {" "}
                        <span>Cancelar</span>{" "}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        )}
      </>
    );
  } else {
    window.location.href = "/loginAdministrador";
  }
}
