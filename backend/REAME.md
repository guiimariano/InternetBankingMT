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

4. Pega o link da conexão substitua o `<username>` e `<password>` pelos seus dados, e em seguida adiciona no file `./backend/src/config/bd.config.ts no campo`URI`.

### OBS: N sobe os seus dados em repositorios publicos. Vamos usar variaveis de ambiente, por agora por ser ainda os testes vai ser desse jeito.

5.  No file `packege.json` tem as instruções para rodar o projeto.

Mais instrução virão conforme a evolução do projeto, Vamos codar :metal: :muscle:
