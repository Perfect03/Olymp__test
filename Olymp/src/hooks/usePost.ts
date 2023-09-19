import type { IPost } from '@/store/interfaces';
import { ref, onMounted } from 'vue';

// функция, реактивно возвращающая пост под нужным id из массива posts
// использовать её не стал (функционал оказался бессмысленен), написал лишь
// чтобы продемонстрировать также работу с Composition API
export function usePost(posts: IPost[], id: number) {
  const post = ref({} as IPost);
  const finding = () => {
    post.value = posts.find((el) => el.id === id) as IPost;
  };
  onMounted(finding);
  return {
    post,
  };
}
