let idade = prompt ("Qual a sua Idade ?")
let isMaiorDeIdade = prompt("Já concluiu o ensino médio ? reponda sim ou não.")
let isCursandoOutraFaculdade = prompt("Está cursando alguma faculdade ? responda sim ou não.")

if (idade >= 18){
    console.log("A pessoa é maior de idade!")
} else {
    console.log("Você é de menor!!")
}

let resposta = isMaiorDeIdade
if(resposta === "sim"){
    console.log("Você concluiu o ensino médio!!!")
}
else if ( resposta === "não"){
    console.log("Você está cursando o ensino médio!")
}
else{console.log("Você digitou errado!")}


let resposta1 = isCursandoOutraFaculdade
if( resposta1 === "sim"){
    console.log("Você está cursando uma faculdade!!!")
}
else if ( reposta1 === "não"){
    console.log("Você não está cursando uma faculdade!")
}
else{
    console.log("você digitou errado!")
}

//let resposta = isMaiorDeIdade === true

//if(resposta)

