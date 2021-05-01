const extractFirstPublisher = (publishers) => {
  if (publishers && publishers.length > 0) {
    return publishers[0]
  }

  return ''
}

export { extractFirstPublisher }
