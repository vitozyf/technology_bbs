import { Application } from 'egg';
// import { Account } from '../model/account';

interface RedisAccount extends Account {
  expires_in: string;
}

interface IRedis {
  get: (key: string) => string;
  getAsync: (key: string) => RedisAccount;
  set: (key: string, value: string) => boolean;
  setAsync: (key: string, value: string) => boolean;
  select: (dbnum: number) => boolean;
  selectAsync: (dbnum: number) => boolean;
  del: (key: string) => boolean;
  delAsync: (key: string) => boolean;
}
export default {
  redis: {} as IRedis,
  setClient(client: any) {
    client.getAsync = (key: string) => {
      return new Promise((resove, reject) => {
        client.get(key, (err, reply) => {
          if (err) {
            return reject(err);
          }
          return resove(JSON.parse(reply));
        });
      });
    };
    const expiresIn = (this as Application).config.jwtverify.expiresIn;
    client.setAsync = (key: string, value: string) => {
      return new Promise((resove, reject) => {
        client.set(key, value, 'PX', expiresIn, (err, reply) => {
          if (err) {
            return reject(err);
          }
          return resove(reply);
        });
      });
    };
    client.selectAsync = (db_num: number) => {
      return new Promise((resove, reject) => {
        client.select(db_num, (err, res) => {
          if (err) {
            return reject(err);
          }
          return resove(res);
        });
      });
    };
    client.delAsync = (key: string) => {
      return new Promise((resove, reject) => {
        client.del(key, (err, res) => {
          if (err) {
            return reject(err);
          }
          return resove(res);
        });
      });
    };
    (this as Application).redis = client;
  },
};
