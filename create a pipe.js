function pipe(funcs){
  return function (args) {
    return funcs.reduce((result, func) => {func.call(this, result)}, args)
  }
}
