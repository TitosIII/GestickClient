import '../../../../public/CSS/CSS_Gestick.css'
import ClockLoader from "react-spinners/ClockLoader"
import { useEffect, useState } from 'react'
import Footer from '../../components/micro_components/Footer';

export default function SobreNosotros() {

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

                    <div className="contenedorCarga">
                        <ClockLoader
                            color="#01a7c2"
                            size={100}

                            loading={loading}
                        />
                    </div>

                    :

                    <div id='contenedorNormal' >
                        <header className='HeaderPrincipal'>
                            <h2 className="logo">GESTICK</h2>
                            <input type="checkbox" id="check" />
                            <label htmlFor="check" className="mostrar-menu">
                                &#8801
                            </label>
                            <nav className="menu">
                                <a href="/">Inicio</a>
                                <a href="/SobreNosotros">Sobre Nosotros</a>
                                <a href="/loginEmpleado">Iniciar Sesión</a>
                                <label htmlFor="check" className="esconder-menu">
                                    &#215
                                </label>
                            </nav>
                        </header>
                        <section id="equipo">
                            <div className="contenedor">
                            <div>
                <img src="../IMG/Equipo/TitosFoto.jpeg" alt="Lopez Lozano Carlos Enrique"/>
                <h4>Lopez Lozano Carlos Enrique</h4>
                <p>Desarrollador Back-end</p>
                <a href="/" className="saber-mas-S">Saber Mas</a>
            </div>
            <div>
                <img src="../IMG/Equipo/GaelFoto.jpeg" alt="Perez Calderon Gael Alejandro"/>
                <h4>Perez Calderon Gael Alejandro</h4>
                <p>Documentador</p>
                <a href="/" className="saber-mas-S">Saber Mas</a>
            </div>
            <div>
                <img src="../IMG/Equipo/JoshuaFoto.jpeg" alt="Riveron Martinez Joshua Israel"/>
                <h4>Riveron Martinez Joshua Israel</h4>
                <p>Documentador</p>
                <a href="/" className="saber-mas-S">Saber Mas</a>
            </div>
            <div>
                <img src="../IMG/Equipo/CanoFoto.jpeg" alt="Sánchez Cano Alejandro"/>
                <h4>Sánchez Cano Alejandro</h4>
                <p>Desarrollador BackEnd y Front-end</p>
                <a href="https://alejandrotrikitrakatelas33sanchezcano.github.io/Mi-Portafolio33/" className="saber-mas-S">Saber Mas</a>
            </div>
            <div>
                <img src="../IMG/Equipo/RobertoFoto.jpeg" alt="Roberto Solis Roberto Carlos"/>
                <h4>Roberto Solis Roberto Carlos</h4>
                <p>Desarrollador Mobile</p>
                <a href="/" className="saber-mas-S">Saber Mas</a>
            </div>
            <div>
                <img src="../IMG/Equipo/AdrianFoto.jpeg" alt="Vazquez Montero Carlos Adrian"/>
                <h4>Vazquez Montero Carlos Adrian</h4>
                <p>Desarrollador Mobile</p>
                <a href="/" className="saber-mas-S">Saber Mas</a>
            </div>
                            </div>
                        </section>
                    </div >
            }
             <div className="FooterEmpleado"> <Footer/></div>
        </section>

    )
}
