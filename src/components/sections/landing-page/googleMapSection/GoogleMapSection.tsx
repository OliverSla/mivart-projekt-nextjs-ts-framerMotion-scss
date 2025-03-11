import React from 'react'
import './GoogleMapSection.scss'

const GoogleMapSection = () => {
  return (
    <section id="googleMap" className="googleMapSection_wrapper">
      <div className="google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1315.3417791325992!2d21.239071416430287!3d48.99738417134633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee01cf1b3d1c7%3A0x5e2e5794a9df2e57!2sLevo%C4%8Dsk%C3%A1%205%2C%20080%2001%20Pre%C5%A1ov!5e0!3m2!1sen!2ssk!4v1710168428957!5m2!1sen!2ssk&maptype=hybrid"
          width="100%"
          height="700"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default GoogleMapSection
