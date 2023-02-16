export interface SnackStackType {
  icon: string
  color: string
}

export interface SnackStackOptions {
  namespace: string
  timeout: number
  types: Record<string, SnackStackType>
}

export interface SnackStackSnackData {
  text: string,
  type?: "error"|"info"|"warning"|"success"|string,
  timeout?: number,
  icon?: string,
  color?: string,
}