import { Callback } from '../open-api/callback';
import { Link } from '../open-api/link';
import { SecurityScheme } from '../open-api/security-scheme';
import { Header } from '../open-api/header';
import { RequestBody } from '../open-api/request-body';
import { Example } from '../open-api/example';
import { Response } from '../open-api/response';
import { Parameter } from '../open-api/parameter';
import { Schema } from '../open-api/schema';
import { OpenApi } from '../open-api/open-api';

/**
 * Add a new schema component inside an open api document
 *
 * @see Builder::model
 */
export function model(api: OpenApi, name: string, schema?: Schema): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            schemas: Object.assign({}, ((api.components && api.components.schemas) || {}), {
                [name]: Object.assign({}, schema || {}, {type: 'object'}),
            })
        })
    });
}

/**
 * Add a new property inside a schema
 *
 * @see Builder::property
 */
export function property(api: OpenApi, model: string, name: string, def: Schema): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            schemas: Object.assign({}, ((api.components && api.components.schemas) || {}), {
                [model]: Object.assign(
                    {},
                    ((api.components && api.components.schemas && api.components.schemas[model]) || {type: 'object'}),
                    {
                        properties: Object.assign(
                            {},
                            ((api.components && api.components.schemas && api.components.schemas[model] && api.components.schemas[model]['properties']) || {}),
                            {[name]: def}
                        )
                    }
                )
            })
        })
    });
}

/**
 * Add a new parameter component inside an open api document
 *
 * @see Builder::parameter
 */
export function parameter(api: OpenApi, name: string, parameter: Parameter): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            parameters: Object.assign({}, ((api.components && api.components.parameters) || {}), {
                [name]: parameter,
            })
        })
    });
}

/**
 * Add a new response component inside an open api document
 *
 * @see Builder::response
 */
export function response(api: OpenApi, name: string, response: Response): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            responses: Object.assign({}, ((api.components && api.components.responses) || {}), {
                [name]: response,
            })
        })
    });
}


/**
 * Add a new example component inside an open api document
 *
 * @see Builder::example
 */
export function example(api: OpenApi, name: string, example: Example): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            examples: Object.assign({}, ((api.components && api.components.examples) || {}), {
                [name]: example,
            })
        })
    });
}

/**
 * Add a new request body component inside an open api document
 *
 * @see Builder::requestBody
 */
export function requestBody(api: OpenApi, name: string, requestBody: RequestBody): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            requestBodies: Object.assign({}, ((api.components && api.components.requestBodies) || {}), {
                [name]: requestBody,
            })
        })
    });
}

/**
 * Add a new header component inside an open api document
 *
 * @see Builder::header
 */
export function header(api: OpenApi, name: string, header: Header): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            headers: Object.assign({}, ((api.components && api.components.headers) || {}), {
                [name]: header,
            })
        })
    });
}

/**
 * Add a new security component inside an open api document
 *
 * @see Builder::security
 */
export function security(api: OpenApi, name: string, security: SecurityScheme): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            securitySchemes: Object.assign({}, ((api.components && api.components.securitySchemes) || {}), {
                [name]: security,
            })
        })
    });
}

/**
 * Add a new link component inside an open api document
 *
 * @see Builder::link
 */
export function link(api: OpenApi, name: string, link: Link): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            links: Object.assign({}, ((api.components && api.components.links) || {}), {
                [name]: link,
            })
        })
    });
}
/**
 * Add a new callback component inside an open api document
 *
 * @see Builder::callback
 */
export function callback(api: OpenApi, name: string, callback: Callback): OpenApi {
    return Object.assign({}, api, {
        components: Object.assign({}, api.components, {
            callbacks: Object.assign({}, ((api.components && api.components.callbacks) || {}), {
                [name]: callback,
            })
        })
    });
}
