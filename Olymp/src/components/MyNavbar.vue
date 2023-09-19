<script lang="ts">
import USelect from '@/components/UI/USelect.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
import type { IStateRoot } from '@/store/interfaces';
import { $t } from '@/i18n/config';

export default {
  components: {
    USelect,
  },
  data() {
    return {
      // данные о возможных страницах сайта
      paths: ['posts', 'review', 'author'],
    };
  },
  methods: {
    // можем изменять метод сортировки, поэтому нужен доступ к мутации
    ...mapMutations({
      setSelectedSort: 'post/setSelectedSort',
    }),
  },
  computed: {
    currentRoute: function () {
      // определение текущей страницы
      // возвращаем длину, по которой определяем, сколько строк из массива paths отобразить
      return this.$route.path.split('/').filter(Boolean).length;
    },
    ...mapState({
      // данные о выбранном способе сортировки и возможных способах сортировки хранятся в vuex
      selectedSort: (state: IStateRoot) => state.post.selectedSort,
      sortOptions: (state: IStateRoot) => state.post.sortOptions,
    }),
    ...mapGetters({
      selectedSort: 'post/getSelectedSort',
      sortOptions: 'post/getSortOptions',
    }),
  },
};
</script>

<template>
  <div class="navbar">
    <div class="left">
      <div class="paths">
        <div v-for="path in paths.slice(0, currentRoute)" :key="path">> {{ $t(`${path}`) }}</div>
      </div>
      <span v-if="currentRoute" @click="$router.go(-1)" class="back">&lt; {{ $t('back') }}</span>
    </div>
    <div class="right">
      <!-- показывается только на маршруте с номером 1 (страница постов)
      чтобы не нарушать вёрстку, используем директиву v-show -->
      <u-select
        v-show="currentRoute == 1"
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      >
      </u-select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  margin-top: 13px;
  margin-left: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
