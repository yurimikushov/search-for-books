const SMALL_SCREEN_WIDTH = 576

const isSmallScreen = () => {
  return window.innerWidth < SMALL_SCREEN_WIDTH
}

export { isSmallScreen }
