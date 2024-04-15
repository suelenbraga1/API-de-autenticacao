# servico-de-autenticacao

📄 Teste Técnico Modular - Implemente um serviço de autenticação utilizando .NET Core.

🏁 Visão Geral:

Uma API que busca no banco de dados um usuário e senha com base nas informações fornecidas pela requisição.
Formulário de login e senha, conforme a informação inserida, o backend é requisitado. Dependendo do retorno, uma mensagem referente ao status é exibida na tela.

🏁 Requisitos Funcionais:

Desenvolva um sistema de registro e login de usuário.
Utilize obrigatoriamente o Entity Framework Core para a integração com o banco de dados.
Integre o serviço de autenticação com um banco de dados SQL.
Desenvolva um front-end em Angular que se comunique com o serviço de autenticação.
Crie páginas de registro e login que interagam com a API criada.

📁 Página:

O site possui uma página, que é:

Home: A página principal é a única do projeto e apresenta um formulário de login e senha.



🚀 Tecnologias:

.NET Core 
Entity Framework
Migrations
SQL-Server
Angular(front-end)



✅ Instruções:

Configurações SQLServer - Na classe appsettings.json, na propriedade ConnectionStrings, realizar as seguintes alterações:
- Data Source inserir o nome do servidor em questão.
- Initial Catalog inserir o nome do banco de dados utilizado.

Configuração do EF Migrations - No terminar do VS Code, na pasta ../servico-de-autenticacao-main executar o seguinte comando: dotnet tool install --global dotnet-ef para garantir que o Entity Framework está instalado corretamente, em seguida executar dotnet ef database update para atualizar o banco de dados com as migrations do projeto.

Comandos SQL para criar "clientes de teste":

INSERT INTO Cliente (Login, Senha)
VALUES ('antonio', '123412');

INSERT INTO Cliente (Login, Senha)
VALUES ('maria', 'abcdef');

Execução backend - No terminal do VS Code, executar o comando dotnet run na pasta ../servico-de-autenticacao-main 

Execução frontend - No prompt de comando do windows, executar os seguintes comandos em ordem: npm install e em seguida ng serve na pasta ../servico-de-autenticacao-main 

![image](https://github.com/suelenbraga1/API-de-autenticacao/assets/140122120/05237b4a-6635-4ab9-9cd9-3df0fd7ebe20)




