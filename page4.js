function gerarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function mat3x3() {
    let res = document.getElementById('res')

    let mat = []
    let n = 3, min = 1, max = 20

    for (let i = 0; i < n; i++) {
        mat[i] = []
        for (let j = 0; j < n; j++) {
            mat[i][j] = gerarAleatorio(min, max)
        }
    }

    console.table(mat)

    res.innerHTML = ""

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res.innerHTML += `${mat[i][j]} `
        }
        res.innerHTML += "<br>"
    }
}


function calc_imc() {
    let res = document.getElementById('res2')
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let imc = 0

    res.innerHTML = ` `

    imc = peso / (altura * altura)

    res.innerHTML += `imc = ${imc} `


}


function ordenar() {
    let res = document.getElementById('res3')

    let arrC = []
    let arrD = []

    for (let i = 1; i <= 20; i++) {
        arrC.push(i)
    }

    for (let i = 20; i >= 1; i--) {
        arrD.push(i)
    }
    res.innerHTML = ` `

    res.innerHTML += ` crescente: ${arrC} </br> decrescente: ${arrD}`
}

function ordenar_bubblesort() {
    let res = document.getElementById('res4')
    let n = 10
    let min = 1, max = 20
    let arr = []
    res.innerHTML = ` `

    for (let i = 0; i < n; i++) {
        arr.push(gerarAleatorio(min, max))
    }

    console.log(arr)

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }
    res.innerHTML += `array ordenado ${arr} `
    console.log(arr)
}


function temperatura(){
    let res = document.getElementById('res5')
    let F = Number(document.getElementById('C').value)
    let C = Number(document.getElementById('F').value)
    res.innerHTML = ``
    
    if(F === 0 && C > 0){
        F = (C * 9 / 5) + 32
        res.innerHTML += ` temperatura convertida em fahrenheit: ${F.toFixed(2)}`

    }else if(C === 0){
        C = (F - 32) * 5 / 9
        res.innerHTML += ` temperatura convertida em celsius: ${C.toFixed(2)}`

    }


}

function soma_arr(){
    let res = document.getElementById('res6')
    let min = 1, max = 220
    let n = 10
    let soma = 0 
    let arr = []
    res.innerHTML = ` `

    for (let i = 0; i < n; i++) {
        arr.push(gerarAleatorio(min, max))
        soma += arr[i] 
    }

    console.log(arr)
    console.log(soma)
    res.innerHTML += `array: ${arr} </br> soma dos elementos: ${soma} `

} soma_arr()