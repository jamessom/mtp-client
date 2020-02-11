import componentFactory from '@/__mocks__/componentFactory';
import Login from './Main.vue';

describe('src/views/Login/Main.vue', () => {
  const factory = componentFactory({
    component: Login,
  });

  it('should renders correctly', () => {
    expect(factory.wrapper().element).toMatchSnapshot();
  });
});
