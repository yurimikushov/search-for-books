import { createAbortEventName } from './createAbortEventName'

const abortFetch = (fetchName) => {
  dispatchEvent(new Event(createAbortEventName(fetchName)))
}

export { abortFetch }
