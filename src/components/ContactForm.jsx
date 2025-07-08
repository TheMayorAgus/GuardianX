import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = ({ title, subtitle, productName, isComingSoon = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="contact-form-container">
        <div className="form-success">
          <div className="success-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="var(--accent-green)" strokeWidth="2"/>
              <path d="M16 24l6 6 12-12" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>¡Mensaje enviado!</h3>
          <p>Gracias por tu interés en {productName}. Te contactaremos pronto.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder={
              isComingSoon 
                ? "Cuéntanos por qué te interesa participar en el piloto de Turnix Home..."
                : `Cuéntanos más sobre tu interés en ${productName}...`
            }
          />
        </div>
        
        <button 
          type="submit" 
          className={`btn btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Enviando...
            </>
          ) : (
            isComingSoon ? 'Solicitar Acceso Anticipado' : 'Enviar Consulta'
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm

