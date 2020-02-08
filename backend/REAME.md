# SETUPT INICIAL

1. Para usar o projeto basta dar um git clone no link do repo. (Lembrando que precisa ter o git instalado).

2. Instalar as dependencias usando o gerenciador de pacotes de sua preferencia

```
npm install

```

Ou

```
yarn
```

3. Configurar o banco de dado, usando o [Atlas](https://www.mongodb.com/) se não tiver uma conta basta criar e seguir os passos até criar um cluster.

4. Pega o link da conexão adiciona no file `./backend/src/app.ts` no campo`URI` substitua o `<username>` e `<password>` pelos seus dados.

### OBS: N sobe os seus dados em repositorios publicos. Vamos usar variaveis de ambiente, por agora por ser ainda os testes vai ser desse jeito.

5.  No file `packege.json` tem as instruções para rodar o projeto.

## COMMIT INSTRUCTIONS

1. Faz o fork do repositorio no seu. <br>
   em seguida segue as instruções abaixo.

```
❯ git init

❯ git config --global user.name "SEU NOME DE USUÁRIO"

❯ git config --global user.email "SEU EMAIL GIT"

❯ git remote add origin "O LINK DO REPOSITORIO"

❯ git pull origin master
```

Cria um brench nova para não fazer os commites na `master`

```
❯ git checkout -b dev
```

### PADRONIZANDO COMMITS

Nós vamos usar o `commitlint` e o `commitzen` para padronizar as mensagens de commit do Git.

1. `gaa` ou `git add --all` para adicionar os files para o commit.

2. `gc` ou `git commit` para adicionar a mensagem de commit. Depois do `git commit` abrirá uma caixa de dialogo com as instruções de commit.

3. Agora que esta tudo commitado basta dar um push. `git push origin dev`.

Não esquecendo que se seguiu as instruções criamos uma `brench` nova, então sempre vamos usar ela para fazer os nosso push's.

Para não ter que digitar sempre o mesmo comando podemos abreviar (já que a brench será sempre a dev).

```
❯ git push --set-upstream origin dev
```

Mais instrução virão conforme a evolução do projeto, Vamos codar :metal: :muscle:
