import { Link } from './link';
import { MediaType } from './media-type';
import { Reference } from './reference';
import { Header } from './header';

export interface Response
{
    description: string;
    headers?: {
        [index: string]: Header|Reference;
    };
    content?: {
        [index: string]: MediaType;
    };
    links?: {
        [index: string]: Link|Reference;
    };
}
