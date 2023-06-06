import { Routes, Route } from "react-router-dom";

import NotFound from "./views/General/NotFound/NotFound.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import Index from './views/General/Index/Index.jsx'
import SingUp from "./views/General/SingUp/SingUp.jsx";
import LoginEmpleado from "./views/General/Login/Empleado/LoginEmpleado.jsx";
import LoginAdmin from "./views/General/Login/Dueno/LoginAdmin.jsx";
import Tablero from "./views/Dueno/Tablero.jsx";
import EstadoGeneralAdmin from "./views/Dueno/EstadoGeneralAdmin.jsx"
import Productos from "./views/Dueno/Productos.jsx";
import HistorialVenta from "./views/Dueno/HistorialVenta.jsx";
import EmpleadosTablero from "./views/Dueno/EmpleadosTablero.jsx";
import EditarEmpleado from "./views/Dueno/EditarEmpleado.jsx";
import GestickAdmin from "./views/Admin/GestickAdmin";
import Inventario from "./views/Dueno/Inventario.jsx";
import GraficasAdministrador from "./views/Admin/GraficasGestick.jsx";
import { AdminsContextPrvider } from './context/adminsContext.jsx'
import Cart from "./views/Empleado/Cart/Cart.jsx";
import SobreNosotros from "./views/General/SobreNosotros/SobreNosotros.jsx";
import Session from "react-session-api";
import VistaPDF from "./views/components/PDF/VistaPDF.jsx";
import SupportAdmin from "./views/components/SoporteTECNICO/Admin/Soporte/index.jsx";
import SupportGestick from "./views/components/SoporteTECNICO/Admin/Soporte/SupportGestick.jsx"
import SupportEngine from "./views/components/SoporteTECNICO/SupportEngine.jsx"
import ConfirmModal from "./views/components/micro_components/ConfirmModal.jsx";
import Carrito from "./views/Dueno/Carrito.jsx";

export default function App() {
  Session.config(true);

  return (
    <AdminsContextPrvider>
      <Routes>

        //General
        <Route path="#" element={<NotFound />} />
        <Route path="/" element={<Index />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />

        //Administrador
        <Route path="/TitosChampionsSonicAdrianJoshuaGael" element={<GestickAdmin />} />
        <Route path="/EditarAdministrador/:idAdmin" element={<SingUp />} />
        <Route path="/GraficasGestick" element={<GraficasAdministrador />} />
        <Route path="/Chats" element={<SupportGestick />} />

        //Dueno
        <Route path="/signAdministrador" element={<SingUp />} />
        <Route path="/loginAdministrador" element={<LoginAdmin />} />
        <Route path="/Tablero" element={<Tablero />} />
        <Route path="/SoporteTecnico" element={<SupportAdmin />} />
        <Route path="/Empleados" element={<EmpleadosTablero />} />
        <Route path="/AgregarEmpleado" element={<EditarEmpleado />} />
        <Route path="/EditarEmpleado/:idEmpleado" element={<EditarEmpleado />} />
        <Route path="/InventarioProductos" element={<Inventario />} />
        <Route path="/Product" element={<Productos />} />
        <Route path="/EditarProducto/:idProduct" element={<Productos />} />
        <Route path="/HistorySell" element={<HistorialVenta />} />
        <Route path="/EstadoGeneralAdmin" element={<EstadoGeneralAdmin />} />
        <Route path="/Venta/:idCarrito" element={<Carrito/>} />

        //Empleado
        <Route path="/loginEmpleado" element={<LoginEmpleado />} />
        <Route path="/Carrito" element={<Cart />} />

        <Route path="/q" element={<VistaPDF/>}/>
        <Route path="/tester" element={<ConfirmModal message={"Aceptas???"} action={()=>{console.log("a")}} option={true}/>}/>
        
      </Routes>
    </AdminsContextPrvider>

  )
}
