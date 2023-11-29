const btn = document.querySelector('.btn-nome');
const btn_verifica = document.getElementById("botao")
let nome, media, frequencia;

btn.addEventListener('click', ()=>{
    nome = prompt("Digite seu nome:", "Seu nome aqui");
    media = prompt("Digite sua média: (Apenas número)", "Sua média aqui");
    frequencia = prompt("Digite sua frequência: (Apenas número)", "Sua frequência aqui");
    document.querySelector("#campo_vazio_nome").innerHTML = nome;
    document.querySelector("#campo_vazio_nota").innerHTML = media;
    document.querySelector("#campo_vazio_frequencia").innerHTML = frequencia+"%";
})



function verificaSituacao(){
    if (media >= 60 && frequencia >= 85){
        document.querySelector("#campo_vazio_situacao").innerHTML = "Aprovado(a)"
    }else{
        document.querySelector("#campo_vazio_situacao").innerHTML = "Reprovado(a)"
    }
    
}