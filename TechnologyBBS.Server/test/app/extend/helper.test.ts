import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/extend/helper.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('should function delKey', async () => {
    const ObjectTest = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
    };
    await ctx.helper.delKey(ObjectTest, 'b');
    assert(typeof ObjectTest.b === 'undefined');

    await ctx.helper.delKey(ObjectTest, ['d', 'e']);
    assert(typeof ObjectTest.d === 'undefined');
    assert(typeof ObjectTest.e === 'undefined');
  });
});
