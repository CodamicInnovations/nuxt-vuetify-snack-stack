import { Plugin } from '@nuxt/types'
import { SnackStackOptions } from '../interface'
import snackStore from './store'
// get the options out using lodash templates
const options: SnackStackOptions = JSON.parse(`<%= JSON.stringify(options) %>`)
const { namespace } = options

// add store
export const store: Plugin = ({ store }) => {
  store.registerModule(namespace, snackStore, {
    preserveState: Boolean(store.state[namespace]), // if the store module already exists, preserve it
  })
}

export default store
