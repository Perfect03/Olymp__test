<script lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import UMenu from '@/components/UMenu.vue';
import MyHeader from '@/components/MyHeader.vue';
import axios from 'axios';

export default {
  components: {
    MyHeader,
    UMenu,
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
      } catch (e) {
        alert('Ошибка');
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>

<template>
  <div class="wrapper">
  <my-header></my-header>
  <main>
    <u-menu></u-menu>
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
