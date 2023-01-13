import { describe, it, expect } from 'vitest'
import { curry } from '../index'

describe('curry', () => {
  const fn = (a, b, c) => a + b + c
  it('happy path', () => {
    const curried = curry(fn)
    const res = curried(1)(2)(3)
    expect(res).toBe(6)
  })
})
