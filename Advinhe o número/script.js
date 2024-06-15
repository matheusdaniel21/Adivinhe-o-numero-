let resul = Math.floor(Math.random() * 10);


function guess (){

    let change = document.getElementById("text");
    let number = document.getElementById("value").value;

    if (number > resul){
        change.innerHTML += "<p>Você digitou " + number + ". Meu número é <strong> MENOR </strong></p>"
    }
    
    if (number < resul){
        change.innerHTML += "<p>Você digitou " + number + ". Meu número é <strong> MAIOR </strong></p>"
    }
    
    if (number == resul){
        change.innerHTML += "<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o número " + resul + ".</p>"
        document.getElementById("action").remove();
    }
}