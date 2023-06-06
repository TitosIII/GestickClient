import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAdmins} from '../../../context/adminsContext'
import { deleteAdmins } from '../../../api/gestick.api'

export default function GestickAdminTable() {

    const {admins, loadAdmins} = useAdmins()

    useEffect(() => {
        loadAdmins()
    }, [])

    const {deleteAdmin} = useAdmins()

    const navigate = useNavigate() 
    return (

        <section className="tabla-escala">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Suspender</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        admins.map(admins => (
                            <tr key={admins.idAdmin}>
                                <td data-label="ID">{admins.idAdmin}</td>
                                <td data-label="Nombre">{admins.AdNombre}</td>
                                <td data-label="Apellido Paterno">{admins.AdAppat}</td>
                                <td data-label="Apellido Materno">{admins.AdApmat}</td>
                                <td data-labe="Editar">
                                    <button className="button2" type="submit" onClick={() => navigate(`/EditarAdministrador/${admins.idAdmin}`)}>
                                        <span>Suspender</span>
                                    </button>
                                </td>
                                <td data-labe="Borrar">
                                    <button className="button3" type="submit" onClick={() => deleteAdmin(admins.idAdmin)}>
                                        <span>Eliminar</span>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>

    )
}
