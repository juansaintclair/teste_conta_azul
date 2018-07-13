# Template para Projetos AngularJS
## Início

## Instalação

Depois de fazer o clone, copie o conteúdo e cole numa pasta diferente. Crie o repositório no TFS e depois commite tudo. Após isso, rode o comando a seguir no cmd, Gitbash ou Terminal:

```
npm install
```

Isso fará com que as dependências mínimas sejam instaladas. Cada projeto pode ter uma dependência específica que pode ser instalada pelo npm, isso vai depender do projeto e suas versões.

## Gulp

O Gulp estará disponível após a instalação. Nele conterá um start default para o projeto, com isso, os projetos em Angular não dependerão mais do Visual Studio, podendo rodar tanto em Linux quanto em Mac. Só ficará dependente das API's backend, como o Cubo e afins.

### Startando o projeto

Rode o comando abaixo:

```
gulp
```

Essa task padrão rodará a task `gulp serve:dev`, que criará um protótipo do ambiente de dev. Você pode fazer simulações para cada ambiente fazendo `gulp serve:hmg` e `gulp serve:prod`.
