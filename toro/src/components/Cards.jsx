import { Box, Card, Grid } from "@mui/material"

const Cards = () => {
    const cards = Array.from({ length: 8 }, (_, index) => ({
        id: index,
    }))

    return (
        <Box sx={{ width: "100vw", maxWidth: "100%", mx: "auto", p: 0 }}>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="flex-start"
            >
                {cards.map((card) => (
                    <Grid item xs={12} sm={6} md={3} key={card.id}>
                        <Card
                            sx={{
                                height: 220,
                                borderRadius: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                                background: "#fff",
                                display: "flex",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                p: 0,
                            }}
                        >
                            as ações aqui
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Cards