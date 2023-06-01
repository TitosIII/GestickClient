import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPDFDash = () => {
    return (
        <Document>
            {/*Caracteristicas de la hoja*/}
            <Page
                size="A4"
                
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                }}
            >
                {/*propiedades generales dentro de la hoja*/}
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        padding: 40,
                        alignItems:"center",
                    }}
                >
                    {/*Propiedades del titulo y logo*/}
                <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"row",
                        maxHeight:"100%"
                    }}
                >
                    {/*propiedades del titulo (Texto: Factura)*/}
                     <Text style={{color: "#01a7c2", fontSize: "42px"}}>
                        Resultados Generales
                    </Text>
                    {/*propiedades del logo (imagen)*/}
                    <Image
                        src="IMG/Decoration/Logo_Grande.png"
                        alt="Logo Gestick"
                        style={{maxWidth: "100px", maxHeight : "100px", marginTop:"-25px"}}
                    />
                </View>
                <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"row",
                    }}
                >
                    <Text style={{color: "#01a7c2", fontSize: "14px", paddingBottom:5}}>
                            Fecha:
                        </Text>
                        <Text style={{color: "gray", fontSize: "1421px", paddingBottom:5}}>
                            17/05/28
                        </Text>
                        </View>
                {/*Ventas obtenidas*/}
                <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        marginBottom:10,
                        flexWrap:"wrap",
                    }}
                >

                    <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        alignSelf:"center",
                        alignItems:"center",
                        margin:5,
                    }}
                >
                    {/*Contenido del segundo contenedor*/}
                        <Text style={{color: "blue", fontSize: "28px", marginBottom:5}}>Ventas Obtenidas</Text>
                        <Text style={{color: "black", fontSize: "28px", marginBottom:5}}>$ 1,342</Text>
                        <Image
                        src="IMG/Decoration/2.jpg"
                        alt="Ventas"
                        style={{maxWidth: "120px", maxHeight : "120px", }}
                    />
                </View>
                    <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        alignItems:"center",
                        margin:5,
                    }}
                >
                    {/*Contenido del segundo contenedor*/}
                    <Text style={{color: "blue", fontSize: "28px", marginBottom:5}}>Nuevos Clientes</Text>
                    <Text style={{color: "black", fontSize: "28px", marginBottom:5}}>1234</Text>
                    <Image
                        src="IMG/Decoration/3.jpg"
                        alt="Ventas"
                        style={{maxWidth: "120px", maxHeight : "120px", }}
                    />
                </View>
                    <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        margin:5,
                        alignItems:"center"
                    }}
                >
                    {/*Contenido del segundo contenedor*/}
                    <Text style={{color: "blue", fontSize: "28px", marginBottom:5}}>Ganancias Ultimo Mes</Text>
                    <Text style={{color: "black", fontSize: "28px", marginBottom:5}}>$ 1,342</Text>
                    <Image
                        src="IMG/Decoration/4.jpg"
                        alt="Ventas"
                        style={{maxWidth: "120px", maxHeight : "120px", }}
                    />
                </View>
                </View>

                </View>
                {/*Propiedades Generales del Pie de Pagina*/}
                <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    justifyContent:"flex-end",
                    paddingLeft: 40,
                    paddingRight: 40,
                }}
                >
                <View
                    style={{
                        display: "flex",
                        justifyContent:"flex-end",
                        flexDirection:"colum",
                        alignItems:"flex-end",
                        alignSelf:"flex-end"
    
                    }}
                >
                    {/*Contenido del segundo contenedor*/}
                        <Text style={{color: "gray", fontSize: "10px", paddingBottom:5}}>
                            El pago se realizará en un plazo de 15 dias desde la emisión de esta factura, se realizará mediante transferencia bancaria.
                        </Text>
                        <Text style={{color: "gray", fontSize: "10px", paddingBottom:5}}>
                            Este documento solo es informativo, no tiene validez oficial.
                        </Text>
                </View>
                </View>
            </Page>
        </Document>
    );
};

export default DocuPDFDash;