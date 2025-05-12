import { Box, Typography } from "@mui/material";
import OlderFilter from "./OlderFilter";

const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                minHeight: "100px",
                px: 6,
                mt: 3
            }}
        >
            <Typography sx={{ fontSize: 40, fontWeight: "bold", color: "#0A1B2B" }}>
                Explore o mercado
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ color: "#AEB4B9", fontSize: 16, mr: 1 }}>Ordenar:</Typography>
                <OlderFilter />
            </Box>
        </Box>
    )
}

export default Header;