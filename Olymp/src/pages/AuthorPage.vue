<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { usePost } from '@/hooks/usePost';
import { $t } from '@/i18n/config';

export default {
  setup() {
    const store = useStore();
    const posts = computed(() => store.state.post.posts);
    const currentPost = computed(() => store.state.post.currentPost);
    const { post } = usePost(posts.value, currentPost.value);
    return { post };
  },
};
</script>

<template>
  <ul>
    <li>
      <span class="key">{{ $t('username') }}: </span
      ><span class="value">{{ post.user?.username }}</span>
    </li>
    <li>
      <span class="key">{{ $t('name') }}: </span><span class="value">{{ post.user?.name }}</span>
    </li>
    <li>
      <span class="key">{{ $t('email') }}: </span
      ><span class="value link">{{ post.user?.email }}</span>
    </li>
    <li>
      <span class="key">{{ $t('website') }}: </span
      ><span class="value link"
        ><a target="_blank" :href="`${post.user?.website}`">{{ post.user?.website }}</a></span
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  padding: 20px;
  li {
    margin-bottom: 7px;
    .key {
    }
    .value {
      color: #ea7c90;
    }
    .link {
      border-bottom: 1px solid #ea7c90;
    }
  }
}
</style>
