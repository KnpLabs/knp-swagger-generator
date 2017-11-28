import { Server } from '../open-api/server';
import { OpenApi } from '../open-api/open-api';

/**
 * Append a new server inside an open api document
 *
 * @see Builder::server
 */
export function server(api: OpenApi, server: Server): OpenApi {
    return Object.assign({}, api, {
        servers: (api.servers || []).concat(server),
    });
}
