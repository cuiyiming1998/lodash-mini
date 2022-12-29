/**
 * description
 * 将数组（array）拆分成多个 size 长度的区块, 并将这些区块组成一个新数组。
 * 如果array无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 *
 * @param {Array} array 需要拆分的array
 * @param {number} [ size = 1 ] 每一个区块的长度
 * @return {Array} 拆分后的新array
 *
 * @example
 * chunk([0, 1, 2, 3, 4, 5], 3)
 * return => [[0, 1, 2], [3, 4, 5]]
 *
 */
export const chunk = (array, size = 1) => {
  // 判断传入的array是不是数组, 不是就返回[]
  if (!Array.isArray(array)) {
    return []
  }

  const generateArr = (arr, item, index) => {
    // 如果index % size === 0
    // 说明前面已经分割完了
    // 当前的item应该属于下一个元素
    // 否则在最后一个元素中添加item
    const i =
      0 === index % size
        ? [...arr, [item]]
        : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]]
    return i
  }

  const arr = array.reduce(generateArr, [])

  return arr
}
