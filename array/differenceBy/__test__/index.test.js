import { describe, it, expect } from 'vitest'
import { difference } from '../index.js'

describe('compact', () => {
  const arr1 = [3.1, 2.2, 1.2]
  const arr2 = [4.4, 2.5]
  it.skip('happy path', () => {
    const arr = difference(arr1, arr2)
    expect(arr).toStrictEqual([3.1, 1.2])
  })
})
