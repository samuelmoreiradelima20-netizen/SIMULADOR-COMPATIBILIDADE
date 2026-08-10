# SkillMatch JS

## Sobre o projeto

O SkillMatch JS é um simulador de compatibilidade entre o perfil de um candidato e vagas de emprego para Front-End Júnior.

O projeto analisa as habilidades do candidato, compara com os requisitos das vagas, calcula uma porcentagem de compatibilidade, identifica as habilidades que estão faltando e apresenta a vaga com maior compatibilidade.

## Funcionalidades

- Cadastro do perfil do candidato com nome e habilidades.
- Cadastro de vagas com empresa, cargo e requisitos.
- Comparação entre as habilidades do candidato e os requisitos das vagas.
- Identificação das habilidades encontradas e das habilidades faltantes.
- Cálculo da porcentagem de compatibilidade com cada vaga.
- Identificação da vaga com maior compatibilidade.
- Verificação se o candidato possui todas as habilidades exigidas por uma vaga.
- Simulação do carregamento das vagas utilizando Promise e async/await.
- Processamento das vagas utilizando callback.
- Contagem das análises utilizando uma closure.

## Tecnologias e conceitos utilizados

### Tecnologias

- JavaScript
- Node.js
- Git e GitHub
- Visual Studio Code

### Conceitos de JavaScript

- Variáveis e constantes
- Objetos e arrays
- Condicionais e operadores
- Funções e arrow functions
- Classes e construtores
- Herança e uso do `this`
- Métodos de arrays: `filter()`, `map()`, `find()`, `reduce()`, `every()` e `forEach()`
- Operador spread (`...`)
- Template literals
- Callbacks
- Promises
- `async/await`
- `setTimeout()`
- Closures


## Como executar

### Pré-requisitos

É necessário ter o Node.js instalado no computador.

### Passo a passo

1. Clone este repositório:
   ```bash
  git clone https://github.com/samuelmoreiradelima20-netizen/SIMULADOR-COMPATIBILIDADE.git
cd SIMULADOR-COMPATIBILIDADE
cd projeto-01
node simulador-compatibilidade.js

    ## Extensões do VS Code

As principais extensões utilizadas durante o desenvolvimento foram:

- **JavaScript (ES6) code snippets** — auxilia na escrita de código JavaScript com snippets.
- **Prettier - Code formatter** — auxilia na formatação e organização do código.

## Como a internet funciona

A internet é uma rede mundial que conecta computadores e dispositivos para permitir a troca de informações.

Quando um usuário acessa um site, o navegador envia uma solicitação para um servidor. O servidor processa essa solicitação e retorna uma resposta para o navegador.

O processo pode ser resumido da seguinte forma:

1. O usuário acessa um endereço no navegador.
2. O DNS encontra o endereço IP relacionado ao domínio.
3. O navegador envia uma requisição para o servidor.
4. O servidor processa a requisição.
5. O servidor envia uma resposta de volta.
6. O navegador interpreta os dados recebidos e apresenta o conteúdo ao usuário.

Protocolos como HTTP e HTTPS são utilizados para a comunicação entre cliente e servidor.


## Arquitetura cliente-servidor

A arquitetura cliente-servidor é um modelo em que o cliente solicita informações ou serviços e o servidor processa essas solicitações e retorna uma resposta.

### Cliente

O cliente é o dispositivo ou aplicação que faz a solicitação. Em aplicações web, normalmente é o navegador do usuário.

### Servidor

O servidor recebe as solicitações do cliente, processa as informações e envia uma resposta.

### Comunicação

A comunicação entre cliente e servidor normalmente acontece por meio de requisições e respostas utilizando protocolos como HTTP ou HTTPS.

No SkillMatch JS, não utilizamos um servidor real ou uma API externa. O projeto simula o carregamento de vagas com uma `Promise` e um `setTimeout()`, representando o tempo que poderia existir durante uma comunicação com um servidor.

Fluxo simplificado:

Cliente → Requisição → Servidor → Resposta → Cliente



## Repositório

O código-fonte completo do projeto está disponível no GitHub:

[🔗 Acessar o repositório do SkillMatch JS](https://github.com/samuelmoreiradelima20-netizen/SIMULADOR-COMPATIBILIDADE)

## Kanban

O planejamento e acompanhamento das tarefas foi realizado utilizando um quadro Kanban no GitHub:

[🔗 Acessar o Kanban do SkillMatch JS](https://github.com/users/samuelmoreiradelima20-netizen/projects/1)





