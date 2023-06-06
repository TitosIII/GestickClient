import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme.js";
import { mockTransactions } from "../../../../public/JS/Data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "./graficas/LineChart.jsx";
import GeographyChart from "./graficas/GeographyChart";
import BarChart from "./graficas/BarChart";
import StatBox from "./graficas/StatBox";
import ProgressCircle from "./graficas/ProgressCircle";
import DashboardPDF from "../PDF/DashboardPDF.jsx";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import toast, { Toaster } from "react-hot-toast";
import { dashboardDUENNO } from "../../../api/gestick.api.js";
import Session from "react-session-api";
import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Dashboard = (props) => {

    const [dashData, setDashData] = useState({});
    console.log(dashData)

    let mesString = "";

    switch (props.results.mes) {
        case 1:

            mesString = "Enero"
            break;

        case 2:

            mesString = "Febrero"
            break;

        case 3:

            mesString = "Marzo"
            break;

        case 4:

            mesString = "Abril"
            break;

        case 5:

            mesString = "Mayo"
            break;

        case 6:

            mesString = "Junio"
            break;

        case 7:

            mesString = "Julio"
            break;

        case 8:

            mesString = "Agosto"
            break;

        case 9:

            mesString = "Septiembre"
            break;

        case 10:

            mesString = "Octubre"
            break;

        case 11:

            mesString = "Noviembre"
            break;

        case 12:

            mesString = "Diciembre"
            break;
    }

    console.log(props.results)

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    useEffect(() => {
        dashboardDUENNO({ idAdmin: Session.get("id") })
            .then(results => setDashData(results.data));
    }, []);
    return (


        <Box m="20px">

            {dashData.dataLINE === [] || dashData.historialCARRITO === [] ? (

                
                
                <section className="Tableros">
                        <h1>Antes de ver tu dashboard debes de vender algo</h1>
                    </section>) 

                
                
                : (
                    <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                >
                    {/* ROW 1 */}

                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title={props.results.productosVendidosACTUALES}
                            subtitle="Ventas Realizadas"
                            progress={(props.results.porcentajeVENTAACTUAL / 100)}
                            increase={props.results.porcentajeVENTAACTUAL + "%"}
                            icon={
                                <PointOfSaleIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                            }
                        />
                    </Box>
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title={props.results.totalactual}
                            subtitle="Clientes Nuevos"
                            progress={(props.results.porcentajeACTUAL / 100)}
                            increase={"  " + props.results.porcentajeACTUAL + "%"}
                            icon={
                                <PersonAddIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                            }
                        />
                    </Box>
                    {/* ROW 2 */}
                    <Box
                        gridColumn="span 8"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                    >
                        <Box
                            mt="25px"
                            p="0 30px"
                            display="flex "
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    variant="h5"
                                    fontWeight="600"
                                    color={colors.grey[100]}
                                >
                                    Ganancias De {mesString}
                                </Typography>
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    color={colors.greenAccent[500]}
                                >
                                    ${props.results.gananciasACTUALES}
                                </Typography>
                            </Box>
                            <Box>
                                <IconButton>
                                    <PDFDownloadLink
                                        document={<DashboardPDF />}
                                        fileName="FacturaDASHBOARD.pdf"
                                    >
                                        <DownloadOutlinedIcon
                                            sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                        />
                                    </PDFDownloadLink>

                                </IconButton>
                            </Box>
                        </Box>


                        <Box height="250px" m="-20px 0 0 0">
                            <LineChart isDashboard={true} data={dashData.dataLINE} />
                        </Box>
                    </Box>
                    <Box
                        gridColumn="span 4"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                        overflow="auto"
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            colors={colors.grey[100]}
                            p="15px"
                        >
                            <Typography color={colors.grey[100]} variant="h5" fontWeight="600" >
                                Ventas Recientes
                            </Typography>
                        </Box>



                        {dashData.historialCARRITO ? (
                            dashData.historialCARRITO.map((transaction, i) => (
                                <Box
                                    key={`${transaction.txId}-${i}`}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    borderBottom={`4px solid ${colors.primary[500]}`}
                                    p="15px"
                                >
                                    <Box>
                                        <Typography
                                            color={colors.greenAccent[500]}
                                            variant="h5"
                                            fontWeight="600"
                                        >
                                            {transaction.txId}
                                        </Typography>
                                        <Typography color={colors.grey[100]}>{transaction.user}</Typography>
                                    </Box>
                                    <Box color={colors.grey[100]}>{transaction.date}</Box>
                                    <Box
                                        backgroundColor={colors.greenAccent[500]}
                                        p="5px 10px"
                                        borderRadius="4px"
                                    >
                                        ${transaction.cost}
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <div className="contenedorCarga2">
                                <ClockLoader color="#01a7c2" size={100} />
                            </div>
                        )}


                    </Box>
                    {/* ROW 3 */}



                </Box>
                )
            }

        </Box>
    );
};

export default Dashboard;
