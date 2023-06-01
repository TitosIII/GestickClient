import { useRef, useEffect, useState } from "react";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import { logEmp } from "../../../../api/gestick.api";
import Session from "react-session-api";
import ClockLoader from "react-spinners/ClockLoader"
import toast, { Toaster } from "react-hot-toast"
import Footer from "../../../components/micro_components/Footer";

export default function LoginEmpleado() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
  }, [])

  window.addEventListener("load", () => setLoading(false));
  console.log(loading);

  const [message, setMessage] = useState("");

  const showModal = (event) => {
    const modal = document.querySelector(".modal");
    modal.classList.add("modal--show");
  };

  const closeModal = (event) => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal--show");
  };

  const checkoutSchema = yup.object().shape({
    idEmp: yup.string().required("Campo Obligatorio").min(6, `Ingresa Un ID Completo`).max(6, `Ingresa Un ID De 6 Digitos`),
    password: yup.string().required("Campo Obligatorio").min(8, `Ingresa Más De 7 Digitos`).max(150, `Ingresa Una Contraseña Valida`),
  });

  return (
    <section id="login">
      <div><Toaster
        position="bottom-right"
        reverseOrder={false}
      /></div>
      {
        loading ?
          <div className="contenedorCarga">
            <ClockLoader
              color="#01a7c2"
              size={100}

              loading={loading}
            />
          </div>

          :

          <section>
            <div className="login-root">
              <div className="box-root flex-flex flex-direction--column" id="primero">
                <div className="loginbackground box-background--white padding-top--64">
                  <div className="loginbackground-gridContainer">
                    <div className="box-root flex-flex" id="segundo">
                      <div className="box-root" id="tercero"></div>
                    </div>
                    <div className="box-root flex-flex" id="cuarto">
                      <div
                        className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                        id="quinto"
                      ></div>
                    </div>
                    <div className="box-root flex-flex" id="sexto">
                      <div
                        className="box-root box-background--blue800"
                        id="quinto"
                      ></div>
                    </div>
                    <div className="box-root flex-flex" id="septimo">
                      <div
                        className="box-root box-background--blue animationLeftRight"
                        id="quinto"
                      ></div>
                    </div>
                    <div className="box-root flex-flex" id="octavo">
                      <div
                        className="box-root box-background--gray100 animationLeftRight tans3s"
                        id="quinto"
                      ></div>
                    </div>
                    <div className="box-root flex-flex" id="noveno">
                      <div
                        className="box-root box-background--cyan200 animationRightLeft tans4s"
                        id="quinto"
                      ></div>
                    </div>
                    <div className="box-root flex-flex" id="decimo">
                      <div
                        className="box-root box-background--blue animationRightLeft"
                        id="quinto"
                      ></div>
                    </div>
                    <div className="box-root flex-flex" id="oonceavo">
                      <div
                        className="box-root box-background--gray100 animationRightLeft tans4s"
                        id="quinto"
                      ></div>
                    </div>
                    <div className="box-root flex-flex" id="doceavo">
                      <div
                        className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                        id="quinto"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  className="box-root padding-top--24 flex-flex flex-direction--column"
                  id="trece"
                >
                  <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                    <h1 id="h1Login">
                      <a
                        id="linksLogin"
                        href="/"
                        rel="dofollow"
                      >
                        GESTICK
                      </a>
                    </h1>
                  </div>
                  <div className="formbg-outer">
                    <div className="formbg">
                      <div className="formbg-inner padding-horizontal--48">
                        <span id="spanLogin" className="padding-bottom--15">
                          Iniciar sesion empleado
                        </span>
                        <Formik
                          validationSchema={checkoutSchema}
                          initialValues={{
                            idEmp: null,
                            password: null,
                          }}

                          onSubmit={async (values) => {
                            console.log(values);
                            setMessage("");
                            try {
                              const { data } = await logEmp(values);
                              console.log(data);
                              if (data.error) {
                                setMessage(data.error);
                                toast.error("Datos Incorrectos");
                              } else {
                                Session.set("type", 2);
                                Session.set("id", data.idEmpleado);
                                Session.set("nombre", data.EmNombre);
                                Session.set("appat", data.EmApat);
                                Session.set("apmat", data.EmAmat);
                                Session.set("password", data.EmContrasenna);
                                Session.set("idAdmin", data.Admin_idAdmin);
                                window.location.href = "/Carrito";
                              }
                            } catch (err) {
                              console.log(err);
                              setMessage("Hubo un error en el servidor. Vuelva a intentarlos más tarde");
                              toast.error("Error En El Servidor")
                            }
                            return values;
                          }}
                        >
                          {({ values,
                            errors,
                            touched,
                            isSubmitting,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            setFieldValue }) => (

                            <Form onSubmit={handleSubmit}>
                              <div className="field padding-bottom--24">
                                <label id="labelLogin" htmlFor="id">
                                  ID Empleado O Nombre De Usuario
                                </label>
                                <TextField fullWidth type="idEmp" name="idEmp" id="idEmp" onChange={handleChange} onBlur={handleBlur} error={!!touched.idEmp && !!errors.idEmp} helperText={touched.idEmp && errors.idEmp} />
                              </div>
                              <div className="field padding-bottom--24">
                                <div className="grid--50-50">
                                  <label id="labelLogin" htmlFor="password">
                                    Contraseña
                                  </label>
                                </div>
                                <TextField fullWidth onChange={handleChange} onBlur={handleBlur} error={!!touched.password && !!errors.password} helperText={touched.password && errors.password}
                                  type="password"
                                  name="password"
                                  id="password"
                                />
                              </div>
                              <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                {message}
                              </div>
                              <div className="field padding-bottom--24">
                                <button className="button" type="submit" disabled={isSubmitting}>
                                  <span id="spanLoginE">{isSubmitting ? "Cargando..." : "Ingresar"}</span>
                                </button>
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>
                    </div>
                    <div className="footer-link padding-top--24">
                      <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                        <span id="spanLogin">
                          <a id="linksLogin" href="/loginAdministrador">
                            ¿Eres Administrador?
                          </a>
                        </span>
                        <span id="spanLogin">
                          <a
                            id="linksLogin"
                            href="#"
                            className="terms__cta"
                            onClick={showModal}
                          >
                            Terminos y Condiciones
                          </a>
                        </span>
                      </div>
                      <div className="FooterEmpleado"><Footer /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section className="modal">
              <div className="modal__container">
                <div className="part_container">
                  <h2 className="modal__title">Terminos y Condiciones</h2>
                </div>
                <hr />
                <div className="part_container">
                  <p className="modal__paragraph">
                    Términos y condiciones del sitio web de punto de venta y gestión
                    de inventarios Bienvenido al sitio web de punto de venta y gestión
                    de inventarios para pequeñas empresas. Este sitio web es propiedad
                    de GESTICK, en adelante "nosotros" o "nuestro". Al utilizar
                    nuestro sitio web, aceptas cumplir con estos términos y
                    condiciones ("Términos y Condiciones"). Si no estás de acuerdo con
                    estos términos y condiciones, no utilices nuestro sitio web. Uso
                    del sitio web 1.1 El objetivo de nuestro sitio web es proporcionar
                    una plataforma de punto de venta y gestión de inventarios en línea
                    para pequeñas empresas. Solo puedes utilizar nuestro sitio web con
                    fines legales y de acuerdo con estos términos y condiciones. 1.2
                    No podrás utilizar nuestro sitio web de ninguna manera que pueda
                    dañar, desactivar, sobrecargar o afectar de cualquier otra forma
                    nuestro sitio web o los servidores y redes conectados a nuestro
                    sitio web. 1.3 No podrás intentar obtener acceso no autorizado a
                    ninguna parte de nuestro sitio web, otras cuentas, sistemas
                    informáticos o redes conectados a nuestro sitio web mediante
                    hacking, extracción de contraseñas o cualquier otro medio. 1.4 Nos
                    reservamos el derecho de restringir, suspender o cancelar tu
                    acceso a nuestro sitio web si violas estos términos y condiciones
                    o cualquier ley aplicable. Registro y cuentas 2.1 Para utilizar
                    nuestro sitio web, deberás crear una cuenta. Es tu responsabilidad
                    proporcionar información precisa y actualizada al registrarte y
                    mantener la seguridad de tu cuenta y contraseña. 2.2 Eres
                    responsable de todas las actividades que se realicen en tu cuenta
                    y aceptas notificarnos de inmediato si sospechas que alguien ha
                    obtenido acceso no autorizado a tu cuenta. 2.3 Nos reservamos el
                    derecho de cancelar tu cuenta en cualquier momento y por cualquier
                    motivo, incluyendo si consideramos que has violado estos términos
                    y condiciones o cualquier ley aplicable. Propiedad intelectual 3.1
                    Nuestro sitio web y todo el contenido y la información en él,
                    incluyendo, entre otros, marcas, diseños, logotipos, textos,
                    gráficos, imágenes, software y código, están protegidos por las
                    leyes de propiedad intelectual y son propiedad de nosotros o de
                    nuestros licenciantes. 3.2 No podrás utilizar, copiar, reproducir,
                    modificar, publicar, transmitir, distribuir, realizar trabajos
                    derivados, vender o explotar de otra manera cualquier contenido o
                    información de nuestro sitio web sin nuestro consentimiento previo
                    por escrito.
                  </p>
                </div>
                <a href="#" className="modal__close" onClick={closeModal}>
                  Aceptar terminos y condiciones
                </a>
              </div>
            </section>
          </section>
      }


    </section>
  );
}