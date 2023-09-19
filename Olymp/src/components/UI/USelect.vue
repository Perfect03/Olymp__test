<script>
import { $t } from '@/i18n/config';

export default {
  props: {
    modelValue: {
      // текущий выбранный язык
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      //ловим событие изменения значения выбранного языка, и меняем modelValue (переменную,
      //по которой осуществляется двусторонее связывание)
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
