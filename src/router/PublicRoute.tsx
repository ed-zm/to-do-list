  
import React from 'react'
import Header from '../components/Header'

const PublicRoute = (ComposedComponent) => {
  const Component = props =>
    <div>
      <Header />
      <ComposedComponent { ...props } />
    </div>

  Component.getInitialProps = async ({ req }) => {
    return({})
  }
  return Component
}
  
export default PublicRoute