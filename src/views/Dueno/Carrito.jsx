import { useParams } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from "react";
import { ventas } from "../../api/gestick.api";
import { Formik } from "formik";

const Carrito = () => {


    const { idCarrito } = useParams();
    //const [loading, setLoading] = useState(true);

    /*const [initialValues, setInitialValues] = useState({
        EmName: "",
        EmAppat: "",
        EmApmat: "",
        idC: "",
        fecha: ""
      });*/

    /*useEffect(() => {
        if (document.readyState === "complete") {
            setLoading(false);
        }

        
    }, []);
*/
return (
    <>
        <div className="contenedorCarritoDesEmp">
           <div className="imgDesEmp">
           
           </div>
           <div className="datDesEmp">
           <div  className="ProDesEmp">
           <div className="idtitDesEmp">Nombre(s):</div>
           <div className="idnumDesEmp">Juan</div>
           </div>
           <div  className="ProDesEmp">
           <div className="idtitDesEmp">Apellido Paterno:</div>
           <div className="idnumDesEmp">Martinez</div>
           </div>
           <div  className="ProDesEmp">
           <div className="idtitDesEmp">Apellido Materno:</div>
           <div className="idnumDesEmp">Juarez</div>
           </div>
           </div>
           <div className="ticDesEmp">
            <div className="buttonDesEmp">
                <span>Imprimir ticket</span>
            </div>
            <div className="buttonDesEmp2">
                <span>Ver empleado</span>
            </div>
           </div>
           <div className="contenidoCarritoDesEmp">
           <div className="titDesEmp">
           <div className="idDesEmp">
            <div className="idtitDesEmp">Id carrito:</div>
            <div className="idnumDesEmp">21326t4182</div>
            </div>
           <div className="feDesEmp">
           <div className="fetitDesEmp">Fecha:</div>
            <div className="fenumDesEmp">21/05/2023</div>
           </div>
           
           </div>
           <div className="ProListDesEmp">
           <div  className="ProDesEmp">
           <div className="nompDesEmp">nombre del producto</div>
            <div className="imgpDesEmp">imagen</div>
            <div className="fepDesEmp">fecha</div>
            <div className="prepDesEmp">precio</div>
            <div className="canpDesEmp">cantidad</div>
            <div className="totDesEmp">total</div>
            
           </div>
           </div>
           <div className="ProListDesEmp">
           <div  className="ProDesEmp">
           <div className="connompDesEmp">poner nombre</div>
            <div className="conimgpDesEmp">poner imagen</div>
            <div className="confepDesEmp">poner fecha</div>
            <div className="conprepDesEmp">poner precio</div>
            <div className="concanpDesEmp">poner cantidad</div>
            <div className="contotDesEmp">poner total</div>
            
           </div>
           </div>
           <div className="totalDesEmp">Precio total 15$</div>
           
           </div>
           
        </div>
    </>
);
}

export default Carrito;
