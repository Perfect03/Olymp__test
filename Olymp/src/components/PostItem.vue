<script lang="ts">
import type { PropType } from 'vue';
import type { IPost } from '@/store/interfaces';
import { $t } from '@/i18n/config';
import { mapMutations } from 'vuex';

export default {
  components: {},
  props: {
    post: {
      type: Object as PropType<IPost>,
      required: true,
    },
    visited: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toPost(post: IPost) {
      // в случае нажатия кнопки "Подробнее" у поста: осуществляется переход на его страницу
      // устанавливается новое значение currentPost; пост добавляется в visitedPosts; осуществляется роутинг
      this.setCurrentPost(post);
      this.setVisitedPosts(post);
      this.$router.push(`/posts/${post.id}/`);
    },
    ...mapMutations({
      setCurrentPost: 'post/setCurrentPost',
      setVisitedPosts: 'post/setVisitedPosts',
    }),
  },
};
</script>

<template>
  <div class="post" :class="{ visited: visited }">
    <div class="top">
      <div class="title">{{ post.title }}</div>
      <div class="text">{{ post.body }}</div>
    </div>
    <div class="bottom">
      <div class="author">
        <span class="title">{{ $t('author') }}: </span>
        <span class="name">{{ post.user?.name }}</span>
      </div>
      <div @click="toPost(post)" class="more">{{ $t('more') }}...</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  margin: 21px auto;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  width: 310px;
  height: 253px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  &.visited {
    background: #949494aa;
  }
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
    .text {
      -webkit-line-clamp: 4;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      @media screen and (min-width: 515px) {
        width: 63%;
      }
      @media screen and (min-width: 1024px) {
        -webkit-line-clamp: 3;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    .title {
      color: #d9d9d9;
    }
    .name,
    .more {
      color: #ea7c90;
      border-bottom: 1px solid #ea7c90;
    }
    .more {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 515px) {
    width: 60vw;
  }
  @media screen and (min-width: 1024px) {
    height: 153px;
  }
}
</style>
