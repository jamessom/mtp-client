import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from '@/router/index';

export default function componentFactory(options = {}) {
  return {
    wrapper: () => {
      const { component, componentOptions, withRouter } = options;
      const localvue = createLocalVue();

      if (withRouter) {
        localvue.use(VueRouter);

        return shallowMount(component, {
          localvue,
          ...componentOptions,
        });
      }

      return shallowMount(component, {
        localvue,
        ...componentOptions,
      });
    },
  };
}
