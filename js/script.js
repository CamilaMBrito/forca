let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;

/* Lista de palavras e sua categoria */
const palavras = [
    palavra001 = {
        nome: "INGLATERRA",
        CATEGORIA: "PAISES"
    },

    palavra002 = {
        nome: "RUSSIA",
        CATEGORIA: "PAISES"
    },

    palavra003 = {
        nome: "CHINA",
        CATEGORIA: "PAISES"
    },

    palavra004 = {
        nome: "INDIA",
        CATEGORIA: "PAISES"
    },

    palavra005 = {
        nome: "JAPAO",
        CATEGORIA: "PAISES"
    },

    palavra006 = {
        nome: "COREIA",
        CATEGORIA: "PAISES"
    },
    
    palavra007 = {
        nome: "FRANCA",
        CATEGORIA: "PAISES"
    },

    palavra008 = {
        nome: "ISRAEL",
        CATEGORIA: "PAISES"
    },

    palavra009 = {
        nome: "PASQUITAO",
        CATEGORIA: "PAISES"
    },

    palavra010 = {
        nome: "BRASIL",
        CATEGORIA: "PAISES"
    },

    palavra011 = {
        nome: "ITALIA",
        CATEGORIA: "PAISES"
    },

    palavra012 = {
        nome: "EGITO",
        CATEGORIA: "PAISES"
    },

    palavra013 = {
        nome: "TURQUIA",
        CATEGORIA: "PAISES"
    },

    palavra014 = {
        nome: "IRA",
        CATEGORIA: "PAISES"
    },

    palavra015 = {
        nome: "INDONESIA",
        CATEGORIA: "PAISES"
    },

    palavra016 = {
        nome: "ALEMANHA",
        CATEGORIA: "PAISES"
    },

    palavra017 = {
        nome: "AUSTRALIA",
        CATEGORIA: "PAISES"
    },

    palavra018 = {
        nome: "AFRICA",
        CATEGORIA: "PAISES"
    },

    palavra019 = {
        nome: "ESPANHA",
        CATEGORIA: "PAISES"
    },

    palavra020 = {
        nome: "DINAMARCA",
        CATEGORIA: "PAISES"
    },

    palavra021 = {
        nome: "TAIWAN",
        CATEGORIA: "PAISES"
    },

    palavra022 = {
        nome: "UCRANIA",
        CATEGORIA: "PAISES"
    },

    palavra023 = {
        nome: "CANADA",
        CATEGORIA: "PAISES"
    },

    palavra024 = {
        nome: "POLONIA",
        CATEGORIA: "PAISES"
    },

    palavra025 = {
        nome: "NORUEGA",
        CATEGORIA: "PAISES"
    },

    palavra026 = {
        nome: "BALEIA",
        CATEGORIA: "ANIMAIS"
    },

    palavra027 = {
        nome: "CACHORRO",
        CATEGORIA: "ANIMAIS"
    },

    palavra028 = {
        nome: "CAMELO",
        CATEGORIA: "ANIMAIS"
    },

    palavra029 = {
        nome: "ELEFANTE",
        CATEGORIA: "ANIMAIS"
    },

    palavra030 = {
        nome: "FOCA",
        CATEGORIA: "ANIMAIS"
    },

    palavra031 = {
        nome: "FLAMINGO",
        CATEGORIA: "ANIMAIS"
    },

    palavra032 = {
        nome: "GOLFINHO",
        CATEGORIA: "ANIMAIS"
    },

    palavra033 = {
        nome: "GUAXINIM",
        CATEGORIA: "ANIMAIS"
    },

    palavra034 = {
        nome: "HIPOPOTAMO",
        CATEGORIA: "ANIMAIS"
    },

    palavra035 = {
        nome: "HIENA",
        CATEGORIA: "ANIMAIS"
    },

    palavra036 = {
        nome: "IGUANA",
        CATEGORIA: "ANIMAIS"
    },

    palavra037 = {
        nome: "JAGUAR",
        CATEGORIA: "ANIMAIS"
    },

    palavra038 = {
        nome: "JACARE",
        CATEGORIA: "ANIMAIS"
    },

    palavra039 = {
        nome: "LEAO",
        CATEGORIA: "ANIMAIS"
    },

    palavra040 = {
        nome: "MACACO",
        CATEGORIA: "ANIMAIS"
    },

    palavra041 = {
        nome: "OVELHA",
        CATEGORIA: "ANIMAIS"
    },

    palavra042 = {
        nome: "PAPAGAIO",
        CATEGORIA: "ANIMAIS"
    },

    palavra043 = {
        nome: "CAVALO",
        CATEGORIA: "ANIMAIS"
    },

    palavra044 = {
        nome: "RAPOSA",
        CATEGORIA: "ANIMAIS"
    },

    palavra045 = {
        nome: "RATO",
        CATEGORIA: "ANIMAIS"
    },

    palavra046 = {
        nome: "TARTARUGA",
        CATEGORIA: "ANIMAIS"
    },

    palavra047 = {
        nome: "VEADO",
        CATEGORIA: "ANIMAIS"
    },

    palavra048 = {
        nome: "VACA",
        CATEGORIA: "ANIMAIS"
    },

    palavra049 = {
        nome: "URUBU",
        CATEGORIA: "ANIMAIS"
    },

    palavra050 = {
        nome: "ZEBRA",
        CATEGORIA: "ANIMAIS"
    },

    palavra051 = {
        nome: "ABACAXI",
        CATEGORIA: "FRUTAS"
    },

    palavra052 = {
        nome: "ABACATE",
        CATEGORIA: "FRUTAS"
    },

    palavra053 = {
        nome: "AMORA",
        CATEGORIA: "FRUTAS"
    },

    palavra054 = {
        nome: "BANANA",
        CATEGORIA: "FRUTAS"
    },

    palavra055 = {
        nome: "CAJU",
        CATEGORIA: "FRUTAS"
    },

    palavra056 = {
        nome: "CARAMBOLA",
        CATEGORIA: "FRUTAS"
    },

    palavra057 = {
        nome: "DAMASCO",
        CATEGORIA: "FRUTAS"
    },

    palavra058 = {
        nome: "FRAMBOESA",
        CATEGORIA: "FRUTAS"
    },

    palavra059 = {
        nome: "GRAVIOLA",
        CATEGORIA: "FRUTAS"
    },

    palavra060 = {
        nome: "GROSELHA",
        CATEGORIA: "FRUTAS"
    },

    palavra061 = {
        nome: "JABUTICABA",
        CATEGORIA: "FRUTAS"
    },

    palavra062 = {
        nome: "KIWI",
        CATEGORIA: "FRUTAS"
    },

    palavra063 = {
        nome: "LICHIA",
        CATEGORIA: "FRUTAS"
    },

    palavra064 = {
        nome: "MELANCIA",
        CATEGORIA: "FRUTAS"
    },

    palavra065 = {
        nome: "PESSEGO",
        CATEGORIA: "FRUTAS"
    },

    palavra066 = {
        nome: "ROMA",
        CATEGORIA: "FRUTAS"
    },

    palavra067 = {
        nome: "SERIGUELA",
        CATEGORIA: "FRUTAS"
    },

    palavra068 = {
        nome: "TANGERINA",
        CATEGORIA: "FRUTAS"
    },

    palavra069 = {
        nome: "UVA",
        CATEGORIA: "FRUTAS"
    },

    palavra070 = {
        nome: "FIGO",
        CATEGORIA: "FRUTAS"
    },

    palavra071 = {
        nome: "GOIABA",
        CATEGORIA: "FRUTAS"
    },

    palavra072 = {
        nome: "LARANJA",
        CATEGORIA: "FRUTAS"
    },

    palavra073 = {
        nome: "LIMAO",
        CATEGORIA: "FRUTAS"
    },

    palavra074 = {
        nome: "MAMAO",
        CATEGORIA: "FRUTAS"
    },

    palavra075 = {
        nome: "MARACUJA",
        CATEGORIA: "FRUTAS"
    },

    palavra076 = {
        nome: "ABAJUR",
        CATEGORIA: "OBJETOS"
    },

    palavra077 = {
        nome: "AGULHA",
        CATEGORIA: "OBJETOS"
    },

    palavra078 = {
        nome: "ALFINETE",
        CATEGORIA: "OBJETOS"
    },

    palavra079 = {
        nome: "ALGEMA",
        CATEGORIA: "OBJETOS"
    },

    palavra080 = {
        nome: "PORTA",
        CATEGORIA: "OBJETOS"
    },

    palavra081 = {
        nome: "GAVETA",
        CATEGORIA: "OBJETOS"
    },

    palavra082 = {
        nome: "JANELA",
        CATEGORIA: "OBJETOS"
    },

    palavra083 = {
        nome: "OCULOS",
        CATEGORIA: "OBJETOS"
    },

    palavra084 = {
        nome: "CHINELO",
        CATEGORIA: "OBJETOS"
    },

    palavra085 = {
        nome: "LAMPADA",
        CATEGORIA: "OBJETOS"
    },

    palavra086 = {
        nome: "RELOGIO",
        CATEGORIA: "OBJETOS"
    },

    palavra087 = {
        nome: "BELICHE",
        CATEGORIA: "OBJETOS"
    },

    palavra088 = {
        nome: "TAPETE",
        CATEGORIA: "OBJETOS"
    },

    palavra089 = {
        nome: "TECLADO",
        CATEGORIA: "OBJETOS"
    },

    palavra090 = {
        nome: "CELULAR",
        CATEGORIA: "OBJETOS"
    },

    palavra091 = {
        nome: "CADEADO",
        CATEGORIA: "OBJETOS"
    },

    palavra092 = {
        nome: "DESODORANTE",
        CATEGORIA: "OBJETOS"
    },

    palavra093 = {
        nome: "ENXADA",
        CATEGORIA: "OBJETOS"
    },

    palavra094 = {
        nome: "FLAUTA",
        CATEGORIA: "OBJETOS"
    },

    palavra095 = {
        nome: "GANGORRA",
        CATEGORIA: "OBJETOS"
    },

    palavra096 = {
        nome: "HIDRANTE",
        CATEGORIA: "OBJETOS"
    },

    palavra097 = {
        nome: "IMPRESSORA",
        CATEGORIA: "OBJETOS"
    },

    palavra098 = {
        nome: "MICROFONE",
        CATEGORIA: "OBJETOS"
    },

    palavra099 = {
        nome: "NOTEBOOK",
        CATEGORIA: "OBJETOS"
    },

    palavra100 = {
        nome: "PAQUEDAS",
        CATEGORIA: "OBJETOS"
    },
];

/* Realiza o sorteio das palavras que estão na lista */ 
criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].CATEGORIA;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

/* Apresenta a palavra sorteada e sua categoria na tela */
montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");

    categoria.innerHTML = palavraSecretaCategoria;

    const palavra = document.getElementById("palavra-secreta");

    palavra.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;";
            palavra.innerHTML = palavra.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }else{
            palavra.innerHTML = palavra.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>"
        }
    }
}

/* Verifica a letra escolhida e aplica a função mudarStyleLetra */
function verificaLetraEscolhida(letra){
    if (tentativas > 0){
        mudarStyleLetra("tecla-"+letra);
        comparaListas(letra);
        montarPalavraNaTela();
        document.getElementById("tecla-" + letra).disabled = true;
    }
    
}

/* Muda o estilo (cor de fundo) das letras para apresentar que aquela tecla já foi usada */
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background="#70160e";
}

/* Criando a função para trocar a imagem da forca quando errar a letra*/
function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--

        //Apresentando a imagem
        carregaImagemForca();

        if (tentativas == 0){
            abreModal("OPS!","Não foi dessa vez... A Palavra secreta era <br>" + palavraSecretaSorteada);
        }
       
    }else{

        /* Colocar a letra correta na tela */
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }
        
        let vitoria = true;
        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] != listaDinamica[i]){
                vitoria = false;
            }
        }

        if(vitoria == true){
            // Modal de parabéns
            abreModal("PARABÉNS!","Você venceu... ");
            tentativas = 0;
        }

}

/* Criando escolha/caso para trocar a imagem da forca a cada erro */
function carregaImagemForca(){
    switch(tentativas){
        case 5:  
            document.getElementById("imagem").style.background="url('./img/forca01.png')";
        break;

        case 4:
            document.getElementById("imagem").style.background="url('./img/forca02.png')";
        break;

        case 3:
            document.getElementById("imagem").style.background="url('./img/forca03.png')";
        break;

        case 2:
            document.getElementById("imagem").style.background="url('./img/forca04.png')";
        break;

        case 1:
            document.getElementById("imagem").style.background="url('./img/forca05.png')";
        break;

        case 0:
            document.getElementById("imagem").style.background="url('./img/forca06.png')";
        break;

        default:
            document.getElementById("imagem").style.background="url('./img/forca.png')";
        break;
    }
}

/* Aplicando a modal e suas informações */
function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;


    $("#myModal").modal({
        show: true
    });
}

/* Criando o botão de reiniciar */
let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function(){
    location.reload();
})