import instance from './instance';

export default class API {
  constructor(path) {
    this.path = path;
    this.axios = instance();
  }

  get(resource = '') {
    return this.axios.get(`${this.path}/${resource}`);
  }

  put(resource, data) {
    return this.axios.put(`${this.path}/${resource}`, data);
  }

  post(resource, data) {
    return this.axios.post(`${this.path}/${resource}`, data);
  }

  delete(resource) {
    return this.axios.delete(`${this.path}/${resource}`);
  }
}
