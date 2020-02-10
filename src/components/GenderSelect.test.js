import componentFactory from '@/__mocks__/componentFactory';
import faker from 'faker';
import GenderSelect from './GenderSelect.vue';

describe('src/components/GenderSelect.vue', () => {
  describe('when component is mounted', () => {
    const snapshotTest = componentFactory({ component: GenderSelect });

    it('should renders correctly', () => {
      expect(snapshotTest.wrapper().element).toMatchSnapshot();
    });
  });

  describe('create components and change default props', () => {
    const propsData = {
      label: faker.random.word(),
      options: [
        { value: faker.random.word(), text: faker.random.word() },
        { value: faker.random.word(), text: faker.random.word() },
        { value: faker.random.word(), text: faker.random.word() },
      ],
    };

    const factory = componentFactory({
      component: GenderSelect,
      componentOptions: {
        propsData,
      },
    });

    it('should create a select component with label text', () => {
      expect(factory.wrapper().props().label).toBe(propsData.label);
    });

    it('should create a select component with options', () => {
      expect(factory.wrapper().props().options).toBe(propsData.options);
    });


    describe('options must be an array', () => {
      it('should have a title', () => {
        expect(factory.wrapper().props().options[0]).toHaveProperty(
          'title',
          propsData.options[0].title,
        );
      });

      it('should have a value', () => {
        expect(factory.wrapper().props().options[0]).toHaveProperty(
          'value',
          propsData.options[0].value,
        );
      });
    });
  });
});
