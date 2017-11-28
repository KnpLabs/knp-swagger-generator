import { swagger } from '../src/index';
import * as assert from 'assert';

describe('swagger.info', () => {
    let swg;

    beforeEach(() => {
        swg = swagger('test', '1.0');
    });

    it('can be replaced by a new info object', () => {
        swg.info({
            title: 'new title',
            version: '2.0',
            description: 'A test api',
            termsOfService: 'test',
            contact: {
                name: 'KNP Labs',
                url: 'http://knplabs.com/fr',
                email: 'hello@knplabs.com',
            },
            licence: {
                name: 'test',
                url: 'http://test.com',
            },
        });

        const api = swg.generate();

        assert.equal(api.info.title, 'new title');
        assert.equal(api.info.version, '2.0');
        assert.equal(api.info.description, 'A test api');
        assert.equal(api.info.termsOfService, 'test');
        assert.equal(api.info.contact.name, 'KNP Labs');
        assert.equal(api.info.licence.name, 'test');
    });
});
