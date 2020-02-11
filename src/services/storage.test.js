import faker from 'faker';
import storage from './storage';

const tokenKey = faker.random.uuid();
describe('src/services/storage', () => {
  const sampleValue = faker.random.word();

  beforeEach(() => {
    window.sessionStorage.removeItem(tokenKey);
  });

  describe('set', () => {
    it('Set token in session storage', () => {
      storage.set(tokenKey, sampleValue);

      expect(window.sessionStorage.getItem(tokenKey)).toEqual(sampleValue);
    });
  });

  describe('get', () => {
    beforeEach(() => {
      storage.set(tokenKey, sampleValue);
    });

    it('Get token in session storage', () => {
      const result = storage.get(tokenKey);

      expect(result).toEqual(sampleValue);
    });
  });

  describe('has', () => {
    describe('When has a token', () => {
      beforeEach(() => {
        storage.set(tokenKey, sampleValue);
      });

      it('return true', () => {
        expect(storage.has(tokenKey)).toBe(true);
      });
    });

    describe('When not has a token', () => {
      it('return false', () => {
        expect(storage.has(tokenKey)).toBe(false);
      });
    });
  });

  describe('destroy', () => {
    beforeEach(() => {
      storage.set(tokenKey, sampleValue);
    });

    it('Remove token from session storage', () => {
      storage.destroy(tokenKey);

      expect(window.sessionStorage.getItem(tokenKey)).toBeNull();
    });
  });
});
