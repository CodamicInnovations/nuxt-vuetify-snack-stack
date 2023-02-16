import { Plugin } from '@nuxt/types'
import { SnackStackOptions } from '../interface'
import { snackPluginMethods } from './plugin'
// get the options out using lodash templates
const options: SnackStackOptions = JSON.parse(`<%= JSON.stringify(options) %>`)
// extract the namespace from the options
const { namespace, types } = options

export const plugin: Plugin = ({ store }, inject) => {
  // inject an object of functions into the app
  inject(namespace, snackPluginMethods({ store, types, namespace }))
}
export default plugin