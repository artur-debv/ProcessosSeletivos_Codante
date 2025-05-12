import { Box, Button } from "@mui/material";
import { useState } from "react";

const OlderFilter = () => {
    const [order, setOrder] = useState(null);
    return (
        <>
            <Box>
                <Button
                    variant="contained"
                    onClick={() => setOrder("alta")}
                    sx={{
                        backgroundColor: order === "alta" ? "#00B5DD" : "#F2F4F8",
                        color: order === "alta" ? "#fff" : "#AEB4B9",
                        fontWeight: order === "alta" ? "bold" : "normal",
                        borderRadius: "20px",
                        boxShadow: "none",
                        px: 4,
                        mr: 1,
                        '&:hover': {
                            backgroundColor: order === "alta" ? "#00B5DD" : "#e0e3e7"
                        }
                    }}
                >
                    Em Alta
                </Button><Button
                    variant="contained"
                    onClick={() => setOrder("baixa")}
                    sx={{
                        backgroundColor: order === "baixa" ? "#00B5DD" : "#F2F4F8",
                        color: order === "baixa" ? "#fff" : "#AEB4B9",
                        fontWeight: order === "baixa" ? "bold" : "normal",
                        borderRadius: "20px",
                        boxShadow: "none",
                        px: 4,
                        '&:hover': {
                            backgroundColor: order === "baixa" ? "#00B5DD" : "#e0e3e7"
                        }
                    }}
                >
                    Em Baixa
                </Button>
            </Box>
        </>
    )
}

export default OlderFilter