import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home page</h1>
        <link to="/About">Go to About page</link>
    </div>
  )
}
