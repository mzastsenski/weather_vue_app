import { createStore } from "vuex";

const moduleA = {
  state: () => ({
    count: 1,
  }),
  mutations: {
    minus(state, num = 1) {
      state.count -= num;
    },
    plus(state, num = 1) {
      state.count += num;
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {},
  getters: {},
};

const moduleB = {
  state: () => ({
    count: 2,
  }),
  mutations: {
    minus(state, num = 1) {
      state.count -= num;
    },
    plus(state, num = 1) {
      state.count += num;
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {},
};

export default createStore({
  state: {
    count: 10,
  },
  mutations: {
    minus(state, num = 1) {
      state.count -= num;
    },
    plus(state, num = 1) {
      state.count += num;
    },
    reset(state) {
      state.count = 0;
    },
  },
  actions: {},
  modules: {
    a: moduleA,
    b: moduleB,
  },
});
