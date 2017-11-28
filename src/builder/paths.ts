import { PathItem } from '../open-api/path-item';
import { Operation } from '../open-api/operation';
import { OpenApi } from '../open-api/open-api';

/**
 * Append a get operation into a PathItem
 *
 * @see Builder::get
 */
export function get(api: OpenApi, path: string, operation: Operation): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: Object.assign({}, api.paths[path], {
                get: operation,
            })
        })
    });
}

/**
 * Append a post operation into a PathItem
 *
 * @see Builder::post
 */
export function post(api: OpenApi, path: string, operation: Operation): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: Object.assign({}, api.paths[path], {
                post: operation,
            })
        })
    });
}

/**
 * Append a put operation into a PathItem
 *
 * @see Builder::put
 */
export function put(api: OpenApi, path: string, operation: Operation): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: Object.assign({}, api.paths[path], {
                put: operation,
            })
        })
    });
}

/**
 * Append a patch operation into a PathItem
 *
 * @see Builder::patch
 */
export function patch(api: OpenApi, path: string, operation: Operation): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: Object.assign({}, api.paths[path], {
                patch: operation,
            })
        })
    });
}

/**
 * Append a delete operation into a PathItem
 *
 * @see Builder::delete
 */
export function del(api: OpenApi, path: string, operation: Operation): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: Object.assign({}, api.paths[path], {
                delete: operation,
            })
        })
    });
}

/**
 * Append a options operation into a PathItem
 *
 * @see Builder::options
 */
export function options(api: OpenApi, path: string, operation: Operation): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: Object.assign({}, api.paths[path], {
                options: operation,
            })
        })
    });
}

/**
 * Append a head operation into a PathItem
 *
 * @see Builder::head
 */
export function head(api: OpenApi, path: string, operation: Operation): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: Object.assign({}, api.paths[path], {
                head: operation,
            })
        })
    });
}

/**
 * Append a trace operation into a PathItem
 *
 * @see Builder::trace
 */
export function trace(api: OpenApi, path: string, operation: Operation): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: Object.assign({}, api.paths[path], {
                trace: operation,
            })
        })
    });
}

/**
 * Append a PathItem object to an api document
 *
 * @see Builder::path
 */
export function path(api: OpenApi, path: string, item: PathItem): OpenApi {
    return Object.assign({}, api, {
        paths: Object.assign({}, api.paths, {
            [path]: item
        })
    });
}
