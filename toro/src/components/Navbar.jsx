import { Box, Typography } from "@mui/material";
import "../css/reset.css";
import LogoToro from "../assets/LogoToro.png";

const Navbar = () => {
    return (
        <Box sx={{ backgroundColor: "#091827", width: "100%", height: "80px", margin: "0", paddingLeft: "40px", boxSizing: "border-box", display: "flex", alignItems: "center" }}>
            <img style={{ width: "40px", height: "40px", marginRight: "6px" }} src={LogoToro} alt="LogoToro" />
            <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>Toro</Typography>
        </Box>
    )
}

export default Navbar;
