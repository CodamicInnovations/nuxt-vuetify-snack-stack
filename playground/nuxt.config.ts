import { defineNuxtConfig } from '@nuxt/bridge'
import { fromNodeMiddleware, NodeMiddleware } from 'h3'

export default defineNuxtConfig({
  hooks: {
    ready(nuxt) {
      // https://github.com/nuxt/bridge/issues/607
      // translate nuxt 2 hook from @nuxt/webpack-edge to nuxt bridge hook
      nuxt.hook('server:devMiddleware' as any, async (devMiddleware: NodeMiddleware) => {
        await nuxt.callHook('server:devHandler', fromNodeMiddleware(devMiddleware))
      })
    },
  },
  modules: ['../src/module.ts', '@nuxtjs/vuetify'],

  snackStack: {
    timeout: 2000,
    types: {
      custom: {
        icon: 'mdi-alien',
        color: 'pink'
      }
    }
  }

})
