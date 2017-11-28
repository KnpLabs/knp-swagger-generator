import { Callback } from './callback';
import { Link } from './link';
import { SecurityScheme } from './security-scheme';
import { Header } from './header';
import { RequestBody } from './request-body';
import { Example } from './example';
import { Parameter } from './parameter';
import { Response } from './response';
import { Reference } from './reference';
import { Schema } from './schema';

export interface Components
{
    schemas?: {
        [index: string]: Schema|Reference;
    };
    responses?: {
        [index: string]: Response|Reference;
    };
    parameters?: {
        [index: string]: Parameter|Reference;
    };
    examples?: {
        [index: string]: Example|Reference;
    };
    requestBodies?: {
        [index: string]: RequestBody|Reference;
    };
    headers?: {
        [index: string]: Header|Reference;
    };
    securitySchemes?: {
        [index: string]: SecurityScheme|Reference;
    };
    links?: {
        [index: string]: Link|Reference;
    };
    callbacks?: {
        [index: string]: Callback|Reference;
    }
}
