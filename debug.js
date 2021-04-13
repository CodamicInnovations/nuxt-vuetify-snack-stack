const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { debug, namespace } = options
if (debug) {
  // eslint-disable-next-line no-console
  console.log(`${namespace} options: `, options)
}
