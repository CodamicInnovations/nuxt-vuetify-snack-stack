import Vue from "vue";
import SnackStack from "./SnackStack.vue";
// get options passed from module.ts
const options = JSON.parse(`<%= JSON.stringify(options) %>`);

// register SnackStack component
Vue.component("SnackStack", {
  extends: SnackStack,
  // add a _options prop to gain access to the options in the component
  props: {
    _options: {
      type: Object,
      default: () => ({ ...options }),
    },
  },
});
