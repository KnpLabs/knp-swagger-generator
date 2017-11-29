import { Tag } from './open-api/tag';
import { Violation } from './violation';
import { Operation } from './open-api/operation';
import { PathItem } from './open-api/path-item';
import { Server } from './open-api/server';
import { Schema } from './open-api/schema';
import { Parameter } from './open-api/parameter';
import { Response } from './open-api/response';
import { Example } from './open-api/example';
import { RequestBody } from './open-api/request-body';
import { Header } from './open-api/header';
import { SecurityScheme } from './open-api/security-scheme';
import { Link } from './open-api/link';
import { Callback } from './open-api/callback';
import { ReferenceBuilder } from './reference-builder';
import { OpenApi } from './open-api/open-api';
import { Info } from './open-api/info';

/**
 * This is the behavior of an open api (v3.0) builder.
 */
export interface Builder
{
    ref: ReferenceBuilder;

    /**
     * Change the api informations
     */
    info(info: Info): OpenApi;

    /**
     * Generate the builded OpenApi
     *
     * @throws ViolationsError if the validation fails
     */
    generate(): OpenApi;

    /**
     * Validate the current OpenApi
     */
    validate(): Violation[];

    /**
     * Change the openapi version number
     */
    version(version: string): OpenApi;

    /**
     * Add a `get` PathItem
     */
    get(path: string, operation: Operation): OpenApi;

    /**
     * Add a `post` PathItem
     */
    post(path: string, operation: Operation): OpenApi;

    /**
     * Add a `patch` PathItem
     */
    patch(path: string, operation: Operation): OpenApi;

    /**
     * Add a `put` PathItem
     */
    put(path: string, operation: Operation): OpenApi;

    /**
     * Add a `delete` PathItem
     */
    delete(path: string, operation: Operation): OpenApi;

    /**
     * Add an `options` PathItem
     */
    options(path: string, operation: Operation): OpenApi;

    /**
     * Add an `head` PathItem
     */
    head(path: string, operation: Operation): OpenApi;

    /**
     * Add a `trace` PathItem
     */
    trace(path: string, operation: Operation): OpenApi;

    /**
     * Add a PathItem
     */
    path(path: string, item: PathItem): OpenApi;

    /**
     * Add a Server
     */
    server(server: Server): OpenApi;

    /**
     * Add a tag
     */
    tag(tag: Tag): OpenApi;

    /**
     * Add a new model schema inside the api components
     */
    model(name: string, schema?: Schema): OpenApi;

    /**
     * Add a new property to a given model
     */
    property(model: string, name: string, def: Schema): OpenApi;

    /**
     * Add a new parameter inside the api components
     */
    parameter(name: string, parameter: Parameter): OpenApi;

    /**
     * Add a new respone inside the api components
     */
    response(name: string, response: Response): OpenApi;

    /**
     * Add a new example inside the api components
     */
    example(name: string, example: Example): OpenApi;

    /**
     * Add a new request body inside the api component
     */
    requestBody(name: string, requestBody: RequestBody): OpenApi;

    /**
     * Add a new header inside the api components
     */
    header(name: string, header: Header): OpenApi;

    /**
     * Add a new security scheme inside the api components
     */
    security(name: string, scheme: SecurityScheme): OpenApi;

    /**
     * Add a new link inside the api components
     */
    link(name: string, link: Link): OpenApi;

    /**
     * Add a new callback inside the api components
     */
    callback(name: string, callback: Callback): OpenApi;
}
