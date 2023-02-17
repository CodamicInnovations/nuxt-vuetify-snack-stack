import { SnackMessage, ModuleOptions } from '../module'
import { useRuntimeConfig } from '#app'
import { useState } from '#imports'

export function useSnack() {
  const errorMessages = useState<SnackMessage[]>('snack-stack-messages')
  const options: ModuleOptions = useRuntimeConfig().public.snackStack

  const parseSnackMessage = (msg: SnackMessage | string): SnackMessage =>
  typeof msg === 'string' ? { text: msg } : msg

  function showSnack(msg: SnackMessage | string) {
    errorMessages.value.push({ ...{ timeout: options.timeout }, ...parseSnackMessage(msg) })
  }

  function showSnackWithType(type: string, msg: SnackMessage | string) {
    showSnack({ ...options.types[type], ...parseSnackMessage(msg) })
  }

  return {
    showSnack,
    showSnackWithType,
    showSuccessSnack: (msg: SnackMessage | string) => showSnackWithType('success', msg),
    showErrorSnack: (msg: SnackMessage | string) => showSnackWithType('error', msg),
    showWarningSnack: (msg: SnackMessage | string) => showSnackWithType('warning', msg),
    showInfoSnack: (msg: SnackMessage | string) => showSnackWithType('info', msg),
  }
}