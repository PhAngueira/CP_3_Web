# 🎬 Lista de Filmes Favoritos

Projeto desenvolvido para a disciplina de **Web Development**, utilizando apenas **HTML, CSS e JavaScript puro**.

## 📋 Sobre o Projeto

A aplicação simula um sistema simples de cadastro de filmes favoritos.

O usuário deve realizar login para acessar a lista e, após a autenticação, pode realizar todas as operações de CRUD:

* Adicionar filmes no final da lista
* Adicionar filmes no início da lista
* Visualizar todos os filmes cadastrados
* Editar filmes individualmente
* Remover filmes individualmente

---

## 🔑 Credenciais de Login

Utilize as seguintes credenciais para acessar o sistema:

**Usuário:** `aluno`

**Senha:** `fiap2025`

---

## ✅ Funcionalidades

### Login

* Validação de campos vazios
* Validação de usuário e senha
* Exibição de mensagens de erro na tela
* Liberação de acesso apenas com credenciais corretas

### CRUD de Filmes

* Listagem dinâmica dos filmes
* Adição de filmes no final da lista utilizando `push()`
* Adição de filmes no início da lista utilizando `unshift()`
* Edição individual utilizando `prompt()`
* Remoção individual utilizando `splice()`
* Confirmação de remoção utilizando `confirm()`

### Validações

* Não permite login com campos vazios
* Não permite adicionar filmes vazios
* Mantém o valor original caso a edição seja cancelada
* Mantém o valor original caso a edição seja confirmada vazia
* Atualização automática da interface após qualquer alteração

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)

---

## 📁 Estrutura do Projeto

```text
CP_3_WEB/
│
├── index.html
├── style.css
├── script.js
├── prompts.md

```

---

## 📚 Conceitos Aplicados

Durante o desenvolvimento foram utilizados os seguintes conceitos estudados em aula:

* Variáveis (`let` e `const`)
* Arrays
* Funções nomeadas
* Estruturas condicionais (`if` e `else`)
* Métodos de array:

  * `push()`
  * `unshift()`
  * `splice()`
  * `forEach()`
* Manipulação do DOM:

  * `querySelector()`
  * `addEventListener()`
  * `createElement()`
  * `textContent`
  * `append()`
  * `innerHTML`
* Interação com o usuário:

  * `prompt()`
  * `confirm()`

---

## 🚀 Como Executar

1. Faça o download ou clone este repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Abra o arquivo `index.html` em seu navegador.

3. Faça login utilizando:

```text
Usuário: aluno
Senha: fiap2025
```

4. Utilize o sistema para gerenciar sua lista de filmes favoritos.

---

## 👨‍💻 Autor

**Paulo Henrique**

Projeto desenvolvido para fins acadêmicos na disciplina de Web Development.
