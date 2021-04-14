# Nuxt Vuetify Snack Stack

>  This is a **nuxt module** which allows you to **show stackable vuetify snacks** from anywhere in your application


## Dependencies

This tool is based on **nuxt** and **@nuxtjs/vuetify**

## Setup
1. Make sure you have `@nuxt/vuetify` installed on your nuxt project
2. Add `nuxt-vuetify-snack-stack` dependency to your project

```bash
npm install nuxt-vuetify-snack-stack
```

3. Add `nuxt-vuetify-snack-stack` to the `modules` section of `nuxt.config.js`


```js
{
  modules: [
    // Simple usage
    'nuxt-vuetify-snack-stack',

    // With options
    ['nuxt-vuetify-snack-stack', { /* module options */ }]
  ]
}
```
4. **Add the `<snack-stack />` component to your nuxt layout**


### Using top level options

```js
{
  buildModules: [
    'nuxt-vuetify-snack-stack'
  ],
  snackStack: {
    /* module options */
  }
}
```


## Configuration


default configuration
```js
snackStack: {
  namespace: "snack",
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
```

#### namespace: String
Changing the namespace of the modul changes the store injection and the plugin injection. So when your change the namespace to `somethingElse` the plugin is now accessible with `$somethingElse`

#### timeout: Number
set a new default timeout for all snacks


#### types: Object
Yout can simply add new types and change the existing one in your `nuxt.config.js`
```JS
snackStack: {
  types: {
    custom: {
      icon: 'custom-icon',
      color: 'custom-color',
    },
    info: {
      color: 'custom-info-type-color',
    }
  }
}
````



## Usage

You can call the snack plugin from any component in your project with `$snack` (or under your custom defined namespace)

show a snack
```JS
  this.$snack.show('Awesome Message')
```
show a snack with options
```JS
  this.$snack.show({
    text: 'Error Message',
    type: 'error',
    timeout: 4242,
  })
```

#### Methods

`.show(options|String)` show Snack
`.hide()` hide current visible snack
`.hideAll()` clear all messages
`.showInfo(options|String)` show info snack
`.showError(options|String)` show error snack
`.showWarning(options|String)` show warning snack
`.showSuccess(options|String)` show success snack
`.show`**Custom**`(options|String)` generates a function for custom defined types

##### show options
```JS
{
  text: String,
  type: error|info|warning|success|{custom},
  timeout: Number,
  icon: String,
  color: String, // Vuetify color or HEX RGB RGBA color value
}
```

## Development

1. Clone this repository
2. Install dependencies using `npm install`

## Test

1. Clone this repository
2. Install dependencies using `npm install`
3. run unit tests `npm run test`

## License

[MIT License](./LICENSE)

Copyright (c) Codamic Innovations GmbH