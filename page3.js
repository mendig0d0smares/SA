let res = document.getElementById('res')
let usuario = document.getElementById('usuario')
let senha = document.getElementById('senha')

function func_login() {
    let arr = []
    res.innerHTML += ` `
    if (usuario === " " || senha === " ") {
        res.innerHTML += "Preencha todos os requisitos!"
        console.log(arr)       
    } else {
        arr.push(usuario, senha)

        console.log(arr)

        res.innerHTML += `dados gravados`
    }
}