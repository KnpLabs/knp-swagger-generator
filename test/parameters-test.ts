import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.components.parameters', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be defined with Builder::parameter', () => {
        swg.parameter('id', {
            type: 'number',
            in: 'path',
            required: true
        });

        const api = swg.generate();

        assert.equal(api.components.parameters['id'].type, 'number');
        assert.equal(api.components.parameters['id'].in, 'path');
        assert.equal(api.components.parameters['id'].required, true);
    });

    it('can be referenced in any resources', () => {
        swg.get('/foo/{id}', {
            parameters: [swg.ref.parameter('id')]
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo/{id}'].get.parameters[0].$ref, '#/components/parameters/id');
    });
});

