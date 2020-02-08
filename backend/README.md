<h1 align="center">
  <img alt="MB Team" title="MB Team" src=".github/logotipo.png" width="200px" />
</h1>

<h2 align="center">
  MB Team
</h2>

<div align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/guiimariano/InternetBankingMT?color=2650a3">

  <img alt="License" src="https://img.shields.io/badge/licence-MIT-2650a3">

  <a href="https://github.com/guiimariano/InternetBankingMT/projects_store/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/guiimariano/InternetBankingMT?color=2650a3">
  </a>
</p>
</div>


## Table of contents

- [General info](#general-info)
- [About The Project](#about-the-project)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Commit Instructions](#Commit-Instructions)
- [Padronizando Commits](#Padronizando-Commits)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contributing](#contributing)
- [Contact](#contact)
- [Licence](#licence)

## General info

This project is like the final test of our knowleged and until where we can go and pratice every single line of code that we've learn each day in Avanade Academy program.

## About the project

> Project for pitch training presentation. It aims to set up some screens for an Internet Banking. Angular 8 front end with typescript, consuming APIs in NodeJS.
> .

## Screenshots

<!-- ![Example screenshot](./img/screenshot.png) -->

## Technologies

- Angular
- Typescript
- Nodejs
- Express
- SASS
- MongoDB
- Mongoose
- JWT
- Jwt-authentication
- Jwt-token
- Passport-strategy
- others will come here...

# Setup

1.

To use the project just give a git clone on the repo link. (Remembering that you need to have git installed on your PC).

2. Install the dependencies using the package manager of your choice

```
npm install

```

Ou

```
yarn
```

3. Configure the database, using [Atlas](https://www.mongodb.com/) if you don't have an account just create and follow the steps until you create a cluster.

4. Copy the `.env-sample` and rename as `.env`.

5. Get the link of the connection add in the file `.env` in the field`API_DB_URI` replace the`<username>`and`<password>`with your data, and port number too.

### NOTE: Do not commit or push sensitive data in public repositories. We use environment variables, put all sensitive data on the `.env` file.

6.  In the file `packege.json` you have the instructions for running the project.

## COMMIT INSTRUCTIONS

1.

Fork the repository on yours. <br>
then follow the instructions below.

```
❯ git init

❯ git config --global user.name "YOUR USERNAME"

❯ git config --global user.email "EMAIL GIT"

❯ git remote add origin "REPO LINK"

❯ git pull origin master
```

Ceate new brench, for prevent commites straight on the brench `master`

```
❯ git checkout -b dev
```

## PADRONIZANDO COMMITS

Nós vamos usar o `commitlint` e o `commitzen` para padronizar as mensagens de commit do Git.

1. `gaa` ou `git add --all` para adicionar os files para o commit.

2. `gc` ou `git commit` para adicionar a mensagem de commit. Depois do `git commit` abrirá uma caixa de dialogo com as instruções de commit.

3. Agora que esta tudo commitado basta dar um push. `git push origin dev`.

Não esquecendo que se seguiu as instruções criamos uma `brench` nova, então sempre vamos usar ela para fazer os nosso push's.

Para não ter que digitar sempre o mesmo comando podemos abreviar (já que a brench será sempre a dev).

```
❯ git push --set-upstream origin dev
```

## Status

Project is: _in progress_

 <!-- _finished_, _no longer continue_  -->

## Inspiration

<!-- Add here credits. Project inspired by..., based on... -->

## Contributing

We'll be very thankful if you are being interested on making this project better. we encourage everyone to help improve `mb-team` with new features, bug fixes and performance issues. Please treat this project as you would treat your own project.

## Contact

Created by [MB Team](https://github.com/marlb-team/InternetBankingMT) - feel free to contact us!

## Licence

MIT © [MB Team](https://github.com/marlb-team/InternetBankingMT)

:metal: :muscle:
