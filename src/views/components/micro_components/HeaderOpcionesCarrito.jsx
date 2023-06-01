import { Link } from "react-router-dom";

export default function HeaderOpcionesCarrito() {



    var paginas = ""
    var items = ""

    var urlActual = window.location.href

    console.log(urlActual)

    if (urlActual === "http://127.0.0.1:5173/InventarioProductos") {
        paginas = "Productos"
        items = "Producto"
    } else if (urlActual === "http://127.0.0.1:5173/Empleados") {
        paginas = "Empleados"
        items = "Empleado"
    } else if(urlActual === "http://127.0.0.1:5173/TitosChampionsSonicAdrianJoshuaGael"){
        paginas = "Administradores"
        items = "Administrador"
    }

    console.log(urlActual)

    return (
        <div className="Header-Opciones">
            <h2 className="logo2">{paginas}</h2>
            <nav className="menu">

                
            </nav>
        </div>
    )
}
