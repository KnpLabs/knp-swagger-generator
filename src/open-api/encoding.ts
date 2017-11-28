import { Reference } from './reference';
import { Header } from './header';

export interface Encoding
{
    contentType?: string;
    headers?: {
        [index: string]: Header|Reference;
    };
    stype?: string;
    explode?: boolean;
    allowReserved?: boolean;
}
