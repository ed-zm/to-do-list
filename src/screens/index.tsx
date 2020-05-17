import React, { useState } from 'react'

const Home = () => {
  const [ state, setState ] = useState('')
  return(
    <div>
        <span> State: </span>
        { state }
        <br />
        Home Page
        TEST TEXT
        <br />
        <input value = { state } onChange = { e => setState(e.target.value) } />
    </div>
  )
}

export default Home