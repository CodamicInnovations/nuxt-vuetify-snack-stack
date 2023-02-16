import Vuex, { Module } from "vuex";
import { SnackStackSnackData } from '../interface';

interface SnackStackState {
  messages: Array<string | SnackStackSnackData>;
}

const store: Module<SnackStackState, SnackStackState> = {
  namespaced: true,
  state: () => ({
    messages: [],
  }),
  getters: {
    messages: (state) => state.messages,
  },
  mutations: {
    show(state, payload: string | SnackStackSnackData) {
      if (typeof payload === "string") {
        state.messages.push({ text: payload });
      } else if (payload && typeof payload === "object") {
        state.messages.push(payload);
      } else {
        // eslint-disable-next-line no-console
        console.error("snackStack - show() - payload has to be String or Object");
      }
    },
  
    hide(state) {
      if (state.messages.length > 0) {
        state.messages.shift();
      }
    },
  
    hideAll(state) {
      state.messages = [];
    },
  }
}

export default store

