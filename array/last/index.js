import isArray from '../../shared/isArray'

/**
 * description
 * 获取数组最后一个元素
 *
 * @param {Array} array 要获取元素的数组
 * @return {*} 数组的最后一个元素
 *
 * @example
 * array = [3.1, 2.2, 1.2]
 * return => 1.2
 */
export function last(array) {
  const len = isArray(array) ? array.length : 0
  return len ? array[len - 1] : undefined
}
