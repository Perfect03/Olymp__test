<script lang="ts">
import { mapState, mapGetters, mapMutations } from 'vuex';
import type { IStateRoot } from '@/store/interfaces';
import { $t } from '@/i18n/config';

export default {
  computed: {
    ...mapState({
      // данные о текущем посте берутся из store
      currentPost: (state: IStateRoot) => state.post.currentPost,
    }),
  },
  methods: {
    toAuthor() {
      // при переходе на страничку автора нужно выполнить соответствующие действия
      this.setVisitedUsers(this.currentPost.user);
      this.$router.push('author');
    },
    ...mapMutations({
      setVisitedUsers: 'post/setVisitedUsers',
    }),
  },
};
</script>

<template>
  <div class="post">
    <div class="top">
      <div class="title">{{ currentPost.title }}</div>
      <div class="text">{{ currentPost.body }}</div>
    </div>
    <div class="bottom">
      <div class="author">
        <span class="title">{{ $t('author') }}: </span>
        <span @click="toAuthor()" class="name">{{ currentPost.user?.name }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  margin: 21px auto;
  border-radius: 6px;
  width: 310px;
  height: 253px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  .top {
    display: flex;
    flex-direction: column;
    gap: 13px;
    font-size: 16px;
    line-height: 19.36px;
    .title {
      color: #cf3939;
      text-transform: capitalize;
    }
  }
  .bottom {
    display: flex;
    justify-content: flex-end;
    .author {
      .title {
        color: #d9d9d9;
      }
      .name {
        color: #ea7c90;
        border-bottom: 1px solid #ea7c90;
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 515px) {
    width: 61%;
  }
}
</style>
