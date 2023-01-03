import { describe, it, expect } from 'vitest'
import { drop } from '../index'

describe('drop', () => {
  const array = [1, 2, 3]
  it('happy path', () => {
    const res = drop(array, 2)
    expect(res).toStrictEqual([3])
  })

  it('should slice first element', () => {
    const res = drop(array)
    expect(res).toStrictEqual([2, 3])
  })
})
