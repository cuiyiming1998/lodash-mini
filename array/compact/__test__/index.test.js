import { describe, it, expect } from 'vitest'
import { compact } from '../index.js'

describe('compact', () => {
  const array = [0, '', null, 3, undefined, 5, false, NaN]
  it('happy path', () => {
    const arr = compact(array)
    expect(arr).toStrictEqual([3, 5])
  })
})
