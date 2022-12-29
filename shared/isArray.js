function isArray(...args) {
  return args.every(i => Array.isArray(i))
}

export default isArray
