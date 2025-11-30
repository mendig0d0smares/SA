
function calcularOhm() {
    let R = Number(document.getElementById('R').value)
    let I = Number(document.getElementById('I').value)
    let V = Number(document.getElementById('V').value)
    let res = document.getElementById('res')

    res.innerHTML = ` `

    if (R === 0 && I > 0 && V > 0) {
        R = V / I
        res.innerHTML += `resistencia = ${R}Ω`
    }

    else if (I === 0 && R > 0 && V > 0) {
        I = V / R
        res.innerHTML += `corrente = ${I}A`
    }

    else if (V === 0 && I > 0 && R > 0) {
        V = I * R
        res.innerHTML += `voltagem = ${V}W`

    } else {
        res.innerHTML += `preencha APENAS 2 VALORES e deixe em branco o valor em que deseja calcular`
    }
}


        function calcular_potencia() {
            let res = document.getElementById("res2");
        let R = Number(document.getElementById("R2").value);
        let V = Number(document.getElementById("V2").value);
        let I = Number(document.getElementById("I2").value);
        let P = 0

        res.innerHTML = ` `

        if (R === 0 && I > 0 && V > 0) {
            P = V * I;
            res.innerHTML += `Potência = ${P}W`
        }

        else if (I === 0 && R > 0 && V > 0) {
            P = (V * V) / R;
            res.innerHTML += `Potência = ${P}W`
        }

        else if (V === 0 && I > 0 && R > 0) {
            P = (I * I) * R;
            res.innerHTML += `Potência = ${P} W`
        }

        else {
            res.innerHTML += `preencha APENAS 2 VALORES e deixe em branco o valor em que deseja calcular`
        }
        console.log(P)
    }


