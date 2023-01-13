import { describe, it, expect } from 'vitest'
import { dropWhile } from '../index'

describe('drop', () => {
  const array = [1, 2, 3]
  it('happy path', () => {
    const res = dropWhile(array, num => num > 1)
    expect(res).toStrictEqual([2, 3])
  })
})
