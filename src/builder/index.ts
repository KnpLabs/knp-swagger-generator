import { createReferenceBuilder } from './reference';
import * as components from './components';
import { tag } from './tag';
import { server } from './server';
import * as paths from './paths';
import { info } from './info';
import { validate } from './validate';
import { OpenApi } from '../open-api/open-api';
import { Builder } from '../builder';

/**
 * Create an open api builder object.
 *
 * @see Builder
 */
export function createOpenApiBuilder(title: string, version: string): Builder {
    var api: OpenApi = {
        openapi: '3.0',
        info: {
            title,
            version,
        },
        servers: [],
        paths: {},
        components: {},
        security: [],
        tags: [],
    };

    return {
        ref: createReferenceBuilder(),
        generate: () => api,
        validate: validate.bind(null, api),
        info: (...args) => api = info.apply(null, [api].concat(args)),
        get: (...args) => api = paths.get.apply(null, [api].concat(args)),
        post: (...args) => api = paths.post.apply(null, [api].concat(args)),
        put: (...args) => api = paths.put.apply(null, [api].concat(args)),
        patch: (...args) => api = paths.patch.apply(null, [api].concat(args)),
        delete: (...args) => api = paths.del.apply(null, [api].concat(args)),
        options: (...args) => api = paths.options.apply(null, [api].concat(args)),
        head: (...args) => api = paths.head.apply(null, [api].concat(args)),
        trace: (...args) => api = paths.trace.apply(null, [api].concat(args)),
        path: (...args) => api = paths.path.apply(null, [api].concat(args)),
        server: (...args) => api = server.apply(null, [api].concat(args)),
        tag: (...args) => api = tag.apply(null, [api].concat(args)),
        model: (...args) => api = components.model.apply(null, [api].concat(args)),
        property: (...args) => api = components.property.apply(null, [api].concat(args)),
        parameter: (...args) => api = components.parameter.apply(null, [api].concat(args)),
        response: (...args) => api = components.response.apply(null, [api].concat(args)),
        example: (...args) => api = components.example.apply(null, [api].concat(args)),
        requestBody: (...args) => api = components.requestBody.apply(null, [api].concat(args)),
        header: (...args) => api = components.header.apply(null, [api].concat(args)),
        security: (...args) => api = components.security.apply(null, [api].concat(args)),
        link: (...args) => api = components.link.apply(null, [api].concat(args)),
        callback: (...args) => api = components.callback.apply(null, [api].concat(args)),
    } as Builder;
}
