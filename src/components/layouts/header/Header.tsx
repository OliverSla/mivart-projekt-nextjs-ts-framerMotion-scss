'use client'

import React from 'react'
import './Header.scss'
import MenuButton from './MenuButton'

const Header = () => {
  return (
    <header className="primary-header">
      <div className="header_wrapper">
        <div className="left_nav">
          {/* One nav item */}
          <div className="nav_item_left">
            <p className="nav_link_text">Domov</p>
            <div className="line"></div>
            <p className="nav_link_number">01</p>
          </div>

          {/* One nav item */}
          <div className="nav_item_left">
            <p className="nav_link_text">Domov</p>
            <div className="line"></div>
            <p className="nav_link_number">02</p>
          </div>

          {/* One nav item */}
          <div className="nav_item_left">
            <p className="nav_link_text">Domov</p>
            <div className="line"></div>
            <p className="nav_link_number">03</p>
          </div>
        </div>

        <MenuButton />

        <div className="right_nav">
          {/* One nav item */}
          <div className="nav_item_right">
            <p className="nav_link_text">Domov</p>
            <div className="line"></div>
            <p className="nav_link_number">04</p>
          </div>

          {/* One nav item */}
          <div className="nav_item_right">
            <p className="nav_link_text">Domov</p>
            <div className="line"></div>
            <p className="nav_link_number">05</p>
          </div>

          {/* One nav item */}
          <div className="nav_item_right">
            <p className="nav_link_text">Domov</p>
            <div className="line"></div>
            <p className="nav_link_number">06</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
