<script lang="ts">
import type { PropType } from 'vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import type { IPost, IStateRoot } from '@/store/interfaces';
import PostItem from './PostItem.vue';

export default {
  components: {
    PostItem,
  },
  methods: {},
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
  computed: {
    ...mapState({
      posts: (state: IStateRoot) => state.post.posts,
      visitedPosts: (state: IStateRoot) => state.post.visitedPosts,
    }),
    ...mapGetters({
      posts: 'post/getPosts',
      getVisitedPosts: 'post/getVisitedPosts',
    }),
  },
};
</script>

<template>
  <transition-group name="post-list">
    <post-item
      v-for="post in posts"
      :post="post"
      :visited="(visitedPosts as Set<number>).has(post.id)"
      :key="post.id"
    >
    </post-item>
  </transition-group>
</template>

<style lang="scss" scoped>
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
