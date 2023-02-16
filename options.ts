import { SnackStackOptions } from './interface';

const defaultOptions: SnackStackOptions = {
  namespace: 'snack',
  timeout: 5000,
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
}

export default defaultOptions

