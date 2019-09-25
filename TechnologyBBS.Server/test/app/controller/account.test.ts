// import * as assert from 'assert';
// import { app } from 'egg-mock/bootstrap';

// describe('test/app/controller/api/account.test.ts', () => {
//   it('accout login', async () => {
//     const result = await app
//       .httpRequest()
//       .post('/api/v1/login')
//       .expect(200);
//     assert(result.body.code === 1);
//     assert(result.body.data === null);
//     assert(result.body.msg === '账号或密码必填');

//     const result1 = await app
//       .httpRequest()
//       .post('/api/v1/login')
//       .send({ user_name: 'vito', password: '123456' })
//       .expect(200);
//     assert(result1.body.code === 0);
//     assert(result1.body.data.user_name === 'vito');
//     assert(result1.body.msg === '登录成功');
//   });

//   it('accout signin', async () => {
//     const result = await app
//       .httpRequest()
//       .post('/api/v1/signin')
//       .send({
//         user_name: 'vito',
//       })
//       .expect(200);
//     assert(result.body.code === 1);
//     assert(result.body.data === null);
//     assert(result.body.msg === '用户已存在');
//   });
// });
