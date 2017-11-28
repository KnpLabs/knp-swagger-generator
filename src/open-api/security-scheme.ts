import { OAuthFlows } from './oauth-flows';

export interface SecurityScheme
{
    type: 'apiKey'|'http'|'oauth2'|'openIdConnect';
    description?: string;
    name?: string;
    in?: string;
    scheme?: string;
    bearerFormat?: string;
    flows?: OAuthFlows;
    opendIdConnectUrl?: string;
}
