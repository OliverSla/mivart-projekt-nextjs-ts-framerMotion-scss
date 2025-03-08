'use client'
import React, { useState } from 'react'
import './MenuButton.scss'

interface MenuButtonProps {
  
}

const MenuButton: React.FC<MenuButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Zabráni scrollovaniu keď je menu otvorené
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  }

  return (
    <>
      <div className="menuBTN" onClick={toggleMenu}>
        <p className="triangle_menu_upper_text">MENU</p>
        <div className="triangle">
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      {/* Off-canvas menu */}
      <div className={`off-canvas-menu ${isOpen ? 'open' : ''}`}>
        {/* Close button */}
        <div className="close-triangle" onClick={toggleMenu}>
          <div className="close-icon"></div>
        </div>
      </div>
    </>
  )
}

export default MenuButton