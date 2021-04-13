export default (options) => ({
  namespaced: true,
  state: () => ({
    options,
    messages: [],
  }),
  getters: {
    messages: (state) => state.messages,
  },
  mutations: {
    show(state, payload) {
      if (typeof payload === 'string') {
        state.messages.push({ text: payload })
      } else if (typeof payload === 'object') {
        state.messages.push(payload)
      } else {
        // eslint-disable-next-line no-console
        console.error('snackStack - show() - payload has to be String or Object')
      }
    },
    hide(state) {
      if (state.messages.length > 0) {
        state.messages.shift()
      }
    },
  },
})
