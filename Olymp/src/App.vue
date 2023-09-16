<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MyHeader from '@/components/MyHeader.vue';
import UMenu from './components/UMenu.vue';

export default {
  components: {
    MyHeader,
    UMenu
  },
};
</script>

<template>
  <div class="wrapper">
  <my-header></my-header>
  <u-menu></u-menu>
  <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
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
  }
}
}
</style>
