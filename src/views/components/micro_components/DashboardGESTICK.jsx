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
import { useState, useEffect } from "react";
import { dashboardADMIN } from "../../../api/gestick.api.js";

const DashboardGESTICK = (props) => {

    const [dashData, setDashData] = useState({});
    console.log(dashData)

    useEffect(() => {
        dashboardADMIN({ idAdmin:1 })
            .then(results => setDashData(results.data));
    }, []);


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            {/* GRID & CHARTS */}
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
                        title={props.results.MembresiasTOTAL}
                        subtitle="Membresías Vendidas"
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
                        title={props.results.UsuariosTOTAL}
                        subtitle="Usuarios Totales"
                        icon={
                            <PersonAddIcon
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
                        title="1,071"
                        subtitle="Trafico Recibido"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficIcon
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
                                Ganancias De Los Usuarios De {props.results.anno}
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                ${props.results.GananciasUsuariosTOTAL}
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
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
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Usuarios Recientes
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
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
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
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
                    ))}
                </Box>
                {/* ROW 3 */}

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Alcance
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            48,352 Personas Alcanzadas
                        </Typography>
                        <Typography>Incluye Usuarios Inactivos</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardGESTICK;
