import { describe, it, expect } from 'vitest'
import { dropRight } from '../index'

describe('drop', () => {
  const array = [1, 2, 3]
  it('happy path', () => {
    const res = dropRight(array, 2)
    expect(res).toStrictEqual([1])
  })

  it('should slice last element', () => {
    const res = dropRight(array)
    expect(res).toStrictEqual([1, 2])
  })
})
