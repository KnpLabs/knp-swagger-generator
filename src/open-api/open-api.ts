import { Paths } from './paths';
import { Info } from './info';
import { Server } from './server';
import { Components } from './components';
import { SecurityRequirement } from './security-requirement';
import { Tag } from './tag';
import { ExternalDocumentation } from './external-documentation';

export interface OpenApi
{
    openapi: string;
    info: Info;
    servers?: Server[];
    paths: Paths;
    components?: Components;
    security?: SecurityRequirement[];
    tags?: Tag[];
    externalDoc?: ExternalDocumentation;
}
