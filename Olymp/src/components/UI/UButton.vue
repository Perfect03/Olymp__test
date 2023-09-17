<script lang="ts">
export default {};
</script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 197px;
  height: 38px;
  margin: 0 auto;
  background: #cf3939;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  &:hover {
    background: #b83232;
  }
}
</style>
