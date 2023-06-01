import HeaderAdmin from "../components/micro_components/HeaderAdmin";
import { Link } from "react-router-dom";
import GestickAdminTable from "../components/micro_components/GestickAdminTable";
import HeaderOpcionesAdmin from "../components/micro_components/HeaderOpcionesAdmin";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from 'react'
import FooterAdmin from "../components/micro_components/FooterAdmin";


export default function GestickAdmin() {


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        window.onload = function () {
            setLoading(false)
        }
    }, [])

    return (

        <section>
            {

                loading ?
                    <div className="contenedorCarga" >
                        <ClockLoader
                            color="#01a7c2"
                            size={100}

                            loading={loading}
                        />
                    </div >

                    :

                    <section>
                        <HeaderAdmin />
                        <HeaderOpcionesAdmin />
                        <section className="TablerosA">
                            <GestickAdminTable />
                        </section>
                    </section>
            }
            <div className="FooterAdmin"> <FooterAdmin/></div>
        </section>
    )
}
