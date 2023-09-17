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
      visitedPosts: new Set<IPost>(),
      visitedUsers: new Set<IUser>(),
      users: [] as IUser[],
    }) as IPostModuleState,
  getters: {
    getPosts(state: IPostModuleState) {
      return state.posts;
    },
    getCurrentPost(state: IPostModuleState) {
      return state.currentPost;
    },
    getVisitedUsers(state: IPostModuleState) {
      return state.visitedUsers;
    },
    getVisitedPosts(state: IPostModuleState) {
      return state.visitedPosts;
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
    setVisitedUsers(state: IPostModuleState, visitedUser: IUser) {
      state.visitedUsers.add(visitedUser);
    },
    setVisitedPosts(state: IPostModuleState, visitedPost: IPost) {
      state.visitedPosts.add(visitedPost);
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
        const userIds = [] as number[];
        (response.data as IPost[]).forEach((el) => {
          if (!userIds.includes(el.userId)) userIds.push(el.userId);
        });
        Promise.all(
          userIds.map(async (id: number) => {
            state.users.push(
              (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            );
          })
        ).then(() => {
          (response.data as IPost[]).map((el) => {
            el.user = state.users.find((elem) => elem.id === el.userId);
          });
          commit('setPosts', response.data);
        });
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
