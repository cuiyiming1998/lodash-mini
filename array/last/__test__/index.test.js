import { describe, it, expect } from 'vitest'
import { last } from '../index.js'

describe('last', () => {
  const arr = [3, 2, 1]
  it('happy path', () => {
    const res = last(arr)
    expect(res).toBe(1)
  })

  it('should return undefined when param is not array', () => {
    const num = 2
    const res = last(num)
    expect(res).toBe(undefined)
  })
})
