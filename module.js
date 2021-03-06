import defaultOptions from './options'
const { resolve, join } = require('path')
const { readdirSync } = require('fs')

export default function (moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.snackStack,
  }

  // init namespace
  if (!options.namespace) options.namespace = defaultOptions.namespace
  // init timeout
  if (!options.timeout) options.timeout = defaultOptions.timeout

  // init snack types
  if (options.types) {
    for (const [key, value] of Object.entries(defaultOptions.types)) {
      if (!options.types[key]) {
        // add default type
        options.types[key] = value
      } else {
        // merge configured types with exisiting default type
        options.types[key] = { ...value, ...options.types[key] }
      }
    }
  } else {
    options.types = defaultOptions.types
  }

  const { namespace } = options

  // add all of the initial plugins
  const pluginsToSync = ['components/index.js', 'store/index.js', 'plugins/index.js']
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options,
    })
  }

  // sync all of the files and folders to revelant places in the nuxt build dir (.nuxt/)
  const foldersToSync = ['store', 'components/lib', 'plugins']
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString)
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options,
      })
    }
  }
}

module.exports.meta = require('./package.json')
