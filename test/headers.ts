import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.headers', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be generated with Builder::header and referenced', () => {
        swg.header('token', {
            description: 'an api token',
            required: true,
            schema: swg.ref.model('Token')
        });

        const api = swg.generate();

        assert.equal(api.components.headers['token'].description, 'an api token');
        assert.equal(api.components.headers['token'].required, true);
        assert.equal(api.components.headers['token'].schema.$ref, '#/components/schemas/Token');
        assert.equal(swg.ref.header('token').$ref, '#/components/headers/token');
    });
});

