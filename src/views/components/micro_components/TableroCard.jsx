export default function TableroCard() {
    return (

        <div className="tarjetaTablero">
            <div className="imgTarjetaTablero"></div>
            <div className="contentTarjetaTablero">
                <div className="tituloTarjetaTablero">
                    <h3>Gestick</h3>
                </div>
                <div className="btn-containerTarjetaTablero">
                    <a href="/Carrito">
                        <button className="button2"><span> Vender</span></button>
                    </a>
                    <a href="/EstadoGeneralAdmin">
                        <button className="button2"><span> Finanzas</span></button>
                    </a>
                </div>
            </div>
        </div>

    )
}
