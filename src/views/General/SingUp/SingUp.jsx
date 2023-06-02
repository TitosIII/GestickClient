import "../../../../public/CSS/CSS_Gestick.css";
import { Form, Formik } from "formik";
import { TextField } from "@mui/material";
import { createAdminRequest } from "../../../api/gestick.api";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAdmins } from "../../../context/adminsContext.jsx";
import ClockLoader from "react-spinners/ClockLoader";
import Footer from "../../components/micro_components/Footer";
import Session from "react-session-api";
import ConfirmModal from "../../components/micro_components/ConfirmModal";
import * as yup from "yup";

export default function SingUp() {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(0);

  const modal = useRef();

  window.addEventListener("load", () => setLoading(false));

  const [dato, setDato] = useState({
    AP: "",
    AM: "",
    Name: "",
    PW: "",
    AE: "",
  });

  const { getAdmin, updateAdmin } = useAdmins();
  const params = useParams();

  useEffect(() => {
    if (document.readyState == "complete") {
      setLoading(false);
    }
    const loadAdmin = async () => {
      if (params.idAdmin) {
        const respuestaAdmin = await getAdmin(params.idAdmin);
        setDato({
          AP: respuestaAdmin.AP,
          AM: respuestaAdmin.AM,
          Name: respuestaAdmin.Name,
          AE: respuestaAdmin.AE,
          PW: respuestaAdmin.PW,
        });
        console.log(respuestaAdmin);
      } else {
        console.log("No Me Estoy Ejecutando");
        console.log(params);
      }
    };
    loadAdmin();
  }, []);

  const checkoutSchema = yup.object().shape({
    AP: yup
      .string()
      .required("requerido")
      .min(3, `Ingresa Un Apellido Valido`)
      .max(45, `Tu Apellido Es Demasiado Largo`),
    AM: yup
      .string()
      .required("requerido")
      .min(3, `Ingresa Un Apellido Valido`)
      .max(45, `Tu Apellido Es Demasiado Largo`),
    Name: yup
      .string()
      .required("requerido")
      .min(3, `Ingresa Un Nombre Valido`)
      .max(45, `Tu Nombre Es Demasiado Largo`),
    PW: yup
      .string()
      .required("requerido")
      .min(8, `Ingresa Una Contraseña mayor a 8 caracteres valida`)
      .max(500, `Tu Contraseña Es Demasiada Larga`),
    AE: yup
      .string()
      .required("requerido")
      .email(`Ingresa Un Correo Electronico Valido`)
      .max(100, `Tu Dirección Es Demasiada Larga`),
  });

  return (
    <>
      {loading ? (
        <div className="contenedorCarga">
          <ClockLoader color="#01a7c2" size={100} loading={loading} />
        </div>
      ) : (
        <>
          <ConfirmModal
            title="Asignación de ID."
            message={`Su id es ${id}`}
            modal={modal}
            action={() => {
              window.location.href = "/Tablero";
            }}
          />
          <section className="contact-box">
            <div className="row no-gutters bg-dark">
              <div className="col-xl-5 col-lg-12 register-bg">
                <div className="position-absolute testiomonial p-4">
                  <h3 className="font-weight-bold text-light">
                    Crea Tus Propio Inventario Y Punto De Venta
                  </h3>
                  <p className="lead text-light">
                    Organiza tus Empleados y tiempo
                  </p>
                </div>
              </div>
              <div className="col-xl-7 col-lg-12 d-flex">
                <div className="container align-self-center p-6">
                  <h1 id="registroH1" className="font-weight-bold mb-3">
                    {params.id
                      ? "Edita Administradores"
                      : "Crea tu cuenta gratis"}
                  </h1>
                  <p className="text-muted mb-5">
                    {params.idAdmin
                      ? "Ingrea La Siguiente Información Para Editar Administrador"
                      : "Ingresa La Siguiente Información Para Registrarte"}
                  </p>
                  <Formik
                    initialValues={dato}
                    enableReinitialize={true}
                    validationSchema={checkoutSchema}
                    onSubmit={async (values) => {
                      console.log(values);

                      if (params.id) {
                        updateAdmin(params.id, values);
                        window.location.href =
                          "/TitosChampionsSonicAdrianJoshuaGael";
                      } else {
                        try {
                          const { data } = await createAdminRequest(values);
                          console.log(data);

                          if (data.error) {
                            console.log(data.error);
                          } else if (data.message) {
                            setId(data.idAdmin);
                            Session.set("type", 1);
                            Session.set("id", data.idAdmin);
                            Session.set("nombre", values.Name);
                            Session.set("appat", values.AP);
                            Session.set("apmat", values.AM);
                            Session.set("password", values.PW);

                            console.log(data.message);
                            modal.current.style.display = "flex";
                          }
                        } catch (error) {
                          console.log(error);
                        }
                      }
                    }}
                  >
                    {({ handleChange, handleSubmit, handleBlur, touched, errors, isSubmitting }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="form-row mb-2">
                          <div className="form-group col-md-6">
                            <label className="font-weight-bold">
                              Apellido Paterno{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <TextField
                              type="text"
                              className="form-control"
                              placeholder="Tu Apellido Paterno"
                              id="AP"
                              name="AP"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={!!touched.AP && !!errors.AP}
                              helperText={touched.AP && errors.AP}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label className="font-weight-bold">
                              Apellido Materno{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <TextField
                              type="text"
                              className="form-control"
                              placeholder="Tu Apellido Materno"
                              id="AM"
                              name="AM"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={!!touched.AM && !!errors.AM}
                              helperText={touched.AM && errors.AM}
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <label className="font-weight-bold">
                            Nombre(s)<span className="text-danger">*</span>
                          </label>
                          <TextField
                            type="text"
                            className="form-control"
                            placeholder="Ingresa tu(s) nombre(s)"
                            id="Name"
                            name="Name"
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.Name && !!errors.Name}
                            helperText={touched.Name && errors.Name}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label className="font-weight-bold">
                            Email <span className="text-danger">*</span>
                          </label>
                          <TextField
                            type="email"
                            className="form-control"
                            placeholder="Ingresa tu correo Electronico"
                            id="AE"
                            name="AE"
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.AE && !!errors.AE}
                            helperText={touched.AE && errors.AE}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label className="font-weight-bold">
                            Contraseña <span className="text-danger">*</span>
                          </label>
                          <TextField
                            type="password"
                            className="form-control"
                            placeholder="Ingresa una contraseña"
                            id="PW"
                            name="PW"
                            required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!touched.PW && !!errors.PW}
                            helperText={touched.PW && errors.PW}
                          />
                        </div>
                        <div className="form-group mb-5">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              required
                            />
                            <label className="form-check-label text-muted">
                              Al seleccionar esta casilla aceptas nuestro{" "}
                              <a href="#" className="terms__cta">
                                aviso de privacidad y los términos y condiciones
                              </a>
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary width-100"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? "Cargando"
                            : `${params.idAdmin ? "Editar" : "Registrarse"}`}
                        </button>
                      </Form>
                    )}
                  </Formik>
                  <small className="d-inline-block text-muted mt-5">
                    Todos Los Derechos Reservados | © GESTICK 2022{" "}
                  </small>
                </div>
              </div>
            </div>
          </section>
          <section className="modal ">
            <div className="modal__container">
              <div className="part_container">
                <h2 className="modal__title">Terminos y Condiciones</h2>
              </div>
              <hr />
              <div className="part_container">
                <p className="modal__paragraph">
                  GESTICK es una web para papelerías, creada por GESTICK Team,
                  antes de acceder a ella debes saber que tendrás que llenar un
                  formulario con datos básicos, además para usar la página DEBES
                  PERMITIR el acceso automático a la cámara y la galería
                  fotográfica de tu dispositivo. Todos los productos ofrecidos
                  en la aplicación tienen un costo que deberá cancelar
                  electrónicamente en el caso de desear adquirirlos.
                </p>
              </div>
              <a href="#" className="modal__close">
                Aceptar terminos y condiciones
              </a>
            </div>
          </section>
          <section className="modal">
            <div className="modal__container">
              <div className="part_container">
                <h2 className="modal__title">Terminos y Condiciones</h2>
              </div>
              <hr />
              <div className="part_container">
                <p className="modal__paragraph">
                  GESTICK es una web para papelerías, creada por GESTICK Team,
                  antes de acceder a ella debes saber que tendrás que llenar un
                  formulario con datos básicos, además para usar la página DEBES
                  PERMITIR el acceso automático a la cámara y la galería
                  fotográfica de tu dispositivo. Todos los productos ofrecidos
                  en la aplicación tienen un costo que deberá cancelar
                  electrónicamente en el caso de desear adquirirlos.
                </p>
              </div>
              <a>Aceptar terminos y condiciones</a>
            </div>
          </section>
          <script src="JS/modal-term-cond.js" />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossOrigin="anonymous"
          />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossOrigin="anonymous"
          />
        </>
      )}
      <div className="FooterEmpleado">
        {" "}
        <Footer />
      </div>
    </>
  );
}
