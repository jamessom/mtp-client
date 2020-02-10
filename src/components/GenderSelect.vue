<template>
  <div class="field">
    <label class="label">{{ this.label }}</label>

    <div class="control is-expanded">
      <div class="select is-fullwidth">
        <select v-model="selected_option">
          <option
            v-for="option in this.options"
            :value="option.value"
            :key="option.index">
              {{option.text}}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenderSelect',
  props: {
    label: String,
    options: Array,
  },
  data() {
    return {
      selected_option: 'selected',
    };
  },
};
</script>
