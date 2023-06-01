
export default function CardsProducto() {
    return (
        
            <div className="product">
            <div className="image">
                <img src="../IMG/ARTICULOS/Prit.jpg" alt=""/>
            </div>
            <div className="namePrice">
                <h4>Producto</h4>
                <span>$ 15.99</span>
            </div>
            <p>Descripción Del Producto:</p>
            <div className="stars">
                <p>Existencias: <span>33</span></p>
            </div>
            <div className="stars">
            <a className='saber-mas-P' href='#'>Editar</a>
                <a className='saber-mas-P' href='#'>Borrar</a>
            </div>
        </div>
    )
}
