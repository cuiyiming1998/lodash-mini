import { describe, it, expect } from 'vitest'
import { bind } from '../index.js'

describe('bind', () => {
  it('happy path', () => {
    const fn = function (greeting, ...args) {
      return `${greeting},${this.user}${args}`
    }

    const object = {
      user: '小明'
    }

    const binding = bind(fn, object, 'hi')
    const res = binding('!')
    expect(res).toBe('hi,小明!')
  })
})
