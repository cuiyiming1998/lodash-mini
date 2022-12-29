/**
 * description
 * 创建一个新数组, 包含原数组中所有的非假值元素。
 * 例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
 *
 * @param {Array} array 需要过滤的数组
 * @return {Array} 过滤后的新array
 *
 * @example
 * compact([0, '', null, 3, undefined, 5, false])
 * return => [[3, 5]]
 *
 */
export const compact = (array) => {
	if (!Array.isArray(array)) {
		return []
	}
	// 强转一下 如果不是false就不是假值
	return array.filter((item) => !!item)
}
