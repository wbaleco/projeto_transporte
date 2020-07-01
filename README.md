
# Git remote
### *git remote add origin https://github.com/wbaleco/projeto_transporte.git*

# criar arquivo package.json
## *npm init -y*

# instalar next 
## *npm install next*

# instalar react
## *npm install react*

# instalar react-dom
## *npm install react-dom*

### Inserir o seguinte script no arquivo package.json
 "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }

  ### Criar uma pasta pages 
  * Dentro da pasta pages criar o arquivo index.js
  * No arquivo index inserir o seguinte código

function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage

## Executando o projeto
### *npm run dev*

## Instalar o ReactStrap
### *npm install --save reactstrap*

## Instalar o suporte ao css

### *https://github.com/vercel/next-plugins/tree/master/packages/next-css*
### *npm install --save @zeit/next-css*

Crie um arquivo chamado next.config.js na raiz do seu projeto,
### next.config.js
adicione o seguinte código: 

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
})




