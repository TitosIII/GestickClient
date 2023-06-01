import { useParams } from "react-router-dom"

export default function HeaderPro() {
    const {idProduct} = useParams();
    return (
        <header className="HeaderPrincipal">
            <h2 className="logo">GESTICK</h2>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="mostrar-menu">
                &#8801
            </label>
            <nav className="menu">
                <a href="/Product">Anterior</a>
                <a href="/Product">Informacion General</a>
                <a href={`/HistorySell/${idProduct}`}>Historial De Venta</a>
                <a href="/Product">Siguiente</a>
            </nav>
        </header>
    )
}
