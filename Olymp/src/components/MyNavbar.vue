<script lang="ts">
import { i18n, $t } from '@/i18n/config';

export default {
  data() {
    return {
      paths: ['posts', 'review', 'author'],
    };
  },
  computed: {
    currentRoute: function () {
      return this.$route.path.split('/').filter(Boolean).length;
    },
  },
};
</script>

<template>
  <div class="navbar">
    <div class="paths">
      <div v-for="path in paths.slice(0, currentRoute)" :key="path">> {{ $t(`${path}`) }}</div>
    </div>
    <span v-if="currentRoute" @click="$router.go(-1)" class="back">&lt; {{ $t('back') }}</span>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  margin-top: 13px;
  margin-left: 5px;
  .paths {
    display: flex;
    font-size: 18px;
    line-height: 21.78px;
    gap: 5px;
    margin-bottom: 14px;
  }
  .back {
    margin-left: 15px;
    color: #ea7c90;
    border-bottom: 1px solid #ea7c90;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
      color: #b83232;
    }
  }
  @media screen and (min-width: 515px) {
    width: 61%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
