import { ReferenceBuilder } from '../reference-builder';
import { Reference } from '../open-api/reference';

/**
 * Create a reference from a type and a identifier
 */
function createReference(type: string, ref: string): Reference {
    return {
        $ref: `#/components/${type}/${ref}`,
    };
}

/**
 * Create a reference builder
 */
export function createReferenceBuilder(): ReferenceBuilder {
    return {
        model: createReference.bind(null, 'schemas'),
        response: createReference.bind(null, 'responses'),
        parameter: createReference.bind(null, 'parameters'),
        example: createReference.bind(null, 'examples'),
        requestBody: createReference.bind(null, 'requestBodies'),
        header: createReference.bind(null, 'headers'),
        security: createReference.bind(null, 'securitySchemes'),
        link: createReference.bind(null, 'links'),
        callback: createReference.bind(null, 'callbacks'),
    } as ReferenceBuilder;
}
