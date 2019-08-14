export default {
  delKey(obj: object, key: string | string[]) {
    if (typeof key === 'string') {
      delete obj[key];
    }
    if (key instanceof Array) {
      key.forEach(item => {
        delete obj[item];
      });
    }
  },
};
