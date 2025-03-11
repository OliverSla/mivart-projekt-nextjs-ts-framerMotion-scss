import AboutSection from '@/components/sections/landing-page/aboutSection/AboutSection'
import GallerySection from '@/components/sections/landing-page/gallerySection/GallerySection'
import HeroSection from '@/components/sections/landing-page/heroSection/HeroSection'
import NeedsSection from '@/components/sections/landing-page/needsSection/NeedsSection'
import GoogleMapSection from '@/components/sections/landing-page/googleMapSection/GoogleMapSection'
import ContactSection from '@/components/sections/landing-page/contactSection/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <NeedsSection />
      <GoogleMapSection />
      <ContactSection />
    </>
  )
}
