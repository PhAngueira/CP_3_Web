# prompts.md

## Inteligências Artificiais Consultadas

1. ChatGPT
2. Google Gemini
3. Claude

---

# Prompt Utilizado

Você é um professor de Desenvolvimento Web ajudando um aluno do 1º semestre de Engenharia de Software.

Preciso criar uma aplicação web simples para uma atividade da faculdade. Gere uma solução usando apenas conteúdos básicos de HTML, CSS e JavaScript puro, compatíveis com um aluno iniciante.

## Contexto do aluno

Até agora, nas aulas, aprendi principalmente:

* alert
* console.log
* prompt
* confirm
* let e const
* strings e template strings
* Number e parseFloat
* if, else if e else
* while, do while e for
* funções nomeadas
* return
* arrays
* push
* unshift
* splice
* forEach
* querySelector
* addEventListener
* innerHTML
* createElement
* textContent
* append
* manipulação simples do DOM

Evite usar recursos avançados que não estejam nessa lista.

Não use:

* frameworks
* bibliotecas externas
* localStorage
* classes
* módulos
* arrow functions
* map
* filter
* reduce
* operador ternário
* async/await
* fetch
* código complexo demais

## Objetivo da aplicação

Criar uma aplicação web com tema de lista de filmes favoritos.

A aplicação deve ter:

1. Tela de login
2. Tela com uma lista de filmes
3. CRUD completo da lista

## Arquivos obrigatórios

Separe o projeto em 3 arquivos:

* index.html
* style.css
* script.js

## Login

A aplicação deve começar mostrando apenas o formulário de login.

Credenciais corretas:

* Usuário: aluno
* Senha: fiap2025

Regras:

* Os campos de login não podem ser enviados vazios.
* Se estiverem vazios, mostrar mensagem de erro na tela.
* Se usuário ou senha estiverem errados, mostrar mensagem de erro na tela.
* Se o login estiver correto, ocultar a área de login e mostrar a área da lista.
* A mensagem de erro não deve aparecer apenas no console.

## Lista de filmes

Use obrigatoriamente um array de strings.

Exemplo:

let filmes = ["Batman", "Barbie", "Avangers"];

Não use objetos dentro do array.

A lista deve começar com pelo menos 3 filmes iniciais.

## Funcionalidades CRUD

Após o login, o usuário deve conseguir:

1. Ver todos os filmes na tela.
2. Adicionar um filme ao final da lista usando push.
3. Adicionar um filme ao início da lista usando unshift.
4. Editar qualquer filme individualmente.
5. Remover qualquer filme individualmente.

## Validações

* Não permitir adicionar filme vazio.
* Se tentar adicionar vazio, mostrar mensagem de erro na tela.
* Ao editar um filme, usar prompt.
* Se o usuário cancelar a edição, manter o filme original.
* Se o usuário confirmar com texto vazio, manter o filme original.
* Ao remover um filme, usar o índice da lista, não o texto do filme.
* A remoção deve ser feita com splice.
* Pode usar confirm antes de remover.

## Organização do JavaScript

A lógica deve estar organizada em funções nomeadas.

Exemplos de funções desejadas:

* verificarLogin
* mostrarTelaLista
* adicionarFilmeFinal
* adicionarFilmeInicio
* renderizarFilmes
* editarFilme
* removerFilme
* mostrarMensagem

Evite código solto fora de funções, exceto:

* declaração de variáveis
* seleção de elementos com querySelector
* addEventListener
* chamada inicial de renderização, se necessário

## Renderização

Toda vez que a lista mudar, a função renderizarFilmes deve ser chamada novamente.

Ela deve:

* limpar a lista com innerHTML = ""
* percorrer o array com forEach
* criar elementos li com createElement
* criar botões de editar e remover
* adicionar os elementos na tela com append

## Interface

Crie uma interface simples, organizada e fácil de explicar.

Use CSS básico:

* body
* container
* input
* button
* ul
* li
* classes simples para mensagens de erro

A interface deve parecer um projeto de faculdade de primeiro semestre, sem estilos avançados.

## Restrições importantes

* Utilize nomes simples de variáveis e funções.
* O código deve parecer feito por um aluno iniciante.
* Não utilize técnicas muito avançadas ou difíceis de explicar.
* Não utilize atalhos de código que prejudiquem a leitura.
* Priorize clareza e simplicidade.
* A solução deve ser fácil de apresentar em um vídeo de até 5 minutos.
* Sempre explique o motivo das decisões tomadas no código.

## Conferência dos requisitos

Antes de finalizar a resposta, confirme se todos estes itens foram atendidos:

* Login funcionando.
* Validação de campos vazios no login.
* Mensagem de erro visível na tela.
* Array contendo apenas strings.
* Pelo menos 3 filmes iniciais.
* Adicionar no final usando push.
* Adicionar no início usando unshift.
* Exibição dinâmica dos filmes.
* Edição individual.
* Remoção individual usando índice e splice.
* Validação para não salvar filme vazio.
* Manter valor original ao cancelar edição.
* Atualização automática da tela após alterações.
* HTML, CSS e JavaScript separados.

## Formato da resposta

Responda com:

1. Código completo do index.html
2. Código completo do style.css
3. Código completo do script.js
4. Explicação simples do funcionamento
5. Checklist mostrando quais requisitos foram atendidos
6. Um pequeno comentário que eu possa colocar no arquivo prompts.md explicando os pontos fortes e as limitações dessa solução

Importante:

A solução precisa parecer feita por um aluno iniciante do primeiro semestre, mas funcionando corretamente e respeitando todos os requisitos da atividade.

---

# Comentários Sobre as Respostas das IAs

## ChatGPT

### Principais problemas encontrados

A resposta inicial ficou boa e atendeu a maior parte dos requisitos, mas precisei conferir se todos os pontos do enunciado estavam sendo cumpridos. Também foi necessário ajustar alguns detalhes para deixar o código mais próximo do conteúdo visto em aula e evitar soluções avançadas demais.

### Pontos positivos

O ChatGPT gerou uma solução simples, organizada e compatível com HTML, CSS e JavaScript puro. A resposta utilizou funções nomeadas, array de strings, push, unshift, splice, forEach, createElement e append.

---

## Google Gemini

### Principais problemas encontrados

A resposta do Gemini apresentou uma boa estrutura visual, mas algumas partes ficaram mais elaboradas do que o necessário para um projeto de primeiro semestre. Também precisei verificar se as validações estavam exatamente de acordo com o enunciado.

### Pontos positivos

O Gemini separou corretamente os arquivos e apresentou uma interface organizada. A explicação também ajudou na comparação das soluções.

---

## Claude

### Principais problemas encontrados

A resposta do Claude foi bem explicada, mas a estrutura ficou um pouco mais complexa do que eu queria para a atividade. Algumas partes poderiam ser difíceis de explicar no vídeo de apresentação.

### Pontos positivos

O Claude apresentou uma solução funcional e bem organizada, com boa explicação da lógica utilizada.

---

# IA Escolhida Como Base

A IA escolhida como base foi o **ChatGPT**.

## Justificativa

Escolhi o ChatGPT porque foi a resposta que apresentou o melhor equilíbrio entre simplicidade, organização e atendimento aos requisitos da atividade.

O código ficou mais próximo do conteúdo estudado em aula, utilizando recursos como:

* querySelector
* addEventListener
* funções nomeadas
* arrays
* push
* unshift
* splice
* forEach
* createElement
* append
* prompt
* confirm

Além disso, a solução ficou fácil de entender, modificar e explicar durante o vídeo de apresentação.

Foram feitos pequenos ajustes no código final para garantir que todas as validações obrigatórias fossem atendidas e para deixar o projeto mais adequado ao nível de um aluno do primeiro semestre.