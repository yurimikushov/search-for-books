import { createAbortEventName } from './createEventName'

const abortableFetch = (url, { name, ...fetchOptions }) => {
  const controller = new AbortController()

  const signal = {
    signal: controller.signal,
  }

  const onAbort = () => {
    controller.abort()
  }

  addEventListener(createAbortEventName(name), onAbort)

  return fetch(url, {
    ...fetchOptions,
    ...signal,
  }).finally(() => {
    removeEventListener(createAbortEventName(name), onAbort)
  })
}

export { abortableFetch }
