# servico-de-autenticacao
Uma API que busca no banco de dados um usuário e senha com base nas informações fornecidas pela requisição.
Formulário de login e senha, conforme a informação inserida, o backend é requisitado. Dependendo do retorno, uma mensagem referente ao status é exibida na tela.

Instruções:
Configurações SQLServer - Na classe appsettings.json, na propriedade ConnectionStrings, realizar as seguintes alterações:
- Data Source inserir o nome do servidor em questão.
- Initial Catalog inserir o nome do banco de dados utilizado.

Configuração do EF Migrations - No terminar do VS Code, na pasta ../Projeto/backend executar o seguinte comando: dotnet tool install --global dotnet-ef para garantir que o Entity Framework está instalado corretamente, em seguida executar dotnet ef database update para atualizar o banco de dados com as migrations do projeto.

Execução backend - No terminal do VS Code, executar o comando dotnet run na pasta ../servico-autenticacao-main 
Execução frontend - No prompt de comando do windows, executar os seguintes comandos em ordem: npm instal e em seguida ng serve na pasta ../servico-autenticacao-main 


