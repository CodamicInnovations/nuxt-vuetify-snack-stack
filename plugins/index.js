// get the options out using lodash templates
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// extract the namespace from the options
const { namespace, types } = options

export default ({ store }, inject) => {
  const typeMethods = () => {
    const typeMethods = {}
    for (const key of Object.keys(types)) {
      const upperkey = key.charAt(0).toUpperCase() + key.slice(1)
      typeMethods['show' + upperkey] = (payload) => {
        showSnackWithType(payload, key)
      }
    }
    return typeMethods
  }

  // get a reference to the vuex store's state
  // inject an object of functions into the app
  inject(namespace, {
    show(payload) {
      store.commit('snackStack/show', payload)
    },
    ...typeMethods(),
    hide() {
      store.commit(namespace + '/hide')
    },
  })

  const showSnackWithType = (payload, type) => {
    if (typeof payload === 'string') {
      _showStringWithType(payload, type)
    } else {
      _showObjectWithType(payload, type)
    }
  }

  const _showStringWithType = (payload, type) => {
    store.commit(namespace + '/show', {
      text: payload,
      type,
    })
  }

  const _showObjectWithType = (payload, type) => {
    store.commit(namespace + '/show', {
      ...payload,
      ...{ type },
    })
  }
}
