import { ServerVariable } from './server-variable';

export interface Server
{
    url: string;
    description?: string;
    variables?: {
        [index: string]: ServerVariable;
    };
}
