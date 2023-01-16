/**
 * description
 * bind
 * @param {Function} 需要绑定的函数
 * @param {Object} this
 * @param {...} 剩余参数
 * @return {z}
 *
 */
export function bind(func, thisArg, ...args) {
  // 创建上下文对象
  const context = thisArg
  const prop = Symbol(Math.random())
  context[prop] = func
  const res = function (...arg) {
    return context[prop](...args, ...arg)
  }
  return res
}
