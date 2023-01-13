import isArray from '../../shared/isArray'
import isFunction from '../../shared/isFunction'
/**
 * description
 * 创建一个切片数组, 去除array中从fn(num)返回假值开始到尾部的部分
 * fn有 三个参数 value, index, array
 * dropRightWhile同理 这里就不写了
 *
 * @param {Array} array 要查询的数组
 * @param {Function} fn 查询的方法
 * @return {Array} 剩余切片
 *
 * @example
 * array = [1, 2, 3]
 * fn = (num) => num > 1
 * return => [1]
 */

export function dropWhile(array, fn) {
  if (!isFunction(fn) || !isArray(array)) {
    return []
  }

  let result = []
  const len = array.length

  for (let i = 0; i < len; i++) {
    const value = array[i]
    // TODO: 这里array需要深克隆
    // 由于还没有实现lodash的深克隆 这里先不写
    const r = fn(value, i, array)
    if (!!r) {
      result.push(value)
    }
  }

  return result
}
