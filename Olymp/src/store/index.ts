import { createStore } from 'vuex';
import { postModule } from './postModule';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  // state можно разбивать на модули. Хотя в данном случае модуль только один, тем не менее
  // , продемонстрировал такую возможность
  modules: {
    post: postModule,
  },
});
