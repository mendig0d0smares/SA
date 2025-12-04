
function calcularOhm() {
    let R = document.getElementById("R").value;
    let I = document.getElementById("I").value;
    let V = document.getElementById("V").value;
    let res = document.getElementById("res");

    res.innerHTML = "";
    
    // calcular R
    if (R === "" && I !== "" && V !== "") {
        let resistencia = Number(V) / Number(I);
        res.innerHTML = `Resistência = ${resistencia} Ω`;
    }
    // calcular I
    else if (I === "" && R !== "" && V !== "") {
        let corrente = Number(V) / Number(R);
        res.innerHTML = `Corrente = ${corrente} A`;
    }
    // calcular V
    else if (V === "" && I !== "" && R !== "") {
        let voltagem = Number(I) * Number(R);
        res.innerHTML = `Voltagem = ${voltagem} V`;
    }
    else {
        res.innerHTML = "Preencha APENAS 2 campos e deixe o terceiro vazio.";
    }
}


function calcular_potencia() {
    let res = document.getElementById("res2");
    
    let R = document.getElementById("R2").value;
    let V = document.getElementById("V2").value;
    let I = document.getElementById("I2").value;

    res.innerHTML = "";

    // Cálculo com campos vazios detectados corretamente

    // P = V * I
    if (R === "" && V !== "" && I !== "") {
        let P = Number(V) * Number(I);
        res.innerHTML = `Potência = ${P} W`;
    }

    // P = V² / R
    else if (I === "" && V !== "" && R !== "") {
        let P = (Number(V) * Number(V)) / Number(R);
        res.innerHTML = `Potência = ${P} W`;
    }

    // P = I² * R
    else if (V === "" && I !== "" && R !== "") {
        let P = (Number(I) * Number(I)) * Number(R);
        res.innerHTML = `Potência = ${P} W`;
    }

    else {
        res.innerHTML = "Preencha APENAS 2 campos e deixe o terceiro vazio.";
    }
}

