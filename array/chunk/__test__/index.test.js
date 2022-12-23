import { describe, it, expect } from 'vitest'
import { chunk } from '../index.js'

describe('chunk', () => {
	const array = [0, 1, 2, 3, 4, 5]
	it('happy path', () => {
		const arr = chunk(array, 3)
		expect(arr).toStrictEqual([
			[0, 1, 2],
			[3, 4, 5]
		])
	})

it('should return [] when param is not array', () => {
    const arr = chunk(1, 3)
    expect(arr).toStrictEqual([])
  })

  it('should return the last chunk as remaining elements', () => {
    const arr = chunk(array, 4);
    expect(arr).toStrictEqual([[0, 1, 2, 3], [4, 5]]);
  });
})
