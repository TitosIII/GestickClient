import { useParams } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import { useState, useEffect } from "react";
import { ventas } from "../../api/gestick.api";

const Carrito = () => {


    const { idCarrito } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === "complete") {
            setLoading(false);
        }

        ventas({ idCarrito }).then(({ data, data2}) =>
            setInitialValues({
                idC: idCarrito,
                fecha: data2.CarFecha,
            })
        );
    }, []);

return (
    <>
        {loading ? (

            <div className="contenedorCarga">
                <ClockLoader color="#01a7c2" size={100} loading={loading} />
            </div>
        ) : (

            <div>
                <h1>Aqui va el carrito</h1>
            </div>
        )
        }
    </>
);
}

export default Carrito;
