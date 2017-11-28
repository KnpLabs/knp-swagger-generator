import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.callbacks', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be generated with Builder::callback and referenced', () => {
        swg.callback('test', {
            'foo': {
                description: 'Some foo callback',
                get: {
                    description: 'return some foos'
                }
            }
        });

        const api = swg.generate();

        assert.equal(api.components.callbacks['test']['foo'].description, 'Some foo callback');
        assert.equal(api.components.callbacks['test']['foo'].get.description, 'return some foos');
        assert.equal(swg.ref.callback('test').$ref, '#/components/callbacks/test');
    });
});

