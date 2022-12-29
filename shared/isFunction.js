/**
 * description
 * 判断参数是否是一个函数
 *
 * @param {*} fn 要判断的参数
 * @return {Boolean} 是否是函数
 *
 * @example
 * isFunction(() => {})
 * return => true
 *
 */
function isFunction(likeFn) {
  return '[object Function]' === Object.prototype.toString.call(likeFn)
}

export default isFunction
