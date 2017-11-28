import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.requestBodies', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be generated with Builder::requestBody and referenced', () => {
        swg.requestBody('test', {
            content: {
                'application/json': {
                    schema: swg.ref.model('Test'),
                }
            }
        });

        const api = swg.generate();

        assert.equal(api.components.requestBodies['test'].content['application/json'].schema.$ref, '#/components/schemas/Test');
        assert.equal(swg.ref.requestBody('test').$ref, '#/components/requestBodies/test');
    });
});

