# WeatherNow
## Teste para desenvolvedor Front-End da Conta-Azul

Este documento tem por objetivo de conter instruções de como rodar corretamente o projeto.

### Tecnologias utilizadas:

* HTML5
* SASS/CSS3
* AngularJs 1.6
* Karma/Jasmine
* Gerenciamento de branchs com GitFlow
* NodeJS
* Git
* Gulp
* NPM
* Python 2.7 (Pode ser necessário para instalar o sass)
* A estrutura foi inicial baseada num boilerplate colaborativo de angular 1.6 em que contribuo e ajudo a dar manutenção
* Design Patterns inspiradas no padrão de [John Pappa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/pt-BR.md)

### Instalação
Antes de clonar o projeto, é necessário instalar o csscomb, gulp-cli e karma-cli, para isso, abra o terminal de sua preferência e digite o seguinte comando:

```
npm install -g csscomb gulp-cli karma-cli
```

Clone o projeto em uma pasta da sua preferência a partir o link a seguir:

```
git clone https://github.com/juansaintclair/teste_conta_azul.git
```


Após clonar, entre na pasta do projeto e abra com o terminal de sua preferência e digitar o comando 

```
npm install
```

Este comando vai instalar todas as dependências necessárias para que o projeto funcione. Caso seja necessário instalar o Python 2.7, [clique aqui](https://www.python.org/ftp/python/2.7.14/python-2.7.14.msi).

### Rodando o projeto

Após a instalação das dependências, digite o comando a seguir para rodar o projeto em modo de desenvolvimento:

```
gulp
```

> O projeto pode ser rodado em desenvolvimento também com o comando **gulp serve:dev** ou **npm start**

Após rodar o comando, aguarde alguns instantes enquanto o servidor é levantado. Quando terminar, o seu navegador padrão abrirá automaticamente (caso não abra acesso pelo endereço [http://localhost:3000](http://localhost:3000))

Para criar uma pasta com os arquivos necessários sem rodar o projeto, basta rodar o comando:

```
gulp build:dev
```

Após alguns instantes, será criada uma pasta **_dev** na raiz, onde estarão todos os arquivos necessários para rodar o projeto.

### Testes Unitários

Para rodar os testes unitários, deve-se executar o seguinte comando no terminal:

```
gulp test
```

> Testes unitários podem ser rodados também com o comando **npm run coverage**

### Produção
É possível rodar o projeto em modo **Produção**. Neste modo, os arquivos de estilos e scripts serão minificados e concatenados para ajudar a reduzir o tamanho final do projeto. 

```
gulp build:prod
```

Também é possível fazer um preview de como ficará o projeto rodando em produção.

```
gulp serve:prod
```

### Considerações Finais
Estou a disposição para quaisquer informações complementares.