import { License } from './license';
import { Contact } from './contact';

export interface Info
{
    title: string;
    version: string;
    description?: string;
    termsOfService?: string;
    contact?: Contact;
    license?: License;
}
