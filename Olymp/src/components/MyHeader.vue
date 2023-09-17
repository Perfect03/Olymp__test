<script lang="ts">
import ULang from '@/components/UI/ULang.vue';
import { $t } from '@/i18n/config';

export default {
  components: {
    ULang,
  },
};
</script>

<template>
  <header>
    <h1>
      <div v-for="word in $t('title').split(' ')" :key="word" class="word">{{ word }}&nbsp;</div>
    </h1>
    <u-lang></u-lang>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 9px 11px 12px 5px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    line-height: 21.78px;
    &::before {
      content: '<';
    }
    &::after {
      content: '>';
    }
    :last-child {
      &::first-letter {
        color: #cf3939;
      }
    }
    .word {
      display: inline-block;
      text-transform: capitalize;
    }
  }
  @media screen and (min-width: 515px) {
    width: 61%;
    margin: auto;
  }
}
</style>
