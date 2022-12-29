import { describe, it, expect } from 'vitest'
import { difference } from '../index.js'

describe('compact', () => {
  const arr1 = [3, 2, 1]
  const arr2 = [4, 2]
  it('happy path', () => {
    const arr = difference(arr1, arr2)
    expect(arr).toStrictEqual([3, 1])
  })
})
