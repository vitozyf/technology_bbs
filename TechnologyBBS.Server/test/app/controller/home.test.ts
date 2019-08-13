import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/api/account.test.ts', () => {
  it('should GET /', async () => {
    const result = await app
      .httpRequest()
      .get('/api/v1/')
      .expect(200);
    assert(result.text === 'hi, egg');
  });
});
