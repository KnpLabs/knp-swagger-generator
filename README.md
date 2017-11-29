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
const swagger = require('knp-swagger-generator').swagger;

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

### Using references

You can define top level model and reference them later.
For more informations see: 
    - [`Builder::model`](./src/builder.ts#L101)
    - [`Builder::property`](./src/builder.ts#L106)
    - [`Builder::parameter`](./src/builder.ts#L11)
    - [`Builder::response`](./src/builder.ts#L116)
    - [`Builder::requestBody`](./src/builder.ts#L126)
    - [`Builder::example`](./src/builder.ts#L121)
    - [`Builder::header`](./src/builder.ts#L131)
    - [`Builder::security`](./src/builder.ts#L136)
    - [`Builder::link`](./src/builder.ts#L141)
    - [`Builder::callback`](./src/builder.ts#L146)
    - [`Builder::ref`](./src/reference-builder.ts):

```javascript
import swagger from 'knp-swagger-generator';

const generator = swagger('test', '1.0');

// Create a Video model
generator.model('Video');
generator.property('Video', 'id', {
    type: 'number',
});
generator.property('Video', 'title', {
    type: 'string',
});

// Declare a response
generator.response('video_success', {
    description: 'A success video resposne',
    content: {
        'application/json': {
            schema: generator.ref.model('Video')
        }
    }
});

// Declare a parameter
generator.parameter('id', {
    description: 'A unique resource identifier',
    type: 'string',
    in: 'path'
});

// Use them inside a path
generator.get('/videos/{id}', {
    description: 'Retrieve a video',
    parameters: [
        generator.ref.parameter('id'),
    ],
    responses: {
        200: generator.ref.response('video_success'),
    }
});

// Finaly generate your open api document:
console.log(generator.generate());
```

## Using typescript

This library is distributed with typescript definitions, no need to install
or declare a module in order to use it, just install it and start using
it.
