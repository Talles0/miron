document.getElementById("header-top").innerHTML = "Miron Calculador"

function erro(){
    window.location.reload()
}

function calcularIdade(){
    var dia_av, mes_av, ano_av, dia_nas, mes_nas, ano_nas, ano_bissexto, divisor
    var primeira_fracao, segunda_fracao, idade, idadeStr

    dia_av = Number(document.getElementById("dia-avaliacao").value)
    mes_av = Number(document.getElementById("mes-avaliacao").value)
    ano_av = Number(document.getElementById("ano-avaliacao").value)
    dia_nas = Number(document.getElementById("dia-nascimento").value)
    mes_nas = Number(document.getElementById("mes-nascimento").value)
    ano_nas = Number(document.getElementById("ano-nascimento").value)
    ano_bissexto = document.getElementById("ano-bissexto").checked


    if(ano_bissexto == false){
        divisor = 365
    } else {
        divisor = 365.25
    }

    mes_av = mes_av - 1
    dia_av = dia_av - 1
    mes_nas = mes_nas - 1
    dia_nas = dia_nas - 1

    primeira_fracao = mes_av * 30.3 + dia_av 
    segunda_fracao = mes_nas * 30.3 + dia_nas

    primeira_fracao = primeira_fracao / divisor
    segunda_fracao = segunda_fracao / divisor    
    

    if(segunda_fracao > primeira_fracao){
        idade = 1 - segunda_fracao + primeira_fracao + ano_av - ano_nas - 1
    } else {
        idade = segunda_fracao - primeira_fracao + ano_av - ano_nas
    }
    idadeStr = idade.toString()
    if (idade >= 100){
        idadeStr = idadeStr.slice(0, 7)
    }else{
        idadeStr = idadeStr.slice(0, 6)
    }
    document.getElementById("idade-real").innerHTML = idadeStr

    mes_av = mes_av + 1
    dia_av = dia_av + 1
    mes_nas = mes_nas + 1
    dia_nas = dia_nas + 1

    if (idade < 0 ||
    dia_av < 1 || dia_av > 31 ||
    dia_nas < 1 || dia_nas > 31 ||
    mes_av < 1 || mes_av > 12 ||
    mes_nas < 1 || mes_nas > 12 ||
    ano_av < 0 || ano_nas < 0) {
    alert("Insira dados válidos!")
    erro()
}
}

// function calcularImc() {
//     var peso = Number(document.getElementById("peso").value);
//     var altura = Number(document.getElementById("altura").value);

//     // Verifica se os valores são números válidos e positivos
//     if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
//         document.getElementById("imc-resultado").innerHTML = "Por favor, insira peso e altura válidos (positivos).";
//         return;
//     }

//     var imc = peso / Math.pow(altura, 2);
//     document.getElementById("imc-resultado").innerHTML = imc.toFixed(2);
// }