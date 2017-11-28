import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.links', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be generated with Builder::link and referenced', () => {
        swg.link('test', {
            description: 'a test link',
            server: {
                url: 'http://test.com',
            },
        });

        const api = swg.generate();

        assert.equal(api.components.links['test'].description, 'a test link');
        assert.equal(api.components.links['test'].server.url, 'http://test.com');
        assert.equal(swg.ref.link('test').$ref, '#/components/links/test');
    });
});

