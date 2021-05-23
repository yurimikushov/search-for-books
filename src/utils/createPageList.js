const MAX_NUM_DISPLAYED_ITEMS = 5

const createBegin = () => ({
  type: 'begin',
  title: 'В начало',
  pageNum: 1,
})

const createPage = (pageNum) => ({
  type: 'page',
  title: pageNum.toString(),
  pageNum: pageNum,
})

const createNext = (nextPageNum) => ({
  type: 'next',
  title: 'дальше',
  pageNum: nextPageNum,
})

const calcStartAndEndPages = (currentPageNum, numPages) => {
  const NUM_DISPLAYED_ITEMS =
    numPages < MAX_NUM_DISPLAYED_ITEMS ? numPages : MAX_NUM_DISPLAYED_ITEMS

  if (currentPageNum < Math.ceil(NUM_DISPLAYED_ITEMS / 2)) {
    return [1, NUM_DISPLAYED_ITEMS]
  }

  const pageNumOnRightSide =
    NUM_DISPLAYED_ITEMS / 2 === Math.round(NUM_DISPLAYED_ITEMS / 2)
      ? NUM_DISPLAYED_ITEMS / 2 - 1
      : Math.floor(NUM_DISPLAYED_ITEMS / 2)

  const end = Math.min(currentPageNum + pageNumOnRightSide, numPages)
  const start = Math.max(end - NUM_DISPLAYED_ITEMS + 1, 1)

  return [start, end]
}

const createPageList = (currentPageNum, numPages) => {
  if (numPages < 1) {
    return []
  }

  const pageNumList = []

  if (1 < currentPageNum) {
    pageNumList.push(createBegin())
  }

  const [start, end] = calcStartAndEndPages(currentPageNum, numPages)

  for (let pageNum = start; pageNum <= end; pageNum++) {
    pageNumList.push(createPage(pageNum))
  }

  if (currentPageNum < numPages) {
    pageNumList.push(createNext(currentPageNum + 1))
  }

  return pageNumList
}

export { createPageList }
