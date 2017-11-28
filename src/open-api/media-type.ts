import { Encoding } from './encoding';
import { Example } from './example';
import { Reference } from './reference';
import { Schema } from './schema';

export interface MediaType
{
    schema?: Schema|Reference;
    example?: any;
    examples?: {
        [index: string]: Example|Reference;
    };
    encoding?: {
        [index: string]: Encoding;
    };
}
