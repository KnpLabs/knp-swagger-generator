import * as assert from 'assert';
import { swagger } from '../src/index';

describe('swagger', () => {
    it('should generate a 3.0 swagger object', () => {
        const swg = swagger('My API', '1.0');
        const api = swg.generate();

        assert.equal(api.info.title, 'My API');
        assert.equal(api.info.version, '1.0');
        assert.equal(api.openapi, '3.0');
    });
});
