import { createContext, useContext } from "react"
import { useState } from "react";
import { deleteAdmins,getAdminRequest, getAdminsRequest , updateAdminRequest} from '../api/gestick.api.js'

export const AdminsContext = createContext()

export const useAdmins = () => {
    const context = useContext(AdminsContext)
    if (!context) {
        throw new Error("useAdmins must be used within a AdminContextProvider")
    }
    return context;
}

export const AdminsContextPrvider = ({ children }) => {

    const [admins, setAdmins] = useState([]);

    async function loadAdmins() {
        const response = await getAdminRequest()
        setAdmins(response.data)
    }

    const deleteAdmin = async (idAdmin) => {

        try {
            const response = await deleteAdmins(idAdmin)
            setAdmins(admins.filter(admin => admin.idAdmin !== idAdmin))

        } catch (error) {
            console.log(error)
        }
    }

    const getAdmin = async (idAdmin) =>{
        try{
            const response = await getAdminsRequest(idAdmin)
            return response.data
        }catch(error){
            console.log(error)
        }
    }

    const updateAdmin = async(idAdmin, newFieldAdmin) =>{
        try {
            const response = await updateAdminRequest(idAdmin, newFieldAdmin);
            console.log(response);
        }catch (error) {
            console.log(error)
        }
    }

    return (<AdminsContext.Provider value={{ admins, loadAdmins, deleteAdmin , getAdmin, updateAdmin}}>
        {children}
    </AdminsContext.Provider>);
}