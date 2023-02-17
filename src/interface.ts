export interface SnackMessage {
  text: string
  timeout?: number
  icon?: string
  color?: string
}

export interface SnackStackType {
  icon: string
  color: string
  timeout?: number
}

export interface ModuleOptions {
  timeout: number
  types: Record<'error' | 'success' | 'info' | 'warning' | string, SnackStackType>
}
