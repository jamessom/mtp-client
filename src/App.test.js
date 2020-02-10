import componentFactory from '@/__mocks__/componentFactory';
import App from './App.vue';

describe('src/App.vue', () => {
  describe('when component is mounted', () => {
    const snapshotTest = componentFactory({
      component: App,
      withRouter: true,
    });

    it('should renders correctly', () => {
      expect(snapshotTest.wrapper().element).toMatchSnapshot();
    });
  });
});
