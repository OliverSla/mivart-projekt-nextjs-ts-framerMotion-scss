'use client'
import React, { useState } from 'react'
import './MenuButton.scss'

interface MenuButtonProps {}

const MenuButton: React.FC<MenuButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Aktualizované položky navigácie s ID sekcií
  const navItems = [
    { id: 'hero', title: 'ÚVOD', number: '01', image: '/menu/menu-01.jpg' },
    { id: 'about', title: 'O SPOLOČNOSTI', number: '02', image: '/menu/menu-02.jpg' },
    { id: 'gallery', title: 'GALÉRIA', number: '03', image: '/menu/menu-03.jpg' },
    { id: 'needs', title: 'POTREBY ĽUDÍ', number: '04', image: '/menu/menu-04.jpg' },
    { id: 'googleMap', title: 'GOOGLE MAP', number: '05', image: '/menu/menu-05.jpg' },
    { id: 'contact', title: 'KONTAKT', number: '06', image: '/menu/menu-06.jpg' }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Zabráni scrollovaniu keď je menu otvorené
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  // Funkcia pre scroll na sekciu
  const scrollToSection = (id: string) => {
    // Najprv zatvorí menu
    toggleMenu()
    
    // Potom scrollne na sekciu
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300) // Malé oneskorenie pre plynulé zatvorenie menu
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
        <p className="menu_text">MENU</p>
        <div className="close-triangle" onClick={toggleMenu}>
          <div className="close-icon"></div>
        </div>

        {/* Grid navigácia */}
        <div className="nav-grid-container">
          <div className="nav-grid">
            {navItems.map(item => (
              <div 
                key={item.id} 
                className="nav-item"
                onClick={() => scrollToSection(item.id)} // Pridaný onClick handler
                style={{ cursor: 'pointer' }}
              >
                <div className="nav-item-inner">
                  <div className="nav-image-wrapper">
                    <div className="nav-image-container">
                      <img src={item.image} alt={item.title} className="nav-image" />
                    </div>
                    <div className="circle-decoration circle-1"></div>
                  </div>
                  <div className="nav-item-number-wrapper">
                    <span className="nav-item-number">{item.number}</span>
                  </div>
                  <div className="line"></div>
                  <div className="nav-title-wrapper">
                    <div className="nav-title">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuButton