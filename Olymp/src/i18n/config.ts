import { createI18n } from 'vue-i18n';
import { defaultLocale } from './';

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en: {
      title: 'Test query',
      posts: 'Posts',
      more: 'More',
      author: 'Author',
      username: 'Username',
      name: 'Name',
      email: 'Email',
      website: 'Website',
      review: 'Review',
      back: 'Back',
      sort: 'Sort by',
      sortTitle: 'Title',
      sortBody: 'Body',
      previouslyVisited: 'Previously visited',
    },
    ru: {
      title: 'Тестовое задание',
      posts: 'Статьи',
      more: 'Подробнее',
      author: 'Автор',
      username: 'Ник',
      name: 'Имя',
      email: 'Email',
      website: 'Сайт',
      review: 'Просмотр',
      back: 'Назад',
      sort: 'Сортировка',
      sortTitle: 'По названию',
      sortBody: 'По содержимому',
      previouslyVisited: 'Посещенные ранее',
    },
  },
});

const $t = i18n.global.t;

export { i18n, $t };
