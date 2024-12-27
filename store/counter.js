export default {
    state: () => ({
      count: 0, // Valor inicial del contador
    }),
    mutations: {
      increment(state) {
        state.count++;
      },
      decrement(state) {
        state.count--;
      },
    },
    actions: {
      increment({ commit }) {
        commit('increment');
      },
      decrement({ commit }) {
        commit('decrement');
      },
    },
    getters: {
      currentCount: (state) => state.count,
    },
  };
  