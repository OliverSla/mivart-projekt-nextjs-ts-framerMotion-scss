'use client'

import React, { useState, useEffect } from 'react'
import './Header.scss'
import MenuButton from './MenuButton'
import { motion } from 'framer-motion'

// Definícia sekcií a ich ID v dokumente
const sections = [
  { id: "hero", name: "ÚVOD", number: "01" },
  { id: "about", name: "O SPOLOČNOSTI", number: "02" },
  { id: "gallery", name: "GALÉRIA", number: "03" },
  { id: "needs", name: "POTREBY ĽUDÍ", number: "04" },
  { id: "googleMap", name: "GOOGLE MAP", number: "05" },
  { id: "contact", name: "KONTAKT", number: "06" }
]

const Header = () => {
  // State pre aktívnu sekciu
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Funkcia pre scroll na sekciu
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Použitie smooth scroll
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Effect pre detekciu aktívnej sekcie pri scrollovaní
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset pre lepšiu detekciu

      // Nájdenie aktuálnej sekcie
      let currentSection = null;
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Pridanie a odstránenie event listenera
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializácia pri načítaní
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className="primary_header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 1, 
        ease: [0.25, 1, 0.5, 1],
        delay: 0.8
      }}
    >
      <div className="header_wrapper">
        <motion.div 
          className="left_nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Prvá polovica sekcií (ľavý stĺpec) */}
          {sections.slice(0, 3).map((section, index) => (
            <motion.div 
              key={section.id}
              className={`nav_item_left ${activeSection === section.id ? 'active' : ''}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              onClick={() => scrollToSection(section.id)}
            >
              <p className="nav_link_text">{section.name}</p>
              <div className={`line ${activeSection === section.id ? 'active_line' : ''}`}></div>
              <p className="nav_link_number">{section.number}</p>
            </motion.div>
          ))}
        </motion.div>

        <MenuButton />

        <motion.div 
          className="right_nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Druhá polovica sekcií (pravý stĺpec) */}
          {sections.slice(3).map((section, index) => (
            <motion.div 
              key={section.id}
              className={`nav_item_right ${activeSection === section.id ? 'active' : ''}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              onClick={() => scrollToSection(section.id)}
            >
              <p className="nav_link_text">{section.name}</p>
              <div className={`line ${activeSection === section.id ? 'active_line' : ''}`}></div>
              <p className="nav_link_number">{section.number}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header