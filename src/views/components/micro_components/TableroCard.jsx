export default function TableroCard() {
    return (

        <div className="tarjetaTablero">
            <div className="imgTarjetaTablero"></div>
            <div className="contentTarjetaTablero">
                <div className="tituloTarjetaTablero">
                    <h3>Gestick</h3>
                </div>
                <div className="btn-containerTarjetaTablero">
                    <a href="/Carrito" className="button2">Crear Sesión</a>
                    <a href="/EstadoGeneralAdmin">
                        <button className="button2"><span> Finanzas</span></button>
                    </a>
                </div>
            </div>
        </div>

    )
}
