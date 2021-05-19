var nome = document.getElementById("nome");
var senha = document.getElementById("senha");

const Entrar = () => {
    var recebendoNome = nome.value;  //criar uma variavel para cada valor
    var recebendoSenha = senha.value;
     
    var nomeT = false; //variável recebe um valor false para poder ser utilizado adiante
    var senhaT = false;
        

    switch(recebendoNome){
        case "Livia":
            nomeT = true;
            console.log("Nome válido");
        break;

        default:
            alert("Nome inválido");
        break;
    }

    switch(recebendoSenha){
        case "142536":
            senhaT = true;
            console.log("Senha válida");
        break;

        default:
            alert("Senha inválida");
        break;

    }
    if(nomeT == true && senhaT == true){
        alert(`Bem vindo(a), ${recebendoNome}`);
    }
    if(!recebendoNome || !recebendoSenha){
        alert("Por favor, preencha todos os campos.");
    }
    console.log("Preocupa não")
}
