# Template para Projetos AngularJS
## Início

Antes de tudo vocês precisam instalar o [Node JS](https://nodejs.org/en/). O primeiro [vocês precisam entrar no site](https://nodejs.org/en/) e baixar a última versão e instalar (atenção, podem haver problemas para instalação dos pacotes do node_modules na versão 10 do node, então é aconselhável instalar até a versão 9.9.0). Para usuários Linux e Mac o procedimento é mais fácil usando apt-get ou Brew.

Depois que o Node JS estiver instalado, rode o comando abaixo:

npm install -g csscomb gulp-cli karma-cli

Depois disso faça o clone do projeto:

## Nome do Projeto

Percebam que o package.json possui um nó chamado name com o valor "name". Altere esse nome para o projeto que vocês criarem.

## Constantes
Por ser um template, este projeto contém algumas constantes que precisam ser modificadas.
Confira a lista e modifique as constantes de acordo com as necessidades do seu projeto:

* Buscar todas as ocorrências de '@todo' e substituir por valores válidos
* gulp-tasks/config.js modificar o valor do nó: projectModule. ex: 'MUDAR.NOME.DO.MODULO' > 'cliente.projeto.modal'
* Modificar o nome do módulo em todos os arquivos js do projeto. ex: 'MUDAR.NOME.DO.MODULO' > 'cliente.projeto.modal'

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

### Build do projeto

Depois que o projeto estiver pronto para subir para homologação, rode o build do projeto, que fará com que os arquivos CSS's e JS's fiquem todos concatenados e minificados. Rode um dos comandos abaixo:

```
gulp build:dev
gulp build:hmg
gulp build:prod
```

Claro, você não rodará os três, somente um deles. Dependendo de qual você tenha rodado ele vai gerar uma pasta chamada **.dev/** para ambiente de desenvolvimento, **.hmg/** para ambiente de homologação e **.prod/** para o ambiente de produção.

Caso você não tenha acesso para fazer o deploy ou o projeto ainda não tenha Integração Contínua, você tem que zipar a pasta e enviar para o responsável fazer o deploy.

## Services

Todos os projetos terão dois services obrigatórios nesse base template, o de configuração e o de storage (session e local storage).

Cada componente (páginas, etc) pode ter um service em específico que não serão adicionados nessa pasta e sim na própria pasta do componente/página.

## Fontes

Adicionar as fontes dentro da pasta **/src/assets/fonts** e não esquecer de colocar o font-face dentro do arquivo /sass/components/_fonts.sass seguindo o exemplo abaixo:

```
@font-face
	font-family: "NOMEDAFONTE"
	src: url("../fonts/NOMEDAFONTE.eot") format("eot")
	src: url("../fonts/NOMEDAFONTE.woff2") format("woff2"), url("../fonts/NOMEDAFONTE.woff") format("woff"), url("../fonts/NOMEDAFONTE.svg#NOMEDAFONTE") format("svg")
```

## Componentes e Diretivas

Existe já um padrão de diretiva e de componente criada, prestem muita atenção. Elas foram criadas a partir do modelo criado pelo [John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). Prestar atenção principalmente nas dependências que são diferentes dentro de uma diretiva e num componente. É só editar o arquivo de exemplo que tem no projeto e alterar o nome.

### Update

Lançaram a [versão em português do manual do John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md).

## Filtros

Existe já um padrão de filtro, prestem muita atenção. Segue o mesmo padrão anterior do [John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). Geralmente os filtros não possuem dependências.

## Controllers e estrutura

Os Controllers ficarão dentro da estrutura do projeto, dentro da feature. Por exemplo, se tiver uma feature chamada **search**, ela será uma pasta que vai conter os seguintes arquivos:

```
/src/pages/search/search.controller.js
/src/pages/search/search.template.html
```

Lembrando sempre de colocar a view corretamente nas rotas do projeto.

## Rotas

Usaremos o [ui-route](https://github.com/angular-ui/ui-router). Ele trabalha com states, com isso, não precisamos alterar as rotas caso a url mude. Olhem a documentação e prestem muita atenção nisso.

E colocamos a rota de cada componente/página dentro do diretório dela, junto com sua view, controller, SASS e afins.

