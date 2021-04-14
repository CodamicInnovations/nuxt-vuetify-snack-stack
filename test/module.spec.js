import { expectModuleToBeCalledWith, setupTest } from '@nuxt/test-utils'
import defaultOptions from '../options'

describe('Value tests', () => {
  setupTest({})
  it('should call expected plugins with default options', () => {
    const pluginsToSync = ['components/index.js', 'store/index.js', 'plugins/index.js']
    for (const plugin of pluginsToSync) {
      expectModuleToBeCalledWith('addPlugin', {
        src: expect.stringContaining(plugin),
        fileName: 'snack/' + plugin,
        options: defaultOptions,
      })
    }
  })
})

describe('Custom Namespace', () => {
  setupTest({
    config: {
      snackStack: {
        namespace: 'snacker',
      },
    },
  })

  it('should call expected plugins with default options', () => {
    const pluginsToSync = ['components/index.js', 'store/index.js', 'plugins/index.js']
    for (const plugin of pluginsToSync) {
      expectModuleToBeCalledWith('addPlugin', {
        src: expect.stringContaining(plugin),
        fileName: 'snacker/' + plugin,
        options: {
          ...defaultOptions,
          ...{ namespace: 'snacker' },
        },
      })
    }
  })
})

describe('Custom Types', () => {
  const customTypes = {
    custom: {
      icon: 'custom',
      color: 'custom',
    },
  }

  setupTest({
    config: {
      snackStack: {
        types: customTypes,
      },
    },
  })

  it('should be possible to add custom types', () => {
    // types = customtypes + defaulttypes
    const expectedOptions = JSON.parse(JSON.stringify(defaultOptions))
    expectedOptions.types = {
      ...expectedOptions.types,
      ...customTypes,
    }
    expectModuleToBeCalledWith(
      'addPlugin',
      expect.objectContaining({
        options: expectedOptions,
      })
    )
  })
})

describe('Edit default Types', () => {
  const customTypes = {
    error: {
      icon: 'overwritten-icon',
    },
    info: {
      color: 'overwritten-color',
    },
  }

  setupTest({
    config: {
      snackStack: {
        types: customTypes,
      },
    },
  })

  it('should be possible to edit default types', () => {
    // types = customtypes + custom Types merged with default type values
    const expectedOptions = JSON.parse(JSON.stringify(defaultOptions))
    expectedOptions.types = {
      ...expectedOptions.types,
      ...{
        error: {
          icon: 'overwritten-icon',
          color: 'error',
        },
        info: {
          icon: 'mdi-information-outline',
          color: 'overwritten-color',
        },
      },
    }
    expectModuleToBeCalledWith(
      'addPlugin',
      expect.objectContaining({
        options: expectedOptions,
      })
    )
  })
})

describe('Custom Timeout', () => {
  setupTest({
    config: {
      snackStack: {
        timeout: 1234,
      },
    },
  })

  it('should be possible to add custom types', () => {
    // types = customtypes + defaulttypes
    const expectedOptions = JSON.parse(JSON.stringify(defaultOptions))
    expectedOptions.timeout = 1234

    expectModuleToBeCalledWith(
      'addPlugin',
      expect.objectContaining({
        options: expectedOptions,
      })
    )
  })
})