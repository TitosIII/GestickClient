import { PDFViewer } from "@react-pdf/renderer";
import DocuPDF from "./DashboardPDF";
import "../../../../public/CSS/CSS_Gestick.css"
import Header from "../micro_components/Header";
import Footer from "../micro_components/Footer";

export default function VistaPDF() {
    return (
        <section>
        <Header/>
        <div className="TablerosPDF">
        <PDFViewer>
            <DocuPDF/>
        </PDFViewer>
        </div>
        <div className="FooterEmpleado"><Footer/></div>
        </section>
    )
}