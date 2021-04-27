const debounce = (cb, ms) => {
  let timerId = null

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      cb.apply(this, args)
      timerId = null
    }, ms)
  }
}

export { debounce }
