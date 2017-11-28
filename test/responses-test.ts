import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.responses', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be generated with Builder::response and referenced', () => {
        swg.response('success', {
            description: 'success',
            content: {
                'application/json': {
                    schema: swg.ref.model('Test'),
                }
            }
        });

        swg.get('/test', {
            responses: {
                '200': swg.ref.response('success'),
            }
        });

        const api = swg.generate();

        assert.equal(api.components.responses['success'].description, 'success');
        assert.equal(api.components.responses['success'].content['application/json'].schema.$ref, '#/components/schemas/Test');
        assert.equal(api.paths['/test'].get.responses['200'].$ref, '#/components/responses/success');
    });
});

