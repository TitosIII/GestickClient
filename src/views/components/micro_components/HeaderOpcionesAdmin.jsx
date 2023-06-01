import { Link } from "react-router-dom";

export default function HeaderOpcionesAdmin() {



    var paginas = ""
    var items = ""

    var urlActual = window.location.pathname;

    console.log(urlActual)

    if (urlActual === "/InventarioProductos") {
        paginas = "/Product"
        items = "Producto"
    } else if (urlActual === "/Empleados") {
        paginas = "/AgregarEmpleado"
        items = "Empleado"
    } else if(urlActual === "/TitosChampionsSonicAdrianJoshuaGael"){
        paginas = "/Administradores"
        items = "Administrador"
    }

    console.log(urlActual)

    return (
        <div className="Header-Opciones">
            <nav className="menu">

                <div className="buscar">
                    <input type="text" placeholder="      Buscar" required id="inputbuscar" />
                    <div className="btnBuscar">
                        <i className="fas fa-search icon"></i>
                    </div>
                </div>

                <Link to={paginas} id="BotonActivo" className="Separado">Agregar {items}</Link>
            </nav>
        </div>
    )
}
