# Quiz

# Estudos backend

# Estudos Backend: CRUD de Contatos

Para este projeto de estudo de desenvolvimento backend, propomos a implementação de um CRUD de contatos. CRUD significa Create, Read, Update e Delete, ou seja, um sistema que permita criar, ler, atualizar e deletar contatos de uma lista.

Para desenvolver o CRUD, utilizaremos uma linguagem de programação do lado do servidor, como o NodeJs, e um banco de dados para armazenar as informações dos contatos, como o MongoDB.

## Funcionalidades do CRUD

O CRUD de contatos deve oferecer as seguintes funcionalidades:

### Criação de contatos

O usuário deve ser capaz de criar um novo contato, preenchendo um formulário com as informações básicas, como nome, sobrenome, telefone, e-mail, githubName, se a pessoa passar o githubName será necessário consultar a API do github para buscar o link da foto de perfil da pessoa, o link da foto deve ser salva na propriedade photo, juntamente com as outras propriedade.

### Leitura de contatos

O usuário deve ser capaz de visualizar todos os contatos cadastrados em uma lista, com a opção de buscar um contato específico pelo nome.

### Atualização de contatos

O usuário deve ser capaz de editar as informações de um contato já existente.

### Exclusão de contatos

O usuário deve ser capaz de excluir um contato já cadastrado.

## Requisitos técnicos

Para a implementação do CRUD, é necessário ter conhecimento em:

- Linguagem de programação do lado do servidor, como NodeJs;
- Banco de dados, como MongoDB;

## Conclusão

Com este projeto, será possível praticar habilidades em desenvolvimento backend e criar um sistema funcional e útil para gerenciamento de contatos.

## Arquitetura do projeto utilizando MVC

Para implementação do CRUD de contatos propomos a seguinte arquitetura utilizando o padrão MVC:

### Backend

- Utilização do NodeJs como linguagem de programação do lado do servidor;
- Utilização do framework Express para criação das rotas e middlewares;
- Utilização do banco de dados MongoDB para armazenamento das informações dos contatos;
- Utilização do Mongoose como ODM (Object Data Modeling) para facilitar a conexão com o banco de dados e criação dos modelos.

### Model

Na camada de modelos, serão criados os schemas dos contatos, que definem a estrutura e tipos de dados que serão armazenados no banco de dados.

### Controller

Na camada de controle, serão criados os endpoints que irão receber as requisições HTTP, processar os dados e enviar as respostas.

### View

Não será necessário criar uma camada de visualização para este projeto, já que não haverá interface gráfica.

Com essa arquitetura será possível criar um sistema funcional e escalável para gerenciamento de contatos, seguindo as boas práticas do padrão MVC.
