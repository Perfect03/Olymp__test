<script lang="ts">
import { $t } from '@/i18n/config';

export default {
};
</script>

<template>
  <div class="post">
  </div>
</template>

<style lang="scss" scoped>
.post {
  margin: 21px auto;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  width: 310px;
  height: 253px;
  animation: pulse-bg 1s infinite;
  @keyframes pulse-bg {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #eaeaea42;
  }
  100% {
    background-color: #eee;
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