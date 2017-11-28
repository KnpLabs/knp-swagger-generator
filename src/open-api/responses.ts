import { Reference } from './reference';
import { Response } from './response';

export interface Responses
{
    [index: string]: Response|Reference;
}
