export default function Header() {
    return (
        <div><header>
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
                <a href="/"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                <label htmlFor="check" className="esconder-menu">
                    &#215
                </label>
            </nav>
        </header></div>
    )
}
