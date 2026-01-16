/* ---1. Objetos e Dados--- */
const heroi = {
    nome: "Rafael",
    classe: "Aspirante a Dev",
    nivel: 5,
    xp: 0,
};

const projetos = [
    {
        titulo: "O primeiro site que criei em grupo",
        descricao: "Página criada no processo trainee",
        link: "index.html"
    },
    {
        titulo: "O primeiro site que fiz sozinho",
        descricao: "É um site motivacional para pessoas LGBTQ+",
        link: "pride.html"
    },
    {
        titulo: "Vídeo em 3D no YouTube usando o Blender",
        descricao: "Inspirado nas Backrooms e na artista Yayoi Kusama",
        link: "https://www.youtube.com/watch?v=JgHjjIiH95A"
    }
];

/*---2. Seletores DOM---*/
const spanNome   = document.querySelector("#hero-nome");
const spanClasse = document.querySelector("#hero-classe");
const spanNivel  = document.querySelector("#hero-nivel");
const spanXp     = document.querySelector("#hero-xp");
const btnXp      = document.querySelector("#btn-xp");

function renderizarHeroi() {
    if (spanNome) spanNome.textContent = heroi.nome;
    if (spanClasse) spanClasse.textContent = heroi.classe;
    if (spanNivel) spanNivel.textContent = heroi.nivel;
    if (spanXp) spanXp.textContent = heroi.xp;
}

/*---3. Atualização de XP---*/
function verificarEvolucao() {
    // A cada 50 de XP o herói sobe de nível
    if (heroi.xp >= 50) {
        heroi.nivel += 1;
        heroi.xp = 0; // Reseta o XP após subir de nível
        heroi.vida += heroi.nivel * 20;
        heroi.mana += heroi.nivel * 15;
        
        alert(`⭐ EVOLUÇÃO! \n${heroi.nome} subiu para o nível ${heroi.nivel}! \nSua vida e mana aumentaram.`);
    }
    renderizarHeroi();
}

/*---4. Inicialização---*/


document.addEventListener("DOMContentLoaded", () => {
    console.log("Painel do Herói inicializado.");
    renderizarHeroi();
});


if (btnXp) {
    btnXp.addEventListener("click", () => {
        heroi.xp += 10;
        console.log(`XP aumentado: ${heroi.xp}`);
        verificarEvolucao();
    });
}

/* Simulação inicial*/
console.log("Total de projetos carregados:", projetos.length);
/*Novos Elementos do DOM */
const btnOraculo = document.querySelector("#btn-oraculo");

/* ---5. Consultas Assíncronas---*/
const URL_ORACULO = "https://api.adviceslip.com/advice";

async function consultarOraculo() {
    try {
      
        const resposta = await fetch(URL_ORACULO);
        const dados = await resposta.json();
        
       
        let conselho = dados.slip.advice;
        
        alert(`🔮 O Oráculo diz: \n\n"${conselho}"`);
    } catch (erro) {
        console.error("Erro na consulta:", erro);
        alert("O Oráculo está silenciante no momento... Tente novamente mais tarde.");
    }
}

if (btnOraculo) {
    btnOraculo.addEventListener("click", consultarOraculo);
}
/*---validação de formulário---*/
const formulario = document.querySelector("#contato form");


const feedback = document.createElement("p");
feedback.style.marginTop = "15px";
feedback.style.fontWeight = "bold";
formulario.appendChild(feedback); 

if (formulario) {
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();

    if (nome === "" || email === "") {
      feedback.textContent = "❌ Erro: Preencha nome e e-mail.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "✅ Sucesso!";
      feedback.style.color = "#3FCC10";

      
      formulario.reset();
      
 
      setTimeout(() => {
        feedback.textContent = "";
      }, 5000);
    }
  });
}