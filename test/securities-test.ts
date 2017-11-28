import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.securitySchemes', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be generated with Builder::security and referenced', () => {
        swg.security('apiToken', {
            type: 'apiKey',
            in: 'header',
            name: 'token'
        });

        const api = swg.generate();

        assert.equal(api.components.securitySchemes['apiToken'].type, 'apiKey');
        assert.equal(api.components.securitySchemes['apiToken'].in, 'header');
        assert.equal(api.components.securitySchemes['apiToken'].name, 'token');
        assert.equal(swg.ref.security('apiToken').$ref, '#/components/securitySchemes/apiToken');
    });
});

