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
  {
    path: '/posts/:id/author',
    component: AuthorPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
