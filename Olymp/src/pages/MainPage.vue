<script lang="ts">
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import UButton from '@/components/UI/UButton.vue';

export default {
  methods: {
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
    }),
  },
  components: {
    UButton,
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<template>
  <div class="content">
    <u-button @click="$router.push('/posts/')">{{ $t('more') }}</u-button>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}
</style>
