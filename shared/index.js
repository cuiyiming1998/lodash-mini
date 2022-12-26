export const curry = (func) => {
  const arity = func.length
  function generateCurried(prevArgs) {
    return function curried(nextArg) {
      const args = [...prevArgs, nextArg]
      if (args.length >= arity) {
        return func(...args)
      } else {
        return generateCurried(args)
      }
    }
  }

  return generateCurried([])
}


export const isArray = (...args) => {
  return args.every(i => Array.isArray(i))
}
export const curriedIsArray = curry(isArray)