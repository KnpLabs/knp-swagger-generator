import * as assert from 'assert';
import swagger from '../src/index';

describe('swagger.paths', () => {
    var swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be defined the Builder::get', () => {
        swg.get('/foo', {
            description: 'Retrieve some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].get.description, 'Retrieve some foos');
    });

    it('can be defined the Builder::post', () => {
        swg.post('/foo', {
            description: 'Create some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].post.description, 'Create some foos');
    });

    it('can be defined the Builder::put', () => {
        swg.put('/foo', {
            description: 'Update some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].put.description, 'Update some foos');
    });

    it('can be defined the Builder::patch', () => {
        swg.patch('/foo', {
            description: 'Update some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].patch.description, 'Update some foos');
    });

    it('can be defined the Builder::delete', () => {
        swg.delete('/foo', {
            description: 'Delete some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].delete.description, 'Delete some foos');
    });

    it('can be defined the Builder::options', () => {
        swg.options('/foo', {
            description: 'Detailed some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].options.description, 'Detailed some foos');
    });

    it('can be defined the Builder::head', () => {
        swg.head('/foo', {
            description: 'Header of some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].head.description, 'Header of some foos');
    });

    it('can be defined the Builder::trace', () => {
        swg.trace('/foo', {
            description: 'Trace some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].trace.description, 'Trace some foos');
    });

    it('can be defined with all of them', () => {
        swg.get('/foo', {
            description: 'Retrieve some foos',
        });
        swg.post('/foo', {
            description: 'Create some foos',
        });
        swg.put('/foo', {
            description: 'Update some foos',
        });
        swg.patch('/foo', {
            description: 'Update some foos',
        });
        swg.delete('/foo', {
            description: 'Delete some foos',
        });
        swg.options('/foo', {
            description: 'Detailed some foos',
        });
        swg.head('/foo', {
            description: 'Header of some foos',
        });
        swg.trace('/foo', {
            description: 'Trace some foos',
        });

        const api = swg.generate();

        assert.equal(api.paths['/foo'].get.description, 'Retrieve some foos');
        assert.equal(api.paths['/foo'].post.description, 'Create some foos');
        assert.equal(api.paths['/foo'].put.description, 'Update some foos');
        assert.equal(api.paths['/foo'].patch.description, 'Update some foos');
        assert.equal(api.paths['/foo'].delete.description, 'Delete some foos');
        assert.equal(api.paths['/foo'].options.description, 'Detailed some foos');
        assert.equal(api.paths['/foo'].head.description, 'Header of some foos');
        assert.equal(api.paths['/foo'].trace.description, 'Trace some foos');
    });
});
