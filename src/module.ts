import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponent,
  addImports,
} from "@nuxt/kit";
import { RuntimeConfig } from '@nuxt/schema';
import { ModuleOptions } from "./interface";
export * from './interface'

const runtimeDir = 'runtime'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@codamic/nuxt-vuetify-snack-stack",
    configKey: "snackStack",
    compatibility: {
      nuxt: '^2.0.0',
      bridge: true
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    timeout: 8000,
    types: {
      error: {
        icon: 'mdi-alert-circle-outline',
        color: 'error',
      },
      info: {
        icon: 'mdi-information-outline',
        color: 'info',
      },
      warning: {
        icon: 'mdi-alert-outline',
        color: 'warning',
      },
      success: {
        icon: 'mdi-check-circle-outline',
        color: 'success',
      },
    },
  },
  hooks: {},
  setup(options, nuxt) {
    // helper to resolve relative urls
    const { resolve } = createResolver(__dirname);

    // save plugin options in runtimeConfig to make them available for the composable
    nuxt.options.runtimeConfig = nuxt.options.runtimeConfig || { public: {} } as RuntimeConfig
    nuxt.options.runtimeConfig.public.snackStack = options
    
    // provide NuxtVuetifySnackStack component
    addComponent({
      name: "NuxtVuetifySnackStack",
      filePath: resolve(runtimeDir, "components", "SnackStack.vue"),
    });

    // provide composable - useSnack()
    const composables = resolve(runtimeDir, 'composables')
    addImports({ from: composables, name: 'useSnack' })

    // inject $snack for options api support
    addPlugin({
      src: resolve(runtimeDir, 'plugin'),
      mode: 'client',
    })
  },
});
