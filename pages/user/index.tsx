  
import React from 'react'
import User from '../../src/screens/User'
import PublicRoute from '../../src/router/PublicRoute'

export default PublicRoute(props => <User { ...props } />)