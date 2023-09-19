<script lang="ts">
import { mapState, mapGetters, mapActions } from 'vuex';
import type { IStateRoot } from '@/store/interfaces';
import PostsList from '@/components/PostsList.vue';

export default {
  methods: {
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts',
    }),
  },
  components: {
    PostsList,
  },
  mounted() {
    // при монтировании компонента сразу подгружаем посты
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state: IStateRoot) => state.post.posts,
    }),
    ...mapGetters({
      sortedPosts: 'post/getSortedPosts',
    }),
  },
};
</script>

<template>
  <div class="content">
    <posts-list :posts="sortedPosts"></posts-list>
    <!-- ниже - невидимый блок, при прокрутке к которому подгружаются следующие посты
    используется собственная директива -->
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
