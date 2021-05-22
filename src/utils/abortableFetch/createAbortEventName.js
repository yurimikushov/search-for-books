const createAbortEventName = (fetchName) => {
  return `abort(${fetchName})`
}

export { createAbortEventName }
