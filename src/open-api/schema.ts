import { ExternalDocumentation } from './external-documentation';
import { XML } from './xml';
import { Discriminator } from './discriminator';

export interface Schema
{
    type: string;
    title?: string;
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: string[];
    maxProperties?: number;
    minProperties?: number;
    required?: boolean;
    enum?: string[];
    allOf?: Schema;
    oneOf?: Schema;
    anyOf?: Schema;
    not?: Schema;
    items?: Schema;
    properties?: {
        [index: string]: Schema;
    };
    additionalProperties?: boolean|Schema;
    description?: string;
    format?: string;
    default?: any;
    nullable?: boolean;
    descriminator?: Discriminator;
    readOnly?: boolean;
    writeOnly?: boolean;
    xml?: XML;
    externalDocs?: ExternalDocumentation;
    example?: any;
    deprecated?: boolean;
}
