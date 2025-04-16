import logoStone from "../assets/LogoStone.svg";
import Transfer from "../assets/Transfer.svg";
import { Box, TextField, Button } from "@mui/material";
import FundoMoney from "../assets/FundoMoney.jpg";
import styles from "../css/ClipathImgMoney.module.css";
import Graph from "../assets/Graph.png";
import { CurrentDate } from "../CurrentData/CurrentDate";
import { OnChangeClicked } from "../OnChangeOptionClicked/OnChangeClicked";
import { useState } from "react";
import { FetchMoney } from "../FetchMoney/FetchMoney";

const buttonStyle = {
    padding: "16px",
    borderRadius: "8px",
    width: "160px",
    height: "55px",
    backgroundColor: "#00AB63",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    '&:hover': {
        backgroundColor: "#019457"
    }
};

export function Navbar() {
    const [formData, setFormData] = useState({
        dolarValue: "",
        taxaEstado: "",
        selectedTipo: null,
        tipo: null,
        showResults: false
    });
    const [resetOptions, setResetOptions] = useState(false);

    const handleInputChange = (field) => (event) => {
        const value = event.target.value.replace(/[^0-9.]/g, '');
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleLimpar = () => {
        setFormData(prev => ({
            ...prev,
            dolarValue: "",
            taxaEstado: "",
            selectedTipo: null,
            tipo: null,
            showResults: false
        }));
        setResetOptions(true);
        setTimeout(() => setResetOptions(false), 0);
    };

    const handleConverter = () => {
        if (formData.dolarValue === "" || formData.taxaEstado === "") {
            alert("Preencha todos os campos");
        }
        if (formData.dolarValue && formData.taxaEstado) {
            setFormData(prev => ({
                ...prev,
                tipo: prev.selectedTipo,
                showResults: true
            }));
        }
    };

    return (
        <Box sx={{ padding: "64px" }}>
           
            <Box sx={{ display: "flex", alignItems: "center", gap: "48px", mb: 4 }}>
                <img src={logoStone} alt="Logo Stone" style={{ height: "81px" }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ fontFamily: "Roboto", m: 0, fontSize: "18px", fontWeight: 500, lineHeight: "28.10px" }}>
                        <CurrentDate />
                    </p>
                </Box>
            </Box>

           
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <TextField
                    label="Dólar"
                    value={formData.dolarValue}
                    onChange={handleInputChange('dolarValue')}
                    size="small"
                    required
                />
                <TextField
                    label="Taxa do Estado"
                    value={formData.taxaEstado}
                    onChange={handleInputChange('taxaEstado')}
                    size="small"
                    required
                    helperText="Ex: 8.19 para Nevada, 8.87 para Nova Iorque"
                />
            </Box>

            <Box sx={{ mb: 3 }}>
                <OnChangeClicked
                    onTipoPagamentoChange={(tipo) =>
                        setFormData(prev => ({ ...prev, selectedTipo: tipo }))
                    }
                    reset={resetOptions}
                />
            </Box>
            
            <Box sx={{ display: "flex", gap: 2 }}>
            <Button onClick={handleConverter} sx={buttonStyle}>
                <img src={Transfer} alt="Transfer Icon" style={{ height: "24px" }} />
                Converter
            </Button>

            <Button onClick={handleLimpar} sx={buttonStyle}>Limpar</Button>
            </Box>

        
            {formData.showResults && (
                <FetchMoney
                    valor={parseFloat(formData.dolarValue)}
                    estadoTaxa={parseFloat(formData.taxaEstado)}
                    tipoPagamento={formData.tipo}
                />
            )}

            
            <Box sx={{ position: 'absolute', right: 0, top: 0, height: '100%', width: '60%', overflow: 'hidden', zIndex: -1 }}>
                <Box sx={{ position: 'absolute', top: 236, left: 200, zIndex: 1 }}>
                    <img src={Graph} alt="Graph" />
                </Box>
                <Box
                    component="img"
                    src={FundoMoney}
                    alt="Fundo dólar"
                    className={styles.custom_clip}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Box>
        </Box>
    );
}
