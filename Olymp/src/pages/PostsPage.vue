<script lang="ts">
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import type { IStateRoot } from '@/store/interfaces';
import PostsList from '@/components/PostsList.vue';

export default {
  methods: {
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts'
    }),
  },
  components: {
    PostsList,
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state: IStateRoot) => state.post.posts,
    }),
    ...mapGetters({
      posts: 'post/getPosts',
    }),
  },
};
</script>

<template>
  <div class="content">
    <posts-list :posts="posts"></posts-list>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 13px 5px 3px 5px;
}
.observer {
    height: 30px;
    background: transparent;
  }
</style>
