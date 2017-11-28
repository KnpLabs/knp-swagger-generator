export interface OAuthFlow
{
    authorizationUrl?: string;
    tokenUrl?: string;
    refreshUrl?: string;
    scopes?: {
        [index: string]: string;
    };
}
