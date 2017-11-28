import { OAuthFlow } from './oauth-flow';

export interface OAuthFlows
{
    implicit?: OAuthFlow;
    password?: OAuthFlow;
    clientCredentials?: OAuthFlow;
    authorizationCode?: OAuthFlow;
}
