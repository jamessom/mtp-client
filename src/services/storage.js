const storage = {
  set: (key, token) => window.sessionStorage.setItem(key, token),
  get: (key) => window.sessionStorage.getItem(key),
  has: (key) => {
    const token = storage.get(key);
    return !!token && token !== 'undefined';
  },
  destroy: (key) => window.sessionStorage.removeItem(key),
};

export default storage;
