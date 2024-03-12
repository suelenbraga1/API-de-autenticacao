# servico-de-autenticacao

Teste Técnico Modular - .NET Core, Entity Framework, Migrations, SQL-Server e Front-end Angular.

Uma API que busca no banco de dados um usuário e senha com base nas informações fornecidas pela requisição.
Formulário de login e senha, conforme a informação inserida, o backend é requisitado. Dependendo do retorno, uma mensagem referente ao status é exibida na tela.

Instruções:
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



