<script lang="ts">
import { mapState, mapGetters } from 'vuex';
import type { IPost, IStateRoot } from '@/store/interfaces';
import { $t } from '@/i18n/config';
import AuthorItem from '@/components/AuthorItem.vue';

export default {
  components: {
    AuthorItem,
  },
  computed: {
    ...mapState({
      currentPost: (state: IStateRoot) => state.post.currentPost,
    }),
    ...mapGetters({
      currentPost: 'post/getCurrentPost',
    }),
  },
};
</script>

<template>
  <div class="container">
    <author-item :user="(currentPost as IPost).user"></author-item>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 20px;
  @media screen and (min-width: 515px) {
    width: 61%;
    margin: auto;
  }
}
</style>
