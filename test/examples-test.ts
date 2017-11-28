import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.examples', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be generated with Builder::example and referenced', () => {
        swg.example('test', {
            description: 'A test',
            value: 'foo',
            summary: 'test'
        });

        const api = swg.generate();

        assert.equal(api.components.examples['test'].description, 'A test');
        assert.equal(api.components.examples['test'].value, 'foo');
        assert.equal(api.components.examples['test'].summary, 'test');
        assert.equal(swg.ref.example('test').$ref, '#/components/examples/test');
    });
});

