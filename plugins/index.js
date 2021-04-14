import { snackPluginMethods } from './plugin.js'
// get the options out using lodash templates
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// extract the namespace from the options
const { namespace, types } = options

export default ({ store }, inject) => {
  // inject an object of functions into the app
  inject(namespace, snackPluginMethods({ store, types, namespace }))
}
