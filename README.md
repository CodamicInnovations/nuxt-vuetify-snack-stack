# Nuxt Vuetify Snack Stack

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

>  This is a **nuxt module** which allows you to **show stackable vuetify snacks** from anywhere in your application


## Dependencies
- **Nuxt 2** with nuxt-bridge
- **@nuxtjs/vuetify**

## Setup
1. Make sure you have `@nuxt/vuetify` installed on your nuxt project
2. If you haven't yet activate the nuxt store (simply put a empty index.ts in /store folder)
3. Add `@codamic/nuxt-vuetify-snack-stack` dependency to your project

```bash
npm install @codamic/nuxt-vuetify-snack-stack
```

4. Add `@codamic/nuxt-vuetify-snack-stack` to the `modules` section of `nuxt.config.js`


```js
{
  modules: [
    // Simple usage
    '@codamic/nuxt-vuetify-snack-stack',

    // With options
    ['@codamic/nuxt-vuetify-snack-stack', { /* module options */ }]
  ]
}
```
5. **Add the `<NuxtVuetifySnackStack />` component to your nuxt layout**


### Using top level options

```js
{
  modules: [
    '@codamic/nuxt-vuetify-snack-stack'
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

#### timeout: Number
set a new default timeout for all snacks


#### types: Object
Yout can simply add new types and change the existing one in your `nuxt.config.ts`
```JS
snackStack: {
  types: {
    custom: {
      icon: 'custom-icon',
      color: 'custom-color',
    },
    info: {
      icon: 'custom-info-icon',
      color: 'custom-info-color',
      timeout: 3000
    }
  }
}
````

## Usage

### Options API

You can call the snack plugin from any component in your project with `$snack` (or under your custom defined namespace)

show a snack
```JS
  this.$snack.showSnack('Awesome Message')
```
show a snack with options
```JS
  this.$snack.showSnack({
    text: 'Error Message',
    type: 'error',
    timeout: 4242,
  })
```
### Compositions API
```JS
  this.$snack.showSnack('Awesome Message')
```

#### Methods

`.showSnack(msg: SnackMessage | string)` show Snack

`.showSnackWithType(type: string, msg: SnackMessage | string)` show Snack

`.showInfoSnack(msg: SnackMessage | string)` show info snack

`.showErrorSnack(msg: SnackMessage | string)` show error snack

`.showWarningSnack(msg: SnackMessage | string)` show warning snack

`.showSuccessSnack(msg: SnackMessage | string)` show success snack

##### SnackMessage
```JS
{
  text: String,
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