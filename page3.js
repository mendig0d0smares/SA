let res = document.getElementById('res')
let arr = []

function func_login() {
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    res.innerHTML = ` `
    if (usuario === " " || senha === " ") {
        res.innerHTML += "Preencha todos os requisitos!"
        console.log(arr)       
    } else {
        arr.push(usuario, senha)

        console.log(arr)

        res.innerHTML += `dados gravados`
    }
}