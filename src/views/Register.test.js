import componentFactory from '@/__mocks__/componentFactory';
import Register from './Register.vue';

describe('src/views/Register.vue', () => {
  const factory = componentFactory({
    component: Register,
  });

  it('should renders correctly', () => {
    expect(factory.wrapper().element).toMatchSnapshot();
  });
});
