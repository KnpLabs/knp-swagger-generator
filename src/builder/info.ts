import { OpenApi } from '../open-api/open-api';
import { Info } from '../open-api/info';

/**
 * Change the open api information
 *
 * @see Builder::info
 */
export function info(api: OpenApi, info: Info): OpenApi {
    return Object.assign({}, api, {info});
}
