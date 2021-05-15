const MAX_NUM_DISPLAYED_ITEMS = 5

const createBegin = (title) => ({
  type: 'begin',
  title,
  pageNum: 1,
})

const createPage = (pageNum, isCurrentPage) => ({
  type: 'page',
  title: pageNum.toString(),
  pageNum: pageNum,
  isCurrentPage,
})

const createNext = (title, pageNum) => ({
  type: 'next',
  title,
  pageNum,
})

const createPageList = (currentPageNum, numPages) => {
  if (numPages <= 0) {
    return []
  }

  const pageNumList = []

  if (1 < currentPageNum) {
    pageNumList.push(createBegin('В начало'))
  }

  const NUM_DISPLAYED_ITEMS =
    numPages < MAX_NUM_DISPLAYED_ITEMS ? numPages : MAX_NUM_DISPLAYED_ITEMS

  if (currentPageNum < Math.ceil(NUM_DISPLAYED_ITEMS / 2)) {
    for (let pageNum = 1; pageNum <= NUM_DISPLAYED_ITEMS; pageNum++) {
      pageNumList.push(createPage(pageNum, pageNum === currentPageNum))
    }
  } else {
    const leftSidePageNum =
      NUM_DISPLAYED_ITEMS / 2 === Math.round(NUM_DISPLAYED_ITEMS / 2)
        ? NUM_DISPLAYED_ITEMS / 2 - 1
        : Math.floor(NUM_DISPLAYED_ITEMS / 2)

    const firstPageNum = currentPageNum - leftSidePageNum
    const lastPageNum = Math.min(
      firstPageNum + NUM_DISPLAYED_ITEMS - 1,
      numPages
    )

    for (let pageNum = firstPageNum; pageNum <= lastPageNum; pageNum++) {
      pageNumList.push(createPage(pageNum, pageNum === currentPageNum))
    }
  }

  if (currentPageNum < numPages) {
    pageNumList.push(createNext('дальше', currentPageNum + 1))
  }

  return pageNumList
}

export { createPageList }
