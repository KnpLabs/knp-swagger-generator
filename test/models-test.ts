import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.schemas', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be defined with Builder::model and Builder::property', () => {
        swg.model('test', {
            description: 'A simple test',
        });

        swg.property('test', 'id', {
            type: 'number',
        });

        swg.property('test', 'title', {
            type: 'string',
        });

        const api = swg.generate();

        assert.equal(api.components.schemas.test.description, 'A simple test');
        assert.equal(api.components.schemas.test.type, 'object');
        assert.equal(api.components.schemas.test.properties.id.type, 'number');
        assert.equal(api.components.schemas.test.properties.title.type, 'string');
    });

    it('can be referenced in any resources', () => {
        swg.get('/foo', {
            responses: {
                '200': {
                    description: 'success',
                    content: {
                        'application/json': {
                            schema: swg.ref.model('Test')
                        }
                    }
                }
            }
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].get.responses['200'].content['application/json'].schema.$ref, '#/components/schemas/Test');
    });
});
