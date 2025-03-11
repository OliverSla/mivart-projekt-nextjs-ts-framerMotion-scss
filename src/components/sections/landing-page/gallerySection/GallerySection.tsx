'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import './GallerySection.scss'

type GalleryItem = {
  id: string
  src: string
  alt: string
  width: number
  height: number
  text?: string
}

const GallerySection = () => {

  const [hoveredId, setHoveredId] = useState<string | null>(null)


  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      src: '/images-2/image01.jpg',
      alt: 'Image description 1',
      width: 1200,
      height: 800
    },
    {
      id: '2',
      src: '/images-2/image03.jpg',
      alt: 'Image description 2',
      width: 800,
      height: 1200
    },
    {
      id: '3',
      src: '/images-2/image02.jpg',
      alt: 'Image description 3',
      width: 1600,
      height: 900
    },
    {
      id: '4',
      src: '/images-2/image04.jpg',
      alt: 'Image description 4',
      width: 1000,
      height: 1000
    }
  ]


  const overlayVariants = {
    hidden: { 
      opacity: 0,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        when: "beforeChildren"
      }
    }
  }


  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: { duration: 0.2 }
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="gallery" className="gallery_section">
      <div className="gallery_grid">
        {galleryItems.map(item => (
          <div
            key={item.id}
            className="gallery_item"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="image_wrapper">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />

              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.div 
                    className="text_overlay"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                  >
                    <div className="content_wrapper">
                      <motion.h3 
                        className="text_1"
                        custom={0}
                        variants={textVariants}
                      >
                        Zmeň svoj život
                      </motion.h3>
                      <motion.h3 
                        className="text_2"
                        custom={1}
                        variants={textVariants}
                      >
                        Vďaka svojej kariére
                      </motion.h3>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GallerySection