import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPDF = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    return (
        <Document>
            {/*Caracteristicas de la hoja*/}
            <Page
                size="A4"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "white",
                    justifyContent:"space-between"
                }}
            >
                {/*propiedades generales dentro de la hoja*/}
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "white",
                        padding: 40,
                    }}
                >
                    {/*Propiedades del titulo y logo*/}
                <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"row"
                    }}
                >
                    {/*propiedades del titulo (Texto: Factura)*/}
                     <Text style={{color: "#01a7c2", fontSize: "42px"}}>
                        Factura
                    </Text>
                    {/*propiedades del logo (imagen)*/}
                    <Image
                        src="IMG/Decoration/Logo_Grande.png"
                        alt="Logo Gestick"
                        style={{maxWidth: "100px", maxHeight : "100px", marginTop:"-25px"}}
                    />
                </View>
                {/*propiedades del segundo contenedor (donde dice nuestros datos)*/}
                <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum"
                    }}
                >
                    {/*Contenido del segundo contenedor*/}
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5}}>GESTICK</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5}}>gestick@gesticksa.com</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5}}>91-1234-567</Text>
                </View>
                {/*Propiedades generales del tercer Contenedor Datos de la factura*/}
                <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                           flexDirection:"row",
                           flexWrap:"wrap",
                           paddingTop:10
                       
                    }}
                >
                    {/*propiedades del primer apartado del tercer contenedor*/}
                    <View
                     style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        paddingRight:5,
                        maxWidth:"30%"
                    }}
                >
                    {/*contenido del primer apartado del tercer contenedor*/}
                    <Text style={{color: "blue", fontSize: "14px", paddingBottom:5, fontWeight:"bold"}}>FACTURA A: </Text>
                        <Text style={{color: "black", fontSize: "10px", paddingBottom:5}}>Destinatario de la factura que la pidio</Text>
                        <Text style={{color: "black", fontSize: "10px", paddingBottom:5}}>Direccion del destinatario de la factura que se pidio</Text>
                    </View>
                    {/*propiedades del segundo apartado del tercer contenedor*/}
                     <View
                     style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        paddingRight:5,
                        maxWidth:"30%"
                    }}
                >
                    {/*contenido del segundo apartado del tercer contenedor*/}
                    <Text style={{color: "blue", fontSize: "14px", paddingBottom:5, fontWeight:"bold"}}>ENVIAR A:</Text>
                        <Text style={{color: "black", fontSize: "10px", paddingBottom:5}}>Destinatario de la factura indicarlos en esta parte</Text>
                        <Text style={{color: "black", fontSize: "10px", paddingBottom:5}}>Direccion a la que se entregaran los productos en esta parte</Text>
                    </View>
                    {/*propiedades del tercer apartado del tercer contenedor*/}
                    <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        alignItems:"flex-start",
                        flexDirection:"row",
                        paddingRight:5,
                        maxWidth:"38%"
                    }}>
                        {/*Titulos del tercer apartado del tercer contenedor*/}
                    <View
                     style={{
                        display: "flex",
                        justifyContent:"flex-start",
                        flexDirection:"colum",
                        paddingRight:15,
                    }}
                >
                    <Text style={{color: "blue", fontSize: "12px", paddingBottom:5, fontWeight:"bold"}}>No. DE FACTURA:</Text>
                    <Text style={{color: "blue", fontSize: "12px", paddingBottom:5, fontWeight:"bold"}}>FECHA:</Text>
                    <Text style={{color: "blue", fontSize: "12px", paddingBottom:5, fontWeight:"bold"}}>No. DE PEDIDO:</Text>
                    <Text style={{color: "blue", fontSize: "12px", paddingBottom:5, fontWeight:"bold"}}>FECHA VENCIMIENTO:</Text>
                        
                    </View>
                        {/*Contenido y/o datos del tercer apartado del tercer contenedor*/}
                    <View
                     style={{
                        display: "flex",
                        flexDirection:"colum",
                        paddingLeft:15,
                        maxWidth:"100%"
                    }}
                >
                    <Text style={{color: "black", fontSize: "12px", paddingBottom:5, fontWeight:"bold"}}>es-001</Text>
                    <Text style={{color: "black", fontSize: "12px", paddingBottom:5, fontWeight:"bold"}}>13/05/2023</Text>
                    <Text style={{color: "black", fontSize: "12px", paddingBottom:5, fontWeight:"bold"}}>1730/2023</Text>
                    <Text style={{color: "black", fontSize: "12px", paddingBottom:5, fontWeight:"bold"}}>13/05/2023</Text>
                    </View>
                    </View>
                        
                </View>
                {/*Tabla de datos*/}
                <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum"
                    }}
                >
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5, paddingTop:20}}>LISTA DE PRODUCTOS</Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        justifyContent:"space-between",
                           flexDirection:"row",
                           flexWrap:"wrap",
                           paddingTop:10,
                           maxWidth:1000,
                       
                    }}
                >
                <View
                     style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum"
                    }}
                >
                    {/*contenido del primer apartado del tercer contenedor*/}
                    <Text style={{color: "blue", fontSize: "16px", paddingBottom:5, fontWeight:"bold", borderBottomWidth:2, borderColor:"gray", borderTopWidth:2, paddingTop:2, }}>Descripcion y/o Producto</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5, }}>Lápices HB</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5, }}>Cuaderno cuadricula chica</Text>
                    </View>
                    <View
                     style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        maxWidth:"100%"
                    }}
                >
                    {/*contenido del segundo apartado del tercer contenedor*/}
                    <Text style={{color: "blue", fontSize: "16px", paddingBottom:5, fontWeight:"bold", borderBottomWidth:2, borderColor:"gray", borderTopWidth:2, paddingTop:2, }}>Cantidad de productos</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:10, paddingTop:10, alignSelf:"center"}}>1</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5, alignSelf:"center"}}>2</Text>
                    </View>
                    fenfjewknmfjkewnklqew
                    <View
                     style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        maxWidth:"100%"
                    }}
                >
                    {/*contenido del segundo apartado del tercer contenedor*/}
                    <Text style={{color: "blue", fontSize: "16px", paddingBottom:5, fontWeight:"bold", borderBottomWidth:2, borderColor:"gray", borderTopWidth:2, paddingTop:2}}>Precio Unitario</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:10, paddingTop:10, alignSelf:"center"}}>10</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5, alignSelf:"center"}}>2</Text>
                    </View>
                    <View
                     style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        maxWidth:"100%"
                    }}
                >
                    {/*contenido del segundo apartado del tercer contenedor*/}
                    <Text style={{color: "blue", fontSize: "16px", paddingBottom:5, fontWeight:"bold", borderBottomWidth:2, borderColor:"gray", borderTopWidth:2, paddingTop:2}}>Importe</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:10, paddingTop:10,alignSelf:"center"}}>10</Text>
                        <Text style={{color: "black", fontSize: "14px", paddingBottom:5, alignSelf:"center"}}>6</Text>
                    </View>
                    </View>






                    <View style={{
                        display: "flex",
                        justifyContent:"flex-end",
                           flexDirection:"row",
                           flexWrap:"wrap",
                           paddingTop:10,
                           maxWidth:1000,
                       
                    }}>
                        <View
                     style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        maxWidth:"100%"
                    }}
                >
                    {/*contenido del segundo apartado del tercer contenedor*/}
                    <Text style={{color: "blue", fontSize: "16px", paddingBottom:5,marginRight:70, fontWeight:"bold", borderBottomWidth:2, borderColor:"gray", borderTopWidth:2, paddingTop:2}}>Precio Total:</Text>
                    </View>
                    <View
                     style={{
                        display: "flex",
                        justifyContent:"space-between",
                        flexDirection:"colum",
                        maxWidth:"25%"
                    }}
                >
                    {/*contenido del segundo apartado del tercer contenedor*/}
                    <Text style={{color: "black", fontSize: "16px", paddingBottom:5, fontWeight:"bold", borderBottomWidth:2, borderColor:"gray", borderTopWidth:2, paddingTop:2, marginLeft:-50, alignSelf:"center"}}>16</Text>
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
                    paddingBottom:20
                }}
                >
                {/*pie de pagina*/}
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
                </View>
                </View>
                
            </Page>
            
        </Document>
    );
};

export default DocuPDF;