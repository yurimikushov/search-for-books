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

  const fetchPromise = fetch(url, {
    ...fetchOptions,
    ...signal,
  })

  fetchPromise
    .catch((err) => {
      if (err.name !== 'AbortError') {
        throw err
      }
    })
    .finally(() => {
      removeEventListener(createAbortEventName(name), onAbort)
    })

  return fetchPromise
}

export { abortableFetch }
