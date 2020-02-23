import componentFactory from '@/__mocks__/componentFactory';
import faker from 'faker';
import InputBase from './InputBase.vue';

describe('src/components/InputBase.vue', () => {
  describe('when component is mounted', () => {
    const snapshotTest = componentFactory({ component: InputBase });
    const wrapper = snapshotTest.wrapper();

    it('should be a vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should be a InputBase component', () => {
      expect(wrapper.name()).toBe('InputBase');
    });

    it('should renders input element by default', () => {
      expect(wrapper.contains('input')).toBeTruthy();
    });

    it('should have a control class', () => {
      expect(wrapper.classes()).toContain('field');
    });

    it('should renders html correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('create componente with default props', () => {
    const propsData = {
      inputPlaceholder: faker.random.words(),
    };

    const factory = componentFactory({
      component: InputBase,
      componentOptions: {
        propsData,
      },
    });

    const wrapperProps = factory.wrapper().props();

    it('should create a input component with default label', () => {
      expect(wrapperProps.label).toBe('');
    });

    it('should create a input component with default type', () => {
      expect(wrapperProps.inputType).toBe('text');
    });

    it('should create a input component with placeholder text', () => {
      expect(wrapperProps.inputPlaceholder).toBe(propsData.inputPlaceholder);
    });

    it('should create a input component with default control class', () => {
      expect(wrapperProps.controlClass).toBe('control');
    });

    it('should create a input component with default input class', () => {
      expect(wrapperProps.inputClass).toBe('input');
    });
  });

  describe('create components and change default props', () => {
    const propsData = {
      label: faker.random.word(),
      inputType: faker.helpers.randomize([
        'email', 'text', 'password', 'number',
      ]),
      inputPlaceholder: faker.random.words(),
      controlClass: faker.random.word(),
      inputClass: faker.random.word(),
    };

    const factory = componentFactory({
      component: InputBase,
      componentOptions: {
        propsData,
      },
    });

    const wrapperProps = factory.wrapper().props();

    it('should create a input component with label text', () => {
      expect(wrapperProps.label).toBe(propsData.label);
    });

    it('should create a input component with type', () => {
      expect(wrapperProps.inputType).toBe(propsData.inputType);
    });

    it('should create a input component with placeholder text', () => {
      expect(wrapperProps.inputPlaceholder).toBe(propsData.inputPlaceholder);
    });

    it('should create a input component with control class', () => {
      expect(wrapperProps.controlClass).toBe(propsData.controlClass);
    });

    it('should create a input component with input class', () => {
      expect(wrapperProps.inputClass).toBe(propsData.inputClass);
    });
  });
});
