# NestJS CRUD REST API with MongoDB and Mongoose

A simple CRUD REST API using NestJS, MongoDB and Mongoose.

## Quick Start

```bash
git clone https://github.com/icaru12/nestjs-mongodb-crud.git
cd nestjs-mongodb-crud
npm install
npm run start:dev
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
# Install Nest CLI globally if you don't already have it installed
npm install -g @nestjs/cli

nest new nestjs-mongodb-crud
cd nestjs-mongodb-crud
npm i @nestjs/mongoose mongoose
npm i @nestjs/mapped-types
npm i class-validator class-transformer

nest g module users
nest g service users
nest g controller users
```
