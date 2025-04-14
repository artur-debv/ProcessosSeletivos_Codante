import { useState, useEffect } from "react";
import { Box, InputLabel, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import PropTypes from 'prop-types';

export function OnChangeClicked({ onTipoPagamentoChange, reset }) {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (reset) {
            setSelectedOption(null);
        }
    }, [reset]);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        onTipoPagamentoChange(event.target.value);
    };

    return (
        <Box sx={{ marginBottom: "20px" }}>
            <InputLabel>Tipo de compra</InputLabel>
            <FormControl>
                <RadioGroup
                    row
                    value={selectedOption}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="dinheiro"
                        control={<Radio color="success" />}
                        label="Dinheiro"
                    />
                    <FormControlLabel
                        value="cartao"
                        control={<Radio color="success" />}
                        label="Cartão"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

OnChangeClicked.propTypes = {
    onTipoPagamentoChange: PropTypes.func.isRequired,
    reset: PropTypes.bool
};

