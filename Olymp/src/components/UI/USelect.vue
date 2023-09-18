<script>
import { $t } from '@/i18n/config';

export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      console.log(event.target.value);
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<template>
  <select @change="changeOption">
    <option disabled selected value="">{{ $t('sort') }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ $t(`${option.name}`) }}
    </option>
  </select>
</template>

<style scoped></style>
