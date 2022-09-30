# NestJS CRUD REST API with MongoDB and Mongoose

A simple CRUD REST API using NestJS, MongoDB and Mongoose.

## Installation

```bash
git clone https://github.com/trofihero/nestjs-mongodb-crud.git
cd nestjs-mongodb-crud
$ npm install
```

## Running the API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Commands used to build this API

``` bash
nest new nestjs-mongodb-crud
cd nestjs-mongodb-crud
npm i @nestjs/mongoose mongoose
npm i @nestjs/mapped-types
npm i class-validator class-transformer

nest g module users
nest g service users
nest g controller users
```
