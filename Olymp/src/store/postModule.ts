import type { ActionContext } from 'vuex/types/index.js';
import type { IPost, IUser, IPostModuleState, ISortOption } from './interfaces';
import axios from 'axios';
import type { sortBy } from './types';

export const postModule = {
  state: () =>
    ({
      posts: [] as IPost[],
      currentPost: 0,
      isPostsLoading: false,
      page: 1,
      limit: 7,
      totalPages: 0,
      visitedPosts: new Set<number>(),
      visitedUsers: new Set<number>(),
      users: [] as IUser[],
      userIds: [] as number[],
      sortOptions: [
          {value: 'title', name: 'sortTitle'},
          {value: 'body', name: 'sortBody'},
      ] as ISortOption[],
      selectedSort: '' as sortBy,
    }) as IPostModuleState,
  getters: {
    getSortedPosts(state: IPostModuleState) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
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
    getIsPostsLoading(state: IPostModuleState) {
      return state.isPostsLoading;
    },
    getLimit(state: IPostModuleState) {
      return state.limit;
    },
    getSelectedSort(state: IPostModuleState) {
      return state.selectedSort;
    },
    getSortOptions(state: IPostModuleState) {
      return state.sortOptions;
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
    setVisitedUsers(state: IPostModuleState, visitedUser: number) {
      state.visitedUsers.add(visitedUser);
    },
    setVisitedPosts(state: IPostModuleState, visitedPost: number) {
      state.visitedPosts.add(visitedPost);
    },
    setSelectedSort(state: IPostModuleState, sort: sortBy) {
      state.selectedSort = sort;
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
        (response.data as IPost[]).forEach((el) => {
          if (!state.userIds.includes(el.userId)) state.userIds.push(el.userId);
        });
        Promise.all(
          state.userIds.map(async (id: number) => {
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
        setTimeout(() => {
          commit('setLoading', false);
        }, 3000);
      }
    },
    async loadMorePosts({ state, commit }: ActionContext<IPostModuleState, IPostModuleState>) {
      try {
        console.log(4);
        commit('setPage', state.page + 1);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          },
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
        (response.data as IPost[]).forEach((el) => {
          if (!state.userIds.includes(el.userId)) state.userIds.push(el.userId);
        });
        Promise.all(
          state.userIds.map(async (id: number) => {
            state.users.push(
              (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            );
          })
        ).then(() => {
          (response.data as IPost[]).map((el) => {
            el.user = state.users.find((elem) => elem.id === el.userId);
          });
          commit('setPosts', [...state.posts, ...response.data]);
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
