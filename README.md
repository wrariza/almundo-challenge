# Almundo challenge

### Installation

gti clone https://github.com/wrariza/almundo-challenge.git 

Instale las dependencias y devDependencies e inicie el servidor.

```sh
$ cd almundo-challenge
$ npm install
$ npm start
Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
Aplicación web $ http://localhost:4200 || 127.0.0.1:4200
Servidor node api http://localhost:3100 || 127.0.0.1:3100
```

Para entornos de producción ...

```sh
$ npm install
$ npm run build
$ npm run start-prod
```
Deploy Heroku 
https://devcenter.heroku.com/articles/git
### Demo
Publicacion en producción 
https://almundo-challenge.herokuapp.com/

### scrips de la aplicación
```sh
npm run start:server "Inicializa servidor de node"
npm run start:client "Inicializa cliente web"
npm run build:client "Gnenera archivos para producción aplicación web en la carpeta dist"
build:server "Gnenera archivos para producción del servidor en la carpeta dist/server"

$ npm run build "ejecuta los comandos build:client y build:server"
$ lint "verifica errores de linter ejecuta lint:client y lint:server"
```

License
----

MIT

