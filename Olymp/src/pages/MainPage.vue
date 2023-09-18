<script lang="ts">
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import type { IStateRoot } from '@/store/interfaces';
import UButton from '@/components/UI/UButton.vue';
import PostsList from '@/components/PostsList.vue';

export default {
  methods: {
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
    }),
  },
  components: {
    UButton,
    PostsList,
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state: IStateRoot) => state.post.posts,
      limit: (state: IStateRoot) => state.post.limit,
    }),
    ...mapGetters({
      sortedPosts: 'post/getSortedPosts',
      getLimit: 'post/getLimit',
    }),
  },
};
</script>

<template>
  <div class="content">
    <div class="posts">
      <posts-list :posts="sortedPosts" :visitedPosts="visitedPosts"></posts-list>
    </div>
    <u-button @click="$router.push('/posts/')" class="more">{{ $t('more') }}</u-button>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: flex-end;
  min-height: 100vh;
  .posts {
    pointer-events: none;
  }
}
</style>
