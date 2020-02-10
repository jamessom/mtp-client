import componentFactory from '@/__mocks__/componentFactory';
import Login from './Login.vue';

describe('src/views/Login.vue', () => {
  const factory = componentFactory({
    component: Login,
  });

  it('should renders correctly', () => {
    expect(factory.wrapper().element).toMatchSnapshot();
  });
});
