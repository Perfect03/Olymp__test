<script lang="ts">
import { $t } from '@/i18n/config';
import type { IPost } from '@/store/interfaces';
import { mapState, mapGetters, mapMutations } from 'vuex';
import type { IStateRoot } from '@/store/interfaces';
import AuthorItem from './AuthorItem.vue';

export default {
  components: {
    AuthorItem,
  },
  methods: {
    toPost(post: IPost) {
      this.setCurrentPost(post.id);
      this.$router.push(`/posts/${post.id}/`);
    },
    ...mapMutations({
      setCurrentPost: 'post/setCurrentPost',
      setVisitedPosts: 'post/setVisitedPosts',
    }),
  },
  computed: {
    ...mapState({
      visitedPosts: (state: IStateRoot) => state.post.visitedPosts,
      visitedUsers: (state: IStateRoot) => state.post.visitedUsers,
    }),
    ...mapGetters({
      visitedPosts: 'post/getVisitedPosts',
      visitedUsers: 'post/getVisitedUsers',
    }),
  },
};
</script>

<template>
  <div class="menu">
    <div class="container">
      <h2>{{ $t('previouslyVisited') }}</h2>
      <div v-if="$route.path.includes('author')" class="authors">
        <div v-for="author in visitedUsers" :key="author.id" class="authorContainer">
          <author-item :user="author"></author-item>
        </div>
      </div>
      <div v-else class="posts">
        <div v-for="post in visitedPosts" :key="post.id" class="post">
          <div class="authorName">
            <span class="authorTitle">{{ $t('author') }}: </span>
            <span class="name">{{ post.user?.name }}</span>
          </div>
          <div class="title">{{ post.title }}</div>
          <div class="text">{{ post.body }}</div>
          <span @click="toPost(post)" class="more">{{ $t('more') }}...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  border-top: 5px solid #d9d9d9;
  border-bottom: 5px solid #d9d9d9;
  padding: 25px 5px;
  .container {
    h2 {
      font-size: 16px;
      line-height: 19.36px;
      margin-bottom: 16px;
    }
    .posts,
    .authors {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 16px;
      line-height: 19.36px;
      .post {
        width: 293px;
        height: 147px;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        padding: 14px;
        .authorName {
          .authorTitle {
            color: #d9d9d9;
          }
          .name {
            color: #ea7c90;
            border-bottom: 1px solid #ea7c90;
          }
        }
        .title {
          margin-top: 8px;
          margin-bottom: 3px;
          color: #cf3939;
          -webkit-line-clamp: 1;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .text {
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 10px;
        }
        .more {
          color: #ea7c90;
          border-bottom: 1px solid #ea7c90;
        }
      }
      .authorContainer {
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        padding: 14px;
      }
    }
    @media screen and (min-width: 515px) {
      width: 61%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
