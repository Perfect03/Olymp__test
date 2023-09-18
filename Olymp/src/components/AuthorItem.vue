<script lang="ts">
import type { PropType } from 'vue';
import type { IUser } from '@/store/interfaces';
import { $t } from '@/i18n/config';

export default {
  components: {},
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
  },
  methods: {},
};
</script>

<template>
  <ul>
    <li>
      <span class="key">{{ $t('username') }}: </span><span class="value">{{ user.username }}</span>
    </li>
    <li>
      <span class="key">{{ $t('name') }}: </span><span class="value">{{ user.name }}</span>
    </li>
    <li>
      <span class="key">{{ $t('email') }}: </span><span class="value link">{{ user.email }}</span>
    </li>
    <li>
      <span class="key">{{ $t('website') }}: </span
      ><span class="value link"
        ><a target="_blank" :href="`${user.website}`">{{ user.website }}</a></span
      >
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
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
