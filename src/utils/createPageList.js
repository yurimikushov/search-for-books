const NEED_TO_SHOW_PAGES_NUM = 5

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
  const SHOW_PAGES_NUM =
    numPages < NEED_TO_SHOW_PAGES_NUM ? numPages : NEED_TO_SHOW_PAGES_NUM

  if (currentPage <= Math.ceil(SHOW_PAGES_NUM / 2)) {
    return [1, SHOW_PAGES_NUM]
  }

  const pagesOnRightSide =
    SHOW_PAGES_NUM / 2 === Math.round(SHOW_PAGES_NUM / 2)
      ? SHOW_PAGES_NUM / 2 - 1
      : Math.floor(SHOW_PAGES_NUM / 2)

  const end = Math.min(currentPage + pagesOnRightSide, numPages)
  const start = Math.max(end - SHOW_PAGES_NUM + 1, 1)

  return [start, end]
}

const createPageList = (currentPage, numPages) => {
  if (numPages < 1) {
    return []
  }

  if (numPages < currentPage) {
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
