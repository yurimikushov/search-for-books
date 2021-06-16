import React from 'react'
import { getDisplayName } from 'utils'
import { Layout } from './Layout'

const withLayout = (WrappedComponent) => {
  function WithLayoutComponent(props) {
    return (
      <Layout>
        <WrappedComponent {...props} />
      </Layout>
    )
  }

  WithLayoutComponent.displayName = `withLayout(${getDisplayName(
    WrappedComponent
  )})`

  return WithLayoutComponent
}

export { withLayout }
