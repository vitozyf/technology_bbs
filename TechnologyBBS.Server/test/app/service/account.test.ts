import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/account.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('getUserByUserName vito', async () => {
    const result = await ctx.service.account.getUserByUserName('vito');
    assert(typeof result === 'object');
  });
});
