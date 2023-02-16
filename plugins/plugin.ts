import { SnackStackSnackData } from '../interface'

const _showStringWithType = ({ store, payload, type, namespace }) => {
  store.commit(namespace + '/show', {
    text: payload,
    type,
  })
}

const _showObjectWithType = ({ store, payload, type, namespace }) => {
  store.commit(namespace + '/show', {
    ...payload,
    ...{ type },
  })
}

const showSnackWithType = ({ store, payload, type, namespace }) => {
  if (typeof payload === 'string') {
    _showStringWithType({ store, payload, type, namespace })
  } else {
    _showObjectWithType({ store, payload, type, namespace })
  }
}

const typeMethods = ({ store, types, namespace }) => {
  const typeMethods: Record<string, (payload: string | SnackStackSnackData) => void> = {}
  for (const key of Object.keys(types)) {
    const upperkey = key.charAt(0).toUpperCase() + key.slice(1)
    typeMethods['show' + upperkey] = (payload: string | SnackStackSnackData) => {
      showSnackWithType({ store, payload, type: key, namespace })
    }
  }
  return typeMethods
}

export const snackPluginMethods = ({ store, types, namespace }) => {
  return {
    show(payload: string | SnackStackSnackData) {
      store.commit(namespace + '/show', payload)
    },
    ...typeMethods({ store, types, namespace }),
    hide() {
      store.commit(namespace + '/hide')
    },
    hideAll() {
      store.commit(namespace + '/hideAll')
    },
  }
}
