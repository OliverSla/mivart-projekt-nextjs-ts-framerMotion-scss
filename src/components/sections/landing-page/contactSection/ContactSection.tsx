'use client'

import React, { useState } from 'react'
import './ContactSection.scss'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  })

  const [submitAttempted, setSubmitAttempted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

    // Clear error for this field if user is typing
    if (name in formErrors && formErrors[name as keyof typeof formErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: false
      })
    }
  }

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      phone: formData.phone.trim() === '',
      message: formData.message.trim().length < 10
    }

    setFormErrors(errors)
    return !Object.values(errors).some(error => error)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitAttempted(true)

    if (validateForm()) {
      console.log('Form data submitted:', formData)

      alert('Formulár bol úspešne odoslaný!')

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setSubmitAttempted(false)
    }
  }

  return (
    <>
      <div className="contact_header">
        <img className="circles" src="/images/bg-contact-circles.svg" alt="Background circles" />
      </div>
      <section id="contact" className="contact_section">
        <div className="section_wrapper">
          <div className="section_title">
            <img className="header" src="/images/header-contact.png" alt="Contact header" />
            <h2>KONTAKT</h2>
            <p>LEONIDES</p>
            <img className="ornament" src="/images/ornament.svg" alt="Ornament" />
          </div>

          <div className="text_wrapper_contact">
            <h4>
              <span>ADRESA </span> LEVOČSKÁ 5, PREŠOV, 080 01
            </h4>
            <h4>
              <span>TELEFÓN</span> +421 905 181 972
            </h4>
            <h4>
              <span>MESTO</span> PREŠOV / SLOVAKIA
            </h4>

            <div className="underline"></div>
          </div>

          <div className="contact_form_wrapper">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form_layout">
                <div className="left_column">
                  <div className="form_group">
                    <label htmlFor="name">MENO</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name && submitAttempted ? 'error' : ''}
                    />
                    {formErrors.name && submitAttempted && (
                      <div className="error_message">Toto pole musí byť vyplnené</div>
                    )}
                  </div>

                  <div className="form_group">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={formErrors.email && submitAttempted ? 'error' : ''}
                    />
                    {formErrors.email && submitAttempted && (
                      <div className="error_message">Toto pole musí byť vyplnené</div>
                    )}
                  </div>

                  <div className="form_group">
                    <label htmlFor="phone">TELEFÓN</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={formErrors.phone && submitAttempted ? 'error' : ''}
                    />
                    {formErrors.phone && submitAttempted && (
                      <div className="error_message">Toto pole musí byť vyplnené</div>
                    )}
                  </div>
                </div>

                <div className="right_column">
                  <div className="form_group message_group">
                    <label htmlFor="message">ODKAZ...</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message && submitAttempted ? 'error' : ''}
                    ></textarea>
                    {formErrors.message && submitAttempted && (
                      <div className="error_message">Správa musí obsahovať aspoň 10 znakov</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="submit_btn_wrapper">
                <button type="submit" className="submit_btn">
                  ODOSLAŤ
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="logo_wrapper">
          <img className="logo" src="/images/logo.svg" />
          <img className="ornament" src="/images/ornament.svg" />
          <h6>
            Copyright © 2025 <br /> <span>Všetky práva vyhradené. </span>
          </h6>
        </div>
      </section>
    </>
  )
}

export default ContactSection
