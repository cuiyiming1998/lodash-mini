import isFunction from '../../shared/isFunction'

/**
 * description
 * 类似 difference
 * 第三个参数接受一个迭代器, 迭代器会调用一个参数, 将array和values中的所有元素迭代
 * 然后对迭代后的元素进行对比, 去掉迭代后相同的元素, array剩下的元素组成的数组为返回值
 *
 * @param {Array} array 要检查的数组
 * @param {Array} values 排除的值
 * @param {Function} iteratee 迭代器方法
 * @return {Array} 过滤值后的新数组
 *
 * @example
 * array = [3.1, 2.2, 1.2]
 * values = [4.4, 2.5]
 * i = Math.floor
 * return => [3.1, 1.2]
 */
export function differenceBy(array, values, iteratee) {
  let result = []
  if (isFunction(iteratee)) {
    const v = values.map(i => iteratee(i))
    array.map(i => {
      const item = iteratee(i)
      if (!v.includes(item)) {
        result.push(i)
      }
    })
    return result
  }
  return []
}
