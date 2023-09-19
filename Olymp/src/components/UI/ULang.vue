<script lang="ts">
import { languages } from '@/i18n/index';
import { i18n } from '@/i18n/config';
import type { Lang } from '@/store/types';

export default {
  // компонент-дропдаун для выбора языка
  data() {
    return {
      languages: languages, // массив языков, который берётся из файла @/i18n/index.ts
      i18n: i18n, // языковая функция
      show: false, // переменная, определяющая, виден ли список языков
      timerId: 0, // для правильной работы появления/исчезания списка языков по hover-у
    };
  },
  methods: {
    changeLang(lang: Lang) {
      //таким образом меняем языки
      i18n.global.locale.value = lang;
      this.show = false;
    },
    setVisible() {
      this.show = true;
      clearTimeout(this.timerId);
    },
    //логику появления/исчезания проще описать устно, но если вкратце - используются события движения мыши.
    //через секунду после покидания мыши дропдауна, дропдаун исчезает
    setHidden() {
      this.timerId = setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },
};
</script>

<template>
  <div @mouseover="setVisible" @mouseleave="setHidden" class="select">
    <button class="current">
      {{ i18n.global.locale }} <span class="arrow__left"></span><span class="arrow__right"></span>
    </button>
    <ul v-if="show" class="languages">
      <li v-for="lang in languages" :key="lang" @click="changeLang(lang)" class="lang">
        {{ lang }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.select {
  position: relative;
  display: inline-block;
  font-size: 13px;
  line-height: 15.73px;
  .current {
    display: flex;
    align-items: center;
    width: 41px;
    height: 20px;
    background-color: #cf3939;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    .arrow__left {
      background: white;
      width: 5px;
      height: 1.2px;
      transform: translateX(2.2px) rotate(45deg);
    }
    .arrow__right {
      background: white;
      width: 5px;
      height: 1.2px;
      transform: rotate(-45deg);
    }
  }
  .languages {
    display: block;
    position: absolute;
    z-index: 1;
    text-transform: uppercase;
    border: 1px solid #cf3939;
    border-radius: 6px;
    padding: 3px 0px 3px 4px;
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0);
    background: white;
    .lang {
      transition: all 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      &:hover {
        color: #cf3939;
        cursor: pointer;
      }
    }
  }
}
</style>
@/store/types
