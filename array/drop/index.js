import isArray from '../../shared/isArray'
/**
 * description
 * 创建一个切片数组, 去除array前面的n个元素
 *
 * @param {Array} array 要查询的数组
 * @param {Array} values 要去除的元素个数
 * @return {Array} 剩余切片
 *
 * @example
 * array = [1, 2, 3]
 * n = 2
 * return => [3]
 */

export function drop(array, n = 1) {
  if (isArray(array)) {
    return array.slice(n)
  }
  return []
}
