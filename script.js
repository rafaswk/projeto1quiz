const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual o nome científico do gato doméstico?",
        alternativas: ["Felis catus", "Felis leo", "Felis silvestris", "Panthera catus"],
        correta: 0,
        explicacao: "O nome científico do gato doméstico é Felis catus, diferente de outros felinos como o leão (Panthera leo)."
    },
    {
        enunciado: "Qual é a raça de gato sem pelos mais famosa?",
        alternativas: ["Siamês", "Persa", "Sphynx", "Maine Coon"],
        correta: 2,
        explicacao: "O Sphynx é famoso por não ter pelos, diferente de outras raças peludinhas."
    },
    {
        enunciado: "Por que os gatos ronronam?",
        alternativas: ["Sempre que estão doentes", "Para mostrar felicidade ou relaxamento", "Para assustar predadores", "Para chamar outros gatos"],
        correta: 1,
        explicacao: "O ronronar geralmente indica relaxamento e bem-estar, sendo um sinal de conforto."
    },
    {
        enunciado: "Qual desses alimentos não pode ser dado para gatos?",
        alternativas: ["Peixe cozido", "Ração própria para gatos", "Chocolate", "Frango cozido"],
        correta: 2,
        explicacao: "O chocolate é tóxico para os gatos, por isso nunca deve ser oferecido."
    },
    {
        enunciado: "Quantos dentes permanentes um gato adulto tem?",
        alternativas: ["20", "24", "30", "36"],
        correta: 2,
        explicacao: "Um gato adulto tem 30 dentes permanentes, usados tanto para mastigar quanto para se defender."
    },
    {
        enunciado: "Qual é o menor tempo estimado de gestação de uma gata?",
        alternativas: ["30 dias", "45 dias", "60 dias", "75 dias"],
        correta: 2,
        explicacao: "O tempo de gestação de uma gata é em torno de 60 dias, podendo variar um pouco."
    },
    {
        enunciado: "Qual é a expectativa média de vida de um gato doméstico bem cuidado?",
        alternativas: ["5 a 8 anos", "10 a 15 anos", "20 a 25 anos", "Mais de 30 anos"],
        correta: 1,
        explicacao: "Gatos domésticos bem cuidados vivem em média de 10 a 15 anos."
    },
    {
        enunciado: "Onde fica a famosa Ilha dos Gatos, onde vivem milhares de felinos soltos?",
        alternativas: ["China", "Egito", "Japão", "Itália"],
        correta: 3,
        explicacao: "A Ilha dos Gatos, no Japão, é famosa porque tem mais gatos do que pessoas!"
    },
    {
        enunciado: "Para que servem os bigodes do gato?",
        alternativas: ["Apenas para beleza", "Para medir espaços e se orientar", "Para atrair parceiros", "Para regular a temperatura"],
        correta: 1,
        explicacao: "Os bigodes ajudam os gatos a se orientar e perceber o ambiente ao redor."
    },
    {
        enunciado: "Qual é a principal diferença entre gatos domésticos e gatos selvagens da espécie Felis silvestris?",
        alternativas: ["Tamanho do corpo", "Cor dos olhos", "Comportamento e sociabilidade", "Número de dentes"],
        correta: 2,
        explicacao: "A maior diferença está no comportamento e na sociabilidade, pois o gato doméstico aprendeu a viver com humanos."
    }
];

let atual = 0;
let pontos = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach((texto, i) => {
        const botao = document.createElement("button");
        botao.textContent = texto;
        botao.addEventListener("click", () => respostaSelecionada(i));
        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(indice) {
    const perguntaAtual = perguntas[atual];
    const explicacao = document.createElement("p");
    explicacao.classList.add("explicacao");
    explicacao.textContent = perguntaAtual.explicacao;

    caixaAlternativas.appendChild(explicacao);

    if (indice === perguntaAtual.correta) {
        pontos++;
    }

    setTimeout(() => {
        atual++;
        mostraPergunta();
    }, 3000);
}

function mostraResultado() {
    const total = perguntas.length;
    const porcentagem = Math.round((pontos / total) * 100);
    caixaPerguntas.textContent = "Fim do Quiz!";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = `Você acertou ${pontos} de ${total} questões (${porcentagem}%).`;

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar Quiz";
    botaoReiniciar.addEventListener("click", reiniciarQuiz);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciarQuiz() {
    atual = 0;
    pontos = 0;
    textoResultado.textContent = "";
    mostraPergunta();
}

mostraPergunta();