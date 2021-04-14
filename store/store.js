const state = () => ({
  messages: [],
})

export const getters = {
  messages: (state) => state.messages,
}

export const mutations = {
  show (state, payload) {
    if (typeof payload === 'string') {
      state.messages.push({ text: payload })
    } else if (payload && typeof payload === 'object') {
      state.messages.push(payload)
    } else {
      // eslint-disable-next-line no-console
      console.error('snackStack - show() - payload has to be String or Object')
    }
  },

  hide (state) {
    if (state.messages.length > 0) {
      state.messages.shift()
    }
  },

  hideAll (state) {
    state.messages = []
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
