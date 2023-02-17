import { useSnack } from './composables'
import { SnackMessage } from '../module'
import { defineNuxtPlugin } from '#app'
import { useState } from '#imports'

export default defineNuxtPlugin(() => {
  useState<SnackMessage[]>('snack-stack-messages', () => [])

  return {
    provide: {
      snack: useSnack()
    }
  }
})
