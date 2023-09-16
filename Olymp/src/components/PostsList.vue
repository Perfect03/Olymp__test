<script lang="ts">
import { i18n, $t } from '@/i18n/config';

export default {
  components: {
  }
};
</script>

<template>
    <h2>{{ $t('posts') }}</h2>
    <!-- <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      >
      </post-item>
    </transition-group> -->
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
