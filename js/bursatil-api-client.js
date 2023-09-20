(async function fetchValue() {

    const API_KEY = '22f0e2c0dd65d51cbecdc3dd4edb9b';

    const response = await fetch('https://api.databursatil.com/v1/precios?token=' + API_KEY + '&emisora_serie=PLANI*&bolsa=BMV');

    const data = await response.json();

    setValues(data.BMV.ultimo);
}());

function setValues(value) {

    console.log(value);
    const intValue = Math.floor(value);
    const decimalValue = value - intValue;

    document.querySelector('#actionIntValue').innerHTML = intValue
    document.querySelector('#actionDecimalValue').innerHTML = decimalValue.toFixed(2)
}

/* {
    "PLANI": {
        "0": {
            "Serie": "*",
            "Razon Social": "PLANIGRUPO LATAM, S.A.B. DE C.V.",
            "ISIN": "MX01PL0P0007",
            "Bolsa": "BMV",
            "Tipo Valor Descripcion": "ACCIONES DE EMPRESAS COMERCIALES, INDUSTRIALES Y DE SERVICIOS",
            "Tipo Valor ID": "1",
            "Estatus": "ACTIVA",
            "Acciones en Circulacion": 331151874,
            "Rango Historicos": "2016/07/01 - 2023/09/18",
            "Rango Financieros": "1T_2017, 1T_2018, 1T_2019, 1T_2020, 1T_2021, 1T_2022, 1T_2023, 2T_2016, 2T_2017, 2T_2018, 2T_2019, 2T_2020, 2T_2021, 2T_2022, 2T_2023, 3T_2016, 3T_2017, 3T_2018, 3T_2019, 3T_2020, 3T_2021, 3T_2022, 4T_2016, 4T_2017, 4T_2018, 4T_2019, 4T_2020, 4T_2021, 4T_2022"
        }
    }
} */