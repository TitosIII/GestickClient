import Session from "react-session-api"

export default function Header() {
    function logOut(){
        Session.clear();
        window.location.href = "/";
    }
    return (
        <div><header className="HeaderPrincipal">
            <h2 className="logo">GESTICK</h2>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="mostrar-menu">
                &#8801
            </label>
            <nav className="menu">
                <a href="/Tablero">Puntos De Venta</a>
                <a href="/InventarioProductos">Productos</a>
                <a href="/Empleados">Empleados</a>
                <a href="/EstadoGeneralAdmin">Estado General</a>
                <a href="/SoporteTecnico">Soporte Tecnico</a>
                <button className="btnExit" onClick={()=>logOut()}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                <label htmlFor="check" className="esconder-menu">
                    &#215
                </label>
            </nav>
        </header></div>
    )
}
