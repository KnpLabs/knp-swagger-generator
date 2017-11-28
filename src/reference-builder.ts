import { Reference } from './open-api/reference';

/**
 * This behavior allows you to put references anywhere you want
 * inside your api.
 */
export interface ReferenceBuilder
{
    /**
     * Insert a references to a given Schema
     */
    model(ref: string): Reference;

    /**
     * Insert a references to a given Response
     */
    response(ref: string): Reference;

    /**
     * Insert a references to a given Parameter
     */
    parameter(ref: string): Reference;

    /**
     * Insert a references to a given Example
     */
    example(ref: string): Reference;

    /**
     * Insert a references to a given RequestBody
     */
    requestBody(ref: string): Reference;

    /**
     * Insert a references to a given Header
     */
    header(ref: string): Reference;

    /**
     * Insert a references to a given SecurityScheme
     */
    security(ref: string): Reference;

    /**
     * Insert a references to a given Link
     */
    link(ref: string): Reference;

    /**
     * Insert a references to a given Callback
     */
    callback(ref: string): Reference;
}
