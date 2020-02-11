import instance from './instance';

describe('src/services/api/instance', () => {
  const axios = instance();

  it('should set default baseURL to VUE_APP_API_ENDPOINT enviroment variable', () => {
    expect(axios.defaults.baseURL).toEqual(process.env.VUE_APP_API_ENDPOINT);
  });

  it('should set default header Accept to application/json', () => {
    expect(axios.defaults.headers.common.Accept).toEqual('application/json');
  });
});
