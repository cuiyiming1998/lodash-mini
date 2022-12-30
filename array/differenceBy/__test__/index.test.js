import { describe, it, expect } from 'vitest'
import { differenceBy } from '../index.js'

describe('differenceBy', () => {
  const arr1 = [3.1, 2.2, 1.2]
  const arr2 = [4.4, 2.5]
  it('happy path', () => {
    const arr = differenceBy(arr1, arr2, Math.floor)
    expect(arr).toStrictEqual([3.1, 1.2])
  })
})
