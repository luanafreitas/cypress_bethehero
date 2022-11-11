<h1 align="center">Aplicando conhecimentos de cypress com:</h1>
<p align="center">"Cypress: do zero ao reporte: Um projeto para aprender sobre o Cypress no Youtube"</p>

------------

## Como configurar o projeto

#### Baixe o projeto no Github, de preferência na branch do Vídeo 1 do Agilizei:
- Branch do vídeo 1: `https://github.com/samlucax/youtube-cypress/tree/video1`

1. No diretorio principal do seu projeto, instalar as dependências e abrir o Cypress Runner:
  - `npm init --yes`
  - `npm install -D cypress@4.1`
  - `./node_modules/.bin/cypress open`

2. Acessar o diretório backend, instalar as dependências e iniciar a api:
  - `cd backend` 
  - depois `npm install`
  - depois `npm start`

OBS.: Caso dê erro para rodar o back-end, você pode resolver aqui: `https://github.com/samlucax/youtube-cypress/issues/18`

3. Acessar o diretório frontend, instalar as dependências e iniciar o site:
  - `cd frontend`
  - depois `npm install`
  - depois `npm start`

## Como configurar o Allure para gerar Relatórios dos testes:

1. Instalar Allure Commandline 
Nome: allure-commandline
Documentação: https://www.npmjs.com/package/allure-commandline
Comando: npm install -g allure-commandline --save-dev

2. Instalar o cypress allure plugin
Nome: cypress-allure-plugin
Documentação: https://www.npmjs.com/package/@shelex/cypress-allure-plugin
Comando: npm i -D @shelex/cypress-allure-plugin

3. Para configurar o Allure, assista o video 4 do Agilizei:
- `https://www.youtube.com/watch?v=y3QZQF2wBW4`

4. Execute o Allure e gere os relatorios
Comando: npx cypress run --env allure=true
Comando: allure generate allure-results
Comando: allure open allure-report

## Vídeo aulas

O conteúdo aplicado aqui está disponivel para estudo no Youtube pelo canal Agilizei.

> ⚡️ **Acesse os vídeos aqui**: [youtube-cypress](https://www.youtube.com/playlist?list=PLnUo-Rbc3jjyx5BVnG8MB7vNd5ecu2yP1 "youtube-cypress")
