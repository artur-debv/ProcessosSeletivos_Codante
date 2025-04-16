import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import PropTypes from 'prop-types';

const IOF = { dinheiro: 0.011, cartao: 0.064 };
const SPREAD_BANCARIO = 0.04; // 4% de spread bancário

export function FetchMoney({ valor, estadoTaxa, tipoPagamento }) {
    const [dados, setDados] = useState({
        cotacao: 0,
        resultados: {
            dolarSemImposto: 0,
            dolarComImposto: 0,
            realSemImposto: 0,
            realComImposto: 0,
            spreadBancario: 0,
            valorComSpread: 0
        }
    });

    useEffect(() => {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
            .then(res => res.json())
            .then(data => {
                const cotacao = data.rates.BRL;
                const iof = IOF[tipoPagamento];
                const impostoEstado = valor * (estadoTaxa / 100);
                
                const dolarSemImposto = valor;
                const dolarComImposto = tipoPagamento === 'dinheiro' 
                    ? valor + impostoEstado
                    : valor + impostoEstado + (valor * iof);

                const realSemImposto = valor * cotacao;
                const realComImposto = tipoPagamento === 'dinheiro'
                    ? dolarComImposto * (cotacao * (1 + iof))
                    : dolarComImposto * cotacao;

                // Cálculo do spread bancário
                const spreadBancario = realComImposto * SPREAD_BANCARIO;
                const valorComSpread = realComImposto + spreadBancario;

                setDados({ 
                    cotacao,
                    resultados: {
                        dolarSemImposto,
                        dolarComImposto,
                        realSemImposto,
                        realComImposto,
                        spreadBancario,
                        valorComSpread
                    }
                });
            })
            .catch(err => console.error('Erro ao buscar cotação:', err));
    }, [valor, estadoTaxa, tipoPagamento]);

    return (
        <Box sx={{ mt: 3, width: "50%" }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Resultado da Conversão
                </Typography>
                <Box sx={{ display: 'grid', gap: 2 }}>
                    <Typography>Cotação do dólar: R$ {dados.cotacao.toFixed(2)}</Typography>
                    <Typography>IOF: {(IOF[tipoPagamento] * 100).toFixed(1)}%</Typography>
                    <Typography>Total em dólar sem imposto: $ {dados.resultados.dolarSemImposto.toFixed(2)}</Typography>
                    <Typography>Total em dólar com imposto: $ {dados.resultados.dolarComImposto.toFixed(2)}</Typography>
                    <Typography>Total em real sem imposto: R$ {dados.resultados.realSemImposto.toFixed(2)}</Typography>
                    <Typography>Total em real com imposto: R$ {dados.resultados.realComImposto.toFixed(2)}</Typography>
                    <Typography sx={{ color: 'error.main', fontWeight: 'bold' }}>
                        Spread bancário (4%): R$ {dados.resultados.spreadBancario.toFixed(2)}
                    </Typography>
                    <Typography sx={{ color: 'success.main', fontWeight: 'bold' }}>
                        Valor final com spread: R$ {dados.resultados.valorComSpread.toFixed(2)}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}

FetchMoney.propTypes = {
    valor: PropTypes.number.isRequired,
    estadoTaxa: PropTypes.number.isRequired,
    tipoPagamento: PropTypes.oneOf(['dinheiro', 'cartao']).isRequired
};
