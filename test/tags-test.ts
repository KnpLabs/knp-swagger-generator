import swagger from '../src/index';
import * as assert from 'assert';

describe('swagger.tags', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be defined with Builder::tag', () => {
        swg.tag({
            name: 'test',
            description: 'A simple test',
            externalDocs: {
                url: 'http://my-doc.com',
                description: 'The api reference'
            }
        });
        swg.tag({
            name: 'foo'
        });

        const api = swg.generate();

        assert.equal(api.tags[0].name, 'test');
        assert.equal(api.tags[0].description, 'A simple test');
        assert.equal(api.tags[0].externalDocs.url, 'http://my-doc.com');
        assert.equal(api.tags[0].externalDocs.description, 'The api reference');
        assert.equal(api.tags[1].name, 'foo');
    });
});

