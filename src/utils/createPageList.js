const MAX_NUM_DISPLAYED_ITEMS = 5

const createBegin = () => ({
  type: 'begin',
  title: 'В начало',
  page: 1,
})

const createPage = (page) => ({
  type: 'page',
  title: page.toString(),
  page,
})

const createNext = (nextPage) => ({
  type: 'next',
  title: 'дальше',
  page: nextPage,
})

const calcStartAndEndPages = (currentPage, numPages) => {
  const NUM_DISPLAYED_ITEMS =
    numPages < MAX_NUM_DISPLAYED_ITEMS ? numPages : MAX_NUM_DISPLAYED_ITEMS

  if (currentPage < Math.ceil(NUM_DISPLAYED_ITEMS / 2)) {
    return [1, NUM_DISPLAYED_ITEMS]
  }

  const pageNumOnRightSide =
    NUM_DISPLAYED_ITEMS / 2 === Math.round(NUM_DISPLAYED_ITEMS / 2)
      ? NUM_DISPLAYED_ITEMS / 2 - 1
      : Math.floor(NUM_DISPLAYED_ITEMS / 2)

  const end = Math.min(currentPage + pageNumOnRightSide, numPages)
  const start = Math.max(end - NUM_DISPLAYED_ITEMS + 1, 1)

  return [start, end]
}

const createPageList = (currentPage, numPages) => {
  if (numPages < 1) {
    return []
  }

  const pageList = []

  if (1 < currentPage) {
    pageList.push(createBegin())
  }

  const [start, end] = calcStartAndEndPages(currentPage, numPages)

  for (let page = start; page <= end; page++) {
    pageList.push(createPage(page))
  }

  if (currentPage < numPages) {
    pageList.push(createNext(currentPage + 1))
  }

  return pageList
}

export { createPageList }
