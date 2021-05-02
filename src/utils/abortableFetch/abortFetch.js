import { createAbortEventName } from './createEventName'

const abortFetch = (fetchName) => {
  dispatchEvent(new Event(createAbortEventName(fetchName)))
}

export { abortFetch }
