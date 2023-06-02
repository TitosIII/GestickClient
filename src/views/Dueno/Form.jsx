import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import Uploader from "../components/micro_components/Uploader";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  getAnEmp,
  modifyEmp,
  signEmp,
  uploadImage,
} from "../../api/gestick.api";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Session from "react-session-api";
import ConfirmModal from "../components/micro_components/ConfirmModal";

const Form = () => {
  const { idEmpleado } = useParams();
  const [id, setId] = useState(0);
  const [password, setPassword] = useState("");
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastNameP: "",
    lastNameM: "",
    address1: "",
    address2: "",
    img: undefined,
    idAdmin: Session.get("id"),
  });

  const modal = useRef();

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("requerido"),
    lastNameP: yup.string().required("requerido"),
    lastNameM: yup.string().required("requerido"),
    address1: yup.string().required("requerido"),
    address2: yup.string().required("requerido"),
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    var response = {};
    try {
      if (idEmpleado) {
        values.id = parseInt(idEmpleado);
        if (values.img != initialValues.img) {
          const data = new FormData();
          data.append("file", values.img);
          data.append("upload_preset", "gestick");
          const res = await uploadImage(data);
          console.log(res.data.secure_url);
          values.img = res.data.secure_url;
        }
        response = await modifyEmp(values);
      } else {
        const data = new FormData();
        data.append("file", values.img);
        data.append("upload_preset", "gestick");
        const res = await uploadImage(data);
        console.log(res.data.secure_url);
        values.img = res.data.secure_url;
        response = await signEmp(values);
      }

      if (response.data.error) {
        console.log(response.data.error);
      } else if (response.data.id) {
        console.log(response.data);
        setId(response.data.id);
        setPassword(response.data.aleatoria);
        modal.current.style.display = "flex";
      } else {
        window.location.href = "/Empleados";
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (idEmpleado) {
      getAnEmp({ idEmpleado }).then(({ data }) => {
        setInitialValues({
          firstName: data.EmNombre,
          lastNameP: data.EmApat,
          lastNameM: data.EmAmat,
          address1: data.EmDireccion1,
          address2: data.EmDireccion2,
          img: data.EmURLimg,
          idAdmin: Session.get("idAdmin"),
        });
      });
    }
  }, []);

  return (
    <>
      <ConfirmModal
        title={"Asignación de ID y contraseña del empleado."}
        message={`Id: ${id} \n Contraseña: ${password}`}
        action={() => {
          window.location.href = "/Empleados";
        }}
        modal={modal}
      />
      <Formik
        enableReinitialize
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                  <Uploader {...{ values, setFieldValue, initialValues }} />
                </td>
                <td>
                  <Box className="formulario-Producto">
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                        "& > div": {
                          gridColumn: isNonMobile ? undefined : "span 4",
                        },
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Nombre(s)"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        name="firstName"
                        error={!!touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        sx={{ gridColumn: "span 4" }}
                      />
                      <input
                        type="hidden"
                        value={values.idAdmin}
                        name="idAdmin"
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Apellido Paterno"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastNameP}
                        name="lastNameP"
                        error={!!touched.lastNameP && !!errors.lastNameP}
                        helperText={touched.lastNameP && errors.lastNameP}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Apellido Materno"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastNameM}
                        name="lastNameM"
                        error={!!touched.lastNameM && !!errors.lastNameM}
                        helperText={touched.lastNameM && errors.lastNameM}
                        sx={{ gridColumn: "span 2" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Dirección 1"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address1}
                        name="address1"
                        error={!!touched.address1 && !!errors.address1}
                        helperText={touched.address1 && errors.address1}
                        sx={{ gridColumn: "span 4" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Dirección 2"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address2}
                        name="address2"
                        error={!!touched.address2 && !!errors.address2}
                        helperText={touched.address2 && errors.address2}
                        sx={{ gridColumn: "span 4" }}
                      />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                      <Button type="submit" color="primary" variant="contained">
                        {idEmpleado
                          ? "Editar Empleado."
                          : "Crear Nuevo Empleado"}
                      </Button>
                    </Box>
                  </Box>
                </td>
              </tr>
            </table>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
