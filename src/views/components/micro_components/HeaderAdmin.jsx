
export default function HeaderAdmin() {

    return (
        <div><header className="HeaderAdmin">
            <h2 className="logo">GESTICK</h2>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="mostrar-menu">
                &#8801
            </label>
            <nav className="menu">
                <a href="/TitosChampionsSonicAdrianJoshuaGael">Administradores</a>
                <a href="/GraficasGestick">DashBoard</a>
                <a href="/"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
            </nav>
        </header></div>
    )
}
