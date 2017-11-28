import { MediaType } from './media-type';

export interface RequestBody
{
    content: {
        [index: string]: MediaType;
    };
    description?: string;
    required?: boolean;
}
