import { useState } from '@nuxt/bridge-edge/dist/runtime/composables'
import { useSnack } from './composables'
import { SnackMessage } from '../module'
import { defineNuxtPlugin } from '@nuxt/bridge-edge/dist/runtime/app'

export default defineNuxtPlugin(nuxt => {
  useState<SnackMessage[]>('snack-stack-messages', () => [])

  nuxt.provide('snack', useSnack())
})
