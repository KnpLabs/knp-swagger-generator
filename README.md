Knp Swagger Generator
=====================

[![CircleCI](https://circleci.com/gh/KnpLabs/knp-swagger-generator.svg?style=svg)](https://circleci.com/gh/KnpLabs/knp-swagger-generator)

Generate a full [open api document 3.0](https://github.com/OAI/OpenAPI-Specification) generator with a simple suit of function
call.

Before starting you can find a complete documentaion about swagger and open api [here](https://swagger.io/).

## Installation

You can install this libary with NPM:

```
$ npm install knp-swagger-generator
```

You diretcly use it with NodeJS or your favorite javascript
bundler:

### With NodeJS

```javascript
const swagger = require('swagger').swagger;

const generator = swagger('test', '1.0');

// Your api definitions ...

const openApiDocument = generator.generate();
```

### With harmony modules (typescript, es6 ...)

```javascript
import swagger from 'knp-swagger-generator';

cons generator = swagger('test', '1.0');

// You api definition here ...

const openApiDocument = generator.generate();
```

## Usage

This libary helps you to create your [open api document](https://github.com/OAI/OpenAPI-Specification/).

### Generate API informations

You can generate api informations with [`Builder::info`](./src/builder.ts#L29):

```javascript
import swagger from 'knp-swagger-generator';

const generator = swagger('test', '1.0');

/*
 * This line will display a json like:
 *
 * {
 *    "openapi": "3.0",
 *    "info": {
 *      "title": "test",
 *      "version": "1.0"
 *    }
 * }
 */
console.log(generator.generate());


// Alternativly you can call:
generator.info({
    title: 'My Project',
});

console.log(generator.generate());
```

### Generate an api server

In order to generate a server for your open api document use [`Builder::server`](./src/builder.ts#L91):

```javascript
import swagger from 'knp-swagger-generator';

const generator = swagger('test', '1.0');

generator.server({
    url: 'http://my-api.com',
});

console.log(generator.generate());
```

### Generate an api tag

You can use [`Builder::tag`](./src/builder.ts#L96):

```javascript
import swagger from 'knp-swagger-generator';

const generator = swagger('test', '1.0');

generator.tag({
    name: 'Videos',
    description: 'Find here all about video management'
});

console.log(generator.generate());
```

### Generate paths

You can use the following methods in order to document your
api paths:

- [`Builder::get`](./src/builder.ts#L46)
- [`Builder::post`](./src/builder.ts#L51)
- [`Builder::patch`](./src/builder.ts#L56)
- [`Builder::put`](./src/builder.ts#L61)
- [`Builder::delete`](./src/builder.ts#L66)
- [`Builder::options`](./src/builder.ts#L71)
- [`Builder::head`](./src/builder.ts#L76)
- [`Builder::trace`](./src/builder.ts#L81)

An example with `get`:


```javascript
import swagger from 'knp-swagger-generator';

const generator = swagger('test', '1.0');

generator.get('/videos', {
    description: 'Retrieve videos',
    responses: {
        '200': {
            description: 'A list of videos'
        }
    }
});

console.log(generator.generate());
```

more documentation is comming soon ...

## Using typescript

This library is distributed with typescript definitions, no need to install
or declare a module in order to use it, just install it and start using
it.
