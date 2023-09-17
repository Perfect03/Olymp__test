<script lang="ts">
import type { PropType } from 'vue';
import type { IPost } from '@/store/interfaces';
import PostItem from './PostItem.vue';

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
};
</script>

<template>
  <transition-group name="post-list">
    <post-item v-for="post in posts" :post="post" :key="post.id"> </post-item>
  </transition-group>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 18px;
  line-height: 21.78px;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
