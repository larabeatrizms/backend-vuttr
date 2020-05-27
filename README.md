<p align="center">
  <a href="" rel="noopener">
 <img width=150px height=150px src="https://image.flaticon.com/icons/svg/912/912633.svg" alt="Backend para aplicação VUTTR"></a>
</p>

<h3 align="center">Backend para aplicação VUTTR</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/larabeatrizms/backend-vuttr">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/larabeatrizms/backend-vuttr">
  
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/larabeatrizms/backend-vuttr">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/larabeatrizms/backend-vuttr">

</div>

---

<p align="center"> Projeto contruído com conhecimentos em Node.js e Typescript. Projeto focado nos princípios dos SOLID, DDD e TDD. 
    <br>
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Deploy](#deploy)
- [Testes](#tests)
- [Uso](#usage)
- [Construído utilizando](#built_using)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

API e banco de dados para a aplicação VUTTR (Very Useful Tools to Remember). A aplicação é um repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

Aplicação com conceitos e metodologias aplicadas, tais como DDD, SOLID e TDD. O **DDD**(Domain Driven Design) é uma metodologia de desenvolvimento que pode ser utilizada para arquitetura do projeto. O que vamos utilizar dessa metodologia, são os padrões, boas práticas e conceitos no backend. O **TDD**(Test Driven Development): é uma metodologia de desenvolvimento e pode ser utilizado junto com DDD. Pode ser aplicado tanto no Back quanto no Front. Essa metodologia tem a característica de criar testes antes de criar a funcionalidade em si. O **SOLID** é um acrônimo criado por Michael Feathers que representa os 5 princípios da programação orientada a objetos. Princípios esses que são SRP, OCP, LSP, ISP, DIP. Utilizei no projeto os principios SRP(Single Responsability Principle), LSP(Liskov Substitution Principle) e DIP(Dependency Inversion Principle).

A API está documentada, [nesse link](https://app.swaggerhub.com/apis/larabeatrizms/api-vuttr/1.0.0).

Criado com requisitos baseados no desafio da [Bossa Box](https://app.bossabox.com/).

## 🏁 Iniciando <a name = "getting_started"></a>

### Rotas da Aplicação

- **`POST /tools`**: Rota para cadastrar uma nova ferramenta. O corpo da requisição deve conter as informações da ferramenta a ser cadastrada, sem o ID (gerado automaticamente pelo servidor).

- **`GET /tools`**: Rota para listar todas as ferramentas cadastradas.

- **`GET /tools?tag={tag}`**: Rota para listar ferramentas utilizando uma busca por tag, ou seja, filtrando as ferramentas de acordo com a tag recebida.

- **`DELETE /tools/{id}`**: Rota para deletar uma ferramenta.

- **`GET /api-docs`**: Rota com toda a documentação da API.

## 🚀 Deploy<a name = "deploy"></a>

Você pode utilizar a API, está aqui: `http://api-app-vuttr.herokuapp.com`

<!-- ![Deploy API](https://i.gyazo.com/a96c1e3481fab9909a8f76f4b10bc3ad.gif) -->

## Como contribuir?

Você pode utilizar esse projeto, para escalar a aplicação que mesmo com poucas rotas, a utilização do SOLID tornou possível a evolução da API de uma forma bem mais acessível.

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Installing

Executar na raiz do projeto o seguinte comando para instalar as dependências `yarn install` ou `npm install`

Para executar a API localmente, deve ter um container com Postgress com o nome correto para que o typeorm possa se conectar ao seu banco de dados.

## 🎈 Uso <a name="usage"></a>

```sh
yarn dev:server
```

## 🔧 Executando os testes <a name = "tests"></a>

```sh
yarn test
```

### Sobre os testes

Para essa aplicação, implementei os seguintes testes:

- **`should be able to create a new tool`**: Para que esse teste passe, a aplicação deve permitir que uma ferramenta seja criada, e retorne um json com a ferramenta criada.

- **`should be able to list the tools`**: Para que esse teste passe, a aplicação deve permitir que seja retornado um array contendo todas as ferramentas.

- **`should be able to list tools with tag filter`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as ferramentas que contém a tag passada na rota.

- **`should be able to delete a tool`**: Para que esse teste passe, a aplicação deve permitir deletar uma ferramenta.

- **`should not be able to delete a nonexistent tool`**: Para que esse teste passe, a aplicação não deve permitir deletar uma ferramenta que não exista.

## ⛏️ Construído utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Typeorm](https://typeorm.io/#/)
- [Postgress](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)

### Bibliotecas/Frameworks

- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [uuidv4](https://www.npmjs.com/package/uuidv4)

## ✍️ Authors <a name = "authors"></a>

👤 **Lara Beatriz**

- Twitter: [@LaraBeatrizMS](https://twitter.com/LaraBeatrizMS)
- Github: [@larabeatrizms](https://github.com/larabeatrizms)
- LinkedIn: [@larabeatrizms](https://linkedin.com/in/larabeatrizms)
