
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


