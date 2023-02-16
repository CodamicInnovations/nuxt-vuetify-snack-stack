import snackStore from '../store/store'


describe('getters messages', () => {
  it('should return current messages', () => {
    const state = {
      messages: ['TEST']
    }
    const result = snackStore.getters.messages(state)
    expect(result).toEqual(state.messages)
  })
})

describe('mutations show()', () => {
  it('should work with string', () => {
    const state = {
      messages: []
    }
    snackStore.mutations.show(state, 'test')
    expect(state.messages.length).toEqual(1)
    expect(typeof state.messages[0] === 'object').toBeTruthy()
    expect(state.messages[0].text).toEqual('test')
  })

  it('should work with object', () => {
    const state = {
      messages: []
    }
    snackStore.mutations.show(state, {
      text: 'test'
    })
    expect(state.messages.length).toEqual(1)
    expect(typeof state.messages[0] === 'object').toBeTruthy()
    expect(state.messages[0].text).toEqual('test')
  })

  it('should show console error when payload is not valid', () => {
    console.error = jest.fn()
    const state = {
      messages: []
    }
    snackStore.mutations.show(state, null)
    expect(console.error).toHaveBeenCalled()
    expect(state.messages.length).toEqual(0)
  })
})

describe('mutations hide()', () => {
  it('hide() should remove first (current visible) message', () => {
    const state = {
      messages: [
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '4' },
      ]
    }
    snackStore.mutations.hide(state)
    expect(state.messages.length).toEqual(3)
    expect(!!state.messages.find(m => m.text === '1')).toBeFalsy()
    expect(state.messages[0].text).toEqual('2')
  })

  it('hide() should work when messages is empty', () => {
    const state = {
      messages: []
    }
    snackStore.mutations.hide(state)
    expect(state.messages.length).toEqual(0)
  })

  it('hideAll() should clear all messages', () => {
    const state = {
      messages: [
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '4' },
      ]
    }
    snackStore.mutations.hideAll(state)
    expect(state.messages.length).toEqual(0)
  })

})
