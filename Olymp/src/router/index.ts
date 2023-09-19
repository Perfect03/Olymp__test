import MainPage from '@/pages/MainPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PostsPage from '@/pages/PostsPage.vue';
import PostPage from '@/pages/PostPage.vue';
import AuthorPage from '@/pages/AuthorPage.vue';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts/',
    component: PostsPage,
  },
  {
    path: '/posts/:id/author/',
    component: AuthorPage,
  },
  {
    path: '/posts/:id/',
    component: PostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  // свойство ниже - для того, чтобы при переходе на новую страницу отображалась верхняя её часть
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
