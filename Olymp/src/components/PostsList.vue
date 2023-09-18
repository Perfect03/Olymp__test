<script lang="ts">
import type { PropType } from 'vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import type { IPost, IStateRoot } from '@/store/interfaces';
import PostItem from '@/components/PostItem.vue';
import postItemSkeleton from '@/components/PostItemSkeleton.vue'

export default {
  components: {
    PostItem,
    postItemSkeleton
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
      isPostsLoading: (state: IStateRoot) => state.post.isPostsLoading,
      limit: (state: IStateRoot) => state.post.limit,
    }),
    ...mapGetters({
      posts: 'post/getPosts',
      getVisitedPosts: 'post/getVisitedPosts',
      getIsPostsLoading: 'post/getIsPostsLoading',
      getLimit: 'post/getLimit',
    }),
  },
};
</script>

<template>
    <div v-if="!getIsPostsLoading">
    <post-item
      v-for="post in posts"
      :post="post"
      :visited="(visitedPosts as Set<number>).has(post.id)"
      :key="post.id"
    >
    </post-item>
    </div>
    <div v-else>
    <post-item-skeleton 
      v-for="n in limit"
      :key="n">
    </post-item-skeleton>
    </div>
</template>

<style lang="scss" scoped>

</style>
