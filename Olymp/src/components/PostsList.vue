<script lang="ts">
import type { PropType } from 'vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import type { IPost, IStateRoot } from '@/store/interfaces';
import PostItem from '@/components/PostItem.vue';
import postItemSkeleton from '@/components/PostItemSkeleton.vue';

export default {
  components: {
    PostItem,
    postItemSkeleton,
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
      visitedPosts: (state: IStateRoot) => state.post.visitedPosts,
      isPostsLoading: (state: IStateRoot) => state.post.isPostsLoading,
      limit: (state: IStateRoot) => state.post.limit,
    }),
    ...mapGetters({
      getVisitedPosts: 'post/getVisitedPosts',
      getIsPostsLoading: 'post/getIsPostsLoading',
      getLimit: 'post/getLimit',
    }),
  },
};
</script>

<template>
  <div v-if="!getIsPostsLoading">
    <transition-group name="user-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :visited="
          (visitedPosts as IPost[]).find((el) => JSON.stringify(el) == JSON.stringify(post))
        "
        :key="post.id"
      >
      </post-item>
    </transition-group>
  </div>
  <div v-else>
    <post-item-skeleton v-for="n in limit" :key="n"> </post-item-skeleton>
  </div>
</template>

<style lang="scss" scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>
