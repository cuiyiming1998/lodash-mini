/**
 * description
 * 函数柯里化
 *
 * @param {Function} func 要柯里化的函数
 * @param {Number} arity 层数
 * @return {Function}
 *
 * @example
 * const func = function (a, b, c) {
 *  return a + b + c
 * }
 * const c = curry(func)
 * c(1, 2, 3)
 * 返回6
 */

export function curry(func) {
  const arity = func.length
  const curryGenerator = function (prevArgs) {
    return function (nextArg) {
      const args = [...prevArgs, nextArg]
      if (args.length >= arity) {
        return func(...args)
      } else {
        return curryGenerator(args)
      }
    }
  }

  return curryGenerator([])
}
