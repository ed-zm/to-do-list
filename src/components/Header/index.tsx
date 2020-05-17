import React from 'react'
import Link from 'next/link'
import './styles.scss'

const Header = () => {
  return(
    <ul className = 'header'>
      <li key = 'header-tasks'>
        <Link href = '/tasks'>
          <a className = 'header-item'>tasks</a>
        </Link>
      </li>
      <li key = 'header-user'>
        <Link href = '/user'>
          <a className = 'header-item'>user</a>
        </Link>
      </li>
    </ul>
  )
}

export default Header