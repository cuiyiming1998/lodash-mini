function curry(func) {
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

export default curry
