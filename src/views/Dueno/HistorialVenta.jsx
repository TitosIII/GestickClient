import HeaderPro from "../components/micro_components/HeaderPro.jsx";
import { Box } from "@mui/material";
import BarChartsJS from "../components/chartJS/BarChartsJS";
import { UserProduct } from '../../../public/JS/Data.js'
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from 'react';
import Session from "react-session-api";
import Footer from "../components/micro_components/Footer.jsx";
import FooterDueno from "../components/micro_components/FooterDueno.jsx";
import LineChart from "../components/micro_components/graficas/LineChart.jsx";

export default function HistorialVenta() {

    const [loading, setLoading] = useState(true);

    window.addEventListener("load", () => setLoading(false));
    console.log(loading);

    const [userProduct, setUserProduct] = useState({
        labels: UserProduct.map((data) => data.Productos_idProductos),
        datasets: [{
            label: "Ventas",
            data: UserProduct.map((data) => data.CantidadVendida),

        }]
    })


    return (

        <section>
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
                        <HeaderPro />
                        <section className="Tableros-Historial">
                            <Box height="250px" m="-20px 0 0 0">
                                <LineChart isDashboard={true} data={dashData.dataLINE} />
                            </Box>
                        </section>
                    </section>
            }
            <div className="FooterDueno"><FooterDueno /></div>
        </section>

    )

}
