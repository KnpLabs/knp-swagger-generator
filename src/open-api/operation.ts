import { Responses } from './responses';
import { Server } from './server';
import { SecurityRequirement } from './security-requirement';
import { Callback } from './callback';
import { RequestBody } from './request-body';
import { Reference } from './reference';
import { Parameter } from './parameter';
import { ExternalDocumentation } from './external-documentation';

export interface Operation
{
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentation;
    operationId?: string;
    parameters?: Array<Parameter|Reference>;
    requestBody?: RequestBody|Reference;
    responses?: Responses;
    callbacks?: {
        [index: string]: Callback|Reference;
    };
    deprecated?: boolean;
    security?: SecurityRequirement[];
    servers?: Server[];
}
