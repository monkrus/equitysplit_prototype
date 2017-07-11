import React from 'react'
import { Link } from 'react-router-dom'

export default function NavTabs({match}) {

    return (
      <ul className="nav nav-tabs">
        <li><Link to={`${match.url}/equity`}>Equity</Link></li>
        <li><Link to={`${match.url}/company`}>Company</Link></li>
        <li><Link to={`${match.url}/analytics`}>Analytics</Link></li>
        <li><Link to={`${match.url}/legal`}>Legal</Link></li>
        <li><Link to={`${match.url}/settings`}>Settings</Link></li>
      </ul>
    )
}
