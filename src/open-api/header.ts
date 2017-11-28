import { Example } from './example';
import { Reference } from './reference';
import { Schema } from './schema';

export interface Header
{
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    style?: string;
    explode?: boolean;
    allowReserverd?: boolean;
    schema?: Schema|Reference;
    example?: any;
    examples?: {
        [index: string]: Example;
    };
}
