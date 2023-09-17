import type { ActionContext } from 'vuex/types/index.js';
import type { IPost, IUser, IPostModuleState } from './interfaces';
import axios from 'axios';

export const postModule = {
  state: () =>
    ({
      posts: [] as IPost[],
      currentPost: 0,
      isPostsLoading: false,
      page: 2,
      limit: 13,
      totalPages: 0,
      users: [] as IUser[],
    }) as IPostModuleState,
  getters: {
    getPosts(state: IPostModuleState) {
      return state.posts;
    },
    getCurrentPost(state: IPostModuleState) {
      return state.currentPost;
    },
  },
  mutations: {
    setPosts(state: IPostModuleState, posts: IPost[]) {
      state.posts = posts;
    },
    setCurrentPost(state: IPostModuleState, currentPost: number) {
      state.currentPost = currentPost;
    },
    setLoading(state: IPostModuleState, bool: Boolean) {
      state.isPostsLoading = bool;
    },
    setPage(state: IPostModuleState, page: number) {
      state.page = page;
    },
    setTotalPages(state: IPostModuleState, totalPages: number) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async fetchPosts({ state, commit }: ActionContext<IPostModuleState, IPostModuleState>) {
      try {
        commit('setLoading', true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        Promise.all(
          response.data.map(async (el: IPost) => {
            let user = state.users.find((elem) => elem.id == el.userId);
            if (user) el.user = user;
            else {
              user = (await axios.get(`https://jsonplaceholder.typicode.com/users/${el.userId}`))
                .data;
              state.users.push(user as IUser);
            }
            el.user = user;
          })
        ).then(() => commit('setPosts', response.data));
      } catch (e) {
        console.log(e);
        alert('Ошибка');
      } finally {
        commit('setLoading', false);
      }
    },
  },
  namespaced: true,
};
