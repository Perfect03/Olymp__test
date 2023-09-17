import type { IPost } from '@/store/interfaces';
import { ref, onMounted } from 'vue';

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
