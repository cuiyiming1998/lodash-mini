import { describe, it, expect } from 'vitest'
import isFunction from '../isFunction'

describe('last', () => {
  it('happy path', () => {
    const fn = () => {}
    const num = 1
    expect(isFunction(fn)).toBe(true)
    expect(isFunction(num)).toBe(false)
  })
})
