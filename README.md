
# Login Project

![Badge_Finalizado](https://img.shields.io/badge/Status-Finalizado-red?style=for-the-badge&logo=appveyor)

## Descrição.
Este é um projeto  simples de sistema de login que fornece uma API RESTful para gerenciar dados. 
Ele é construído usando Node.js e TypeScript, e utiliza o framework web Express.js, MySQL como banco de dados e JSON Web Tokens (JWT) para autenticação.

## Pré-requisitos.

Antes de executar este projeto, certifique-se de ter instalado o seguinte:

   - `Sistema Operacional Distribuição Unix`
   - `Node.js (versão 16.17.0 ou superior)`
   - `Docker (versão 23.0.6)`
   - `Docker-Compose (versão 2.18.0)`

## Orientações.
<details>
 <summary> <strong> ⚠️ Antes de começar a desenvolver </strong> </summary><br />
  
  1. Clone o repositorio.
  
  - Use o comando : `git@github.com:guigabriel/crud-project.git`.
  - Entre na pasta do repositório que acabou de clonar:
    - `cd crud-project`.
  
  
  2. Crie uma branch apartir da `master`.
   - Verifique se você está na branch `master`.
     - `git branch`.
   - Caso Você não esteja na branch `master`.
     - `git checkout master`
   - Agora crie a sua branch a qual você vai enviar seus `commits`.
   - Você deve seguir o seguinte formato `nome-github-nome-projeto`.
   - Exemplo: `git checkout -b guilherme-gabriel-crud-project`.
  
  
</details>

<details>
  <summary><strong> 🐋 Docker </strong> </summary><br />
  
  - ⚠️ Verifique se o docker e o docker-compose estão instalados.
  - caso não estejam:
    - [Docker](https://docs.docker.com/engine/install/)
    - [Docker-Compose](https://docs.docker.com/compose/install/)
   
  - Agora verifique as versões:
   ```bash
   docker -v
   docker-compose -v
   ```      
</details>

## Rodando o Projeto.


1. Utilize o comando `pwd` e verifique que você está dentro da pasta do projeto.


2. Utilize o comando `docker-compose up -d --build` para criar os contâiners.
 
 
3. Após os containers subirem você deve entrar no container `crud-api` assim:
   - `docker exec -it crud-api sh`.
 
 
4. Dentro do container você deve instalar as dependências do projeto:
   - `npm install`.
 
 
5. E por fim executar o projeto: 
   - `npm run dev`.


6. Para sair do container é só digitar `exit`.
7. Para derrubar os containers basta executar `docker-compose down`.


<strong> ⚠️IMPORTANTE</strong>
   - O comando `docker-compose up -d --build` deve ser utilizado APENAS NA PRIMEIRA VEZ QUE VOCÊ FOR SUBIR OS CONTAINERS.
   - Após a primeira vez o comando será apenas `docker-compose up -d`.


## Tecnologias utilizadas.

- `Node JS`
- `Typescript`
- `MySQL`
- `Docker`
- `Morgan`
- `Cors`
- `Jest`
- `eslint`
