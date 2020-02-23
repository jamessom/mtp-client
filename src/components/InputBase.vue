<template>
  <div class="field">
    <label v-if="this.label" class="label">{{ this.label }}</label>

    <div :class="this.controlClass">
      <input
        :class="this.inputClass"
        :type="this.inputType"
        :placeholder="this.inputPlaceholder"
        :value="computedValue"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputBase',
  props: {
    value: [Number, String],
    label: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    inputPlaceholder: String,
    controlClass: {
      type: String,
      default: 'control',
    },
    inputClass: {
      type: String,
      default: 'input',
    },
  },
  data() {
    return {
      newValue: this.value,
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit('input', value);
      },
    },
    valueLength() {
      if (typeof this.computedValue === 'string') {
        return this.computedValue.length;
      }

      if (typeof this.computedValue === 'number') {
        return this.computedValue.toString().length;
      }

      return 0;
    },
  },
  watch: {
    value(value) {
      this.newValue = value;
    },
  },
  methods: {
    onInput(event) {
      this.$nextTick(() => {
        if (event.target) {
          this.computedValue = event.target.value;
        }
      });
    },
  },
};
</script>
