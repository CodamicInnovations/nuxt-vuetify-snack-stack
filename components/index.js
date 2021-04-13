import Vue from 'vue'
import components from './lib'
// get options passed from module.js
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// loop through components and register them
for (const name in components) {
  Vue.component(name, {
    // extend the original component
    extends: components[name],
    // add a _options prop to gain access to the options in the component
    props: {
      // eslint-disable-next-line vue/prop-name-casing
      _options: {
        type: Object,
        default: () => ({ ...options }),
      },
    },
  })
}
