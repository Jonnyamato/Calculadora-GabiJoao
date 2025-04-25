function adicionarValor(valor){
    let input = document.getElementById("campo")
    input.value += valor
  }

function apagarValor(){
    let input = document.getElementById("campo")
    input.value = ''
}

function mostrarValor(){
    let input = document.getElementById("campo")
    input.value = eval(input.value)
}

function desligarLigar(){
    let input = document.getElementById("campo")
    
    if(input.style.background == "rgb(0, 0, 0)"){
        input.style.background = "rgb(135, 157, 136)"
    
    }else{
        input.style.background = "rgb(0, 0, 0)"
        input.value = ''
    }
}


