import { ExternalDocumentation } from './external-documentation';

export interface Tag
{
    name: string;
    description?: string;
    externalDocs?: ExternalDocumentation;
}
