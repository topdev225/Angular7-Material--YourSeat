# Getting started

## Docker

This documentation assumes that you are running the backend in a docker container. To do so, you will need to install **Docker** (https://www.docker.com/get-docker).
Once that is done, you may generate the containers in the following ways:

If you have **NPM** installed, run 

>`npm run docker:dev`

Otherwise, run 

>`docker-compose --file docker-compose/dc.development.yml up`.

This will create two containers (you can list them by running `docker ps`):

### server_web_1

This is the web application container, which is currently used to expose the API endpoints for the client. It is bound to port `8080` by default, but you can change this by
using your own `docker-compose` file (look at `docker-compose.development.yml` for an example).

If you want to run shell commands inside the container, run 

> `npm run docker:bash:web`


### dockercompose_postgres_1

This is the database container, and is bound to port `5433` by default. If you would like to connect to the database from your own SQL client, the default url is `postgresql://localhost:5433/public`.
The application container will connect and run migrations automatically when you generate the containers.

# Developping

If you have just spun up the server, you will need to generate the seed data:

>`npm run docker:bash:web`

>`npm run seed`

You may run this command any time that you want to work from a clean slate.

## NestJS

The application uses the **NestJS** framework. For more information: https://docs.nestjs.com

## TypeORM

We're using **TypeORM** (https://github.com/typeorm/typeorm) as our data layer. This framework allows us to define the model in the code and generate the database migrations from that code.

### Entities

Entities define the models and the relationships between them, and are used by **TypeORM** to create the runtime methods that can be used to interface with the database. They are located in `src/core/entities`.

### Migrations

Steps to generate a migration based on the different between your current model and the database schema:

>`npm run docker:bash:web`

>`npm run migration:generate <Your migration name>`

This will generate a new migration in `src/migrations` with the SQL queries necessary to reflect your changes. You may then run `npm run migration:run` to apply the migrations (note that restarting the container will run the migrations automatically).


### Seeds

As you add entities, you will want to generate seed data to help you develop your application. You can do this by adding logic to `src/seeds/development/index.ts`.



