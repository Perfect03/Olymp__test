<script lang="ts">
import UButton from '@/components/UI/UButton.vue';

export default {
  components: {
    UButton,
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
