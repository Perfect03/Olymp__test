<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MyMenu from '@/components/MyMenu.vue';
import MyHeader from '@/components/MyHeader.vue';
import axios from 'axios';
import MyNavbar from './components/MyNavbar.vue';

export default {
  components: {
    MyHeader,
    MyMenu,
    MyNavbar,
  },
  methods: {},
};
</script>

<template>
  <div class="wrapper">
    <my-header></my-header>
    <main>
      <my-menu></my-menu>
      <my-navbar></my-navbar>
      <RouterView />
    </main>
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
