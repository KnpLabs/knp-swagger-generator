import { Tag } from '../open-api/tag';
import { OpenApi } from '../open-api/open-api';

/**
 * Add a tag definition inside an open api document
 * 
 * @see Builder::tag
 */
export function tag(api: OpenApi, tag: Tag): OpenApi {
    return Object.assign({}, api, {
        tags: (api.tags || []).concat(tag),
    });
}
