const extractFirstPublishDate = (publishDates) => {
  if (publishDates && publishDates.length > 0) {
    return publishDates[0]
  }

  return ''
}

export { extractFirstPublishDate }
