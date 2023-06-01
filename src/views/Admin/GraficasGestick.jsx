
import HeaderAdmin from "../components/micro_components/HeaderAdmin.jsx";
import { UserProduct } from '../../../public/JS/Data.js'
import DashboardGESTICK from "../components/micro_components/DashboardGESTICK";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from 'react'
import Footer from "../components/micro_components/Footer.jsx";
import FooterAdmin from "../components/micro_components/FooterAdmin.jsx";
import { dashboardADMIN } from "../../api/gestick.api.js";

export default function GraficasAdministrador() {

    const [loading, setLoading] = useState(false);
    const [table, setTable] = useState({MembresiasTOTAL:0,UsuariosTOTAL:0,GananciasUsuariosTOTAL:0,anno:0,dataLINE:[]});

    useEffect(() => {
        dashboardADMIN({ idAdmin: 1}).then((results) => {
          setTable(results.data);
          console.log(results.data);
        })}, []);

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

                        <div className="contenedorCarga">
                            <ClockLoader
                                color="#01a7c2"
                                size={100}

                                loading={loading}
                            />
                        </div>

                        :

                        <section>
                            <HeaderAdmin />
                            <section className="TablerosG">
                                <DashboardGESTICK results={table}/>
                            </section>
                            <div className="FooterAdmin"> <FooterAdmin /></div>
                        </section>
                }

            </section>


        )
    }
