// Array contendo apenas strings
let filmes = [
    "Batman",
    "Barbie",
    "Avengers"
];

// Seleção dos elementos
const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");

const btnLogin = document.querySelector("#btnLogin");

const areaLogin = document.querySelector("#areaLogin");
const areaLista = document.querySelector("#areaLista");

const mensagemLogin = document.querySelector("#mensagemLogin");
const mensagemLista = document.querySelector("#mensagemLista");

const novoFilme = document.querySelector("#novoFilme");

const btnAdicionarFinal = document.querySelector("#btnAdicionarFinal");
const btnAdicionarInicio = document.querySelector("#btnAdicionarInicio");

const listaFilmes = document.querySelector("#listaFilmes");

// Eventos
btnLogin.addEventListener("click", verificarLogin);

btnAdicionarFinal.addEventListener(
    "click",
    adicionarFilmeFinal
);

btnAdicionarInicio.addEventListener(
    "click",
    adicionarFilmeInicio
);

// Funções

function mostrarMensagem(elemento, texto) {
    elemento.textContent = texto;
}

function verificarLogin() {

    let valorUsuario = usuario.value.trim();
    let valorSenha = senha.value.trim();

    if (valorUsuario === "" || valorSenha === "") {
        mostrarMensagem(
            mensagemLogin,
            "Preencha usuário e senha."
        );
        return;
    }

    if (
        valorUsuario === "aluno" &&
        valorSenha === "fiap2025"
    ) {
        mostrarMensagem(mensagemLogin, "");
        mostrarTelaLista();
    } else {
        mostrarMensagem(
            mensagemLogin,
            "Usuário ou senha inválidos."
        );
    }
}

function mostrarTelaLista() {
    areaLogin.style.display = "none";
    areaLista.style.display = "block";

    renderizarFilmes();
}

function adicionarFilmeFinal() {

    let filme = novoFilme.value.trim();

    if (filme === "") {
        mostrarMensagem(
            mensagemLista,
            "Digite um filme."
        );
        return;
    }

    filmes.push(filme);

    novoFilme.value = "";

    mostrarMensagem(mensagemLista, "");

    renderizarFilmes();
}

function adicionarFilmeInicio() {

    let filme = novoFilme.value.trim();

    if (filme === "") {
        mostrarMensagem(
            mensagemLista,
            "Digite um filme."
        );
        return;
    }

    filmes.unshift(filme);

    novoFilme.value = "";

    mostrarMensagem(mensagemLista, "");

    renderizarFilmes();
}

function editarFilme(indice) {

    let novoNome = prompt(
        "Digite o novo nome do filme:",
        filmes[indice]
    );

    if (novoNome === null) {
        return;
    }

    novoNome = novoNome.trim();

    if (novoNome === "") {
        return;
    }

    filmes[indice] = novoNome;

    renderizarFilmes();
}

function removerFilme(indice) {

    let resposta = confirm(
        "Deseja remover este filme?"
    );

    if (resposta === true) {

        filmes.splice(indice, 1);

        renderizarFilmes();
    }
}

function renderizarFilmes() {

    listaFilmes.innerHTML = "";

    filmes.forEach(function (filme, indice) {

        let item = document.createElement("li");

        let texto = document.createElement("span");
        texto.textContent = filme;

        let btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";

        btnEditar.addEventListener(
            "click",
            function () {
                editarFilme(indice);
            }
        );

        let btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";

        btnRemover.addEventListener(
            "click",
            function () {
                removerFilme(indice);
            }
        );

        item.append(
            texto,
            btnEditar,
            btnRemover
        );

        listaFilmes.append(item);
    });
}