import { Server } from './server';

export interface Link
{
    operationRef?: string;
    operationId?: string;
    parameters?: {
        [index: string]: string;
    };
    requestBody?: any;
    description?: string;
    server?: Server;
}
