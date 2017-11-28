import swagger from '../src/index';
import * as assert from 'assert';

describe('swagger.servers', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be added with Builder::server', () => {
        swg.server({
            url: 'http://my-api.com/{version}',
            description: 'My API',
            variables: {
                'version': {
                    default: '1.0',
                    description: 'The api version',
                    enum: ['1.0', '2.0']
                }
            }
        });

        const api = swg.generate();

        assert.equal(api.servers[0].url, 'http://my-api.com/{version}');
        assert.equal(api.servers[0].description, 'My API');
        assert.equal(api.servers[0].variables.version.default, '1.0');
        assert.equal(api.servers[0].variables.version.description, 'The api version');
        assert.equal(api.servers[0].variables.version.enum[0], '1.0');
        assert.equal(api.servers[0].variables.version.enum[1], '2.0');
    });
});

