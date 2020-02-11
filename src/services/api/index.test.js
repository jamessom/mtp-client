import faker from 'faker';
import API from './index';

const path = 'test';
const api = new API(path);

api.axios.get = jest.fn();
api.axios.post = jest.fn();
api.axios.put = jest.fn();
api.axios.delete = jest.fn();

describe('src/services/api/index', () => {
  describe('constructor', () => {
    describe('when calling with path', () => {
      it('should set the right path attribute', () => {
        expect(api.path).toEqual(path);
      });
    });
  });

  describe('get', () => {
    describe('when calling with no resourse', () => {
      beforeAll(() => {
        api.get();
      });

      it('should call get function of axios instance with path and headers', () => {
        expect(api.axios.get).toHaveBeenCalledWith(`${path}/`);
      });
    });

    describe('when calling with resourse ID', () => {
      const id = faker.random.uuid();

      beforeAll(() => {
        api.get(id);
      });

      it('should call get function of axios instance with path, resource ID and headers', () => {
        expect(api.axios.get).toHaveBeenCalledWith(`${path}/${id}`);
      });
    });
  });

  describe('put', () => {
    describe('when calling with resourse ID and data', () => {
      const id = faker.random.uuid();
      const data = {
        name: faker.name.findName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
      };

      beforeAll(() => {
        api.put(id, data);
      });

      it('should call put function of axios instance with path, resource ID, data and headers', () => {
        expect(api.axios.put).toHaveBeenCalledWith(`${path}/${id}`, data);
      });
    });
  });

  describe('post', () => {
    describe('when calling with resourse ID and data', () => {
      const id = faker.random.uuid();
      const data = {
        name: faker.name.findName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
      };

      beforeAll(() => {
        api.post(id, data);
      });

      it('should call post function of axios instance with path, resource ID, data and headers', () => {
        expect(api.axios.post).toHaveBeenCalledWith(`${path}/${id}`, data);
      });
    });
  });

  describe('delete', () => {
    describe('when calling with resourse ID', () => {
      const id = faker.random.uuid();

      beforeAll(() => {
        api.delete(id);
      });

      it('should call delete function of axios instance with path, resource ID and headers', () => {
        expect(api.axios.delete).toHaveBeenCalledWith(`${path}/${id}`);
      });
    });
  });
});
