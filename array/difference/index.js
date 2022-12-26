import { isArray } from '../../shared'

export const difference = (arr1, arr2) => {
  if (!isArray(arr1, arr2)) {
    return []
  }
  const arr = [arr1, arr2]
  return arr.reduce((prev, curr) => {
    return prev.filter(i => !curr.includes(i))
  })
}