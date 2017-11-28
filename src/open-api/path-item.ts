import { Reference } from './reference';
import { Parameter } from './parameter';
import { Server } from './server';
import { Operation } from './operation';

export interface PathItem
{
    description?: string;
    summary?: string;
    get?: Operation;
    post?: Operation;
    put?: Operation;
    patch?: Operation;
    delete?: Operation;
    options?: Operation;
    head?: Operation;
    trace?: Operation;
    servers?: Server[];
    parameters?: Array<Parameter|Reference>;
    $ref?: string;
}
