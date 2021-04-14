import snackStore from './store'
// get the options out using lodash templates
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { namespace } = options

// add store
export default ({ store }) => {
  store.registerModule(namespace, snackStore, {
    preserveState: Boolean(store.state[namespace]), // if the store module already exists, preserve it
  })
}
