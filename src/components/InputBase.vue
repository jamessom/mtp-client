<template>
  <div class="field">
    <label v-if="this.label" class="label">{{ this.label }}</label>

    <div :class="this.controlClass">
      <input :class="this.inputClass" :type="this.inputType" :placeholder="this.inputPlaceholder" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputBase',
  props: {
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
};
</script>
