import React, { useEffect, useState } from 'react'
import './Contacto.css'

const Contacto = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 5000)
    }, 1500)
  }

  return (
    <div className="contacto">
      {/* Hero Section */}
      <section className={`contacto-hero ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1>Contacto</h1>
            <p className="hero-subtitle">
              ¿Tenés alguna consulta sobre nuestros productos o querés saber más sobre SeAl Core? 
              Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" stroke="var(--primary-blue)" strokeWidth="2"/>
                    <path d="M2 8l14.5 9a2 2 0 0 0 2 0L30 8" stroke="var(--primary-blue)" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Email</h3>
                <p>contacto@sealcore.com</p>
                <span>Respondemos en 24-48 horas</span>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="var(--accent-green)" strokeWidth="2"/>
                    <path d="M16 8v8l4 4" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Horario de Atención</h3>
                <p>Lunes a Viernes</p>
                <span>9:00 - 18:00 (GMT-3)</span>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2l6 18h18l-14.5 10.5L32 48 16 34 0 48l6.5-17.5L0 20h18l6-18z" stroke="var(--accent-orange)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3>Compromiso</h3>
                <p>Respuesta personalizada</p>
                <span>Cada consulta es importante</span>
              </div>

              <div className="contact-description">
                <h3>¿En qué podemos ayudarte?</h3>
                <ul>
                  <li>Consultas sobre productos específicos</li>
                  <li>Solicitudes de demo o pruebas</li>
                  <li>Información comercial y precios</li>
                  <li>Soporte técnico y documentación</li>
                  <li>Oportunidades de colaboración</li>
                  <li>Feedback y sugerencias</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-section">
              {isSubmitted ? (
                <div className="form-success-page">
                  <div className="success-animation">
                    <div className="success-icon">
                      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="28" stroke="var(--accent-green)" strokeWidth="3"/>
                        <path d="M20 32l8 8 16-16" stroke="var(--accent-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>¡Mensaje enviado exitosamente!</h3>
                    <p>
                      Gracias por contactarnos. Hemos recibido tu consulta y te responderemos 
                      en las próximas 24-48 horas.
                    </p>
                    <div className="success-details">
                      <p><strong>Asunto:</strong> {formData.subject}</p>
                      <p><strong>Email de contacto:</strong> {formData.email}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="main-contact-form">
                  <div className="form-header">
                    <h2>Formulario de Contacto</h2>
                    <p>Completá el formulario y te contactaremos a la brevedad</p>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Nombre *</label>
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
                        <label htmlFor="email">Correo Electrónico *</label>
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
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Asunto *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="Consulta sobre Sentinora">Consulta sobre Sentinora</option>
                        <option value="Consulta sobre Turnix">Consulta sobre Turnix</option>
                        <option value="Consulta sobre Turnix Home">Consulta sobre Turnix Home</option>
                        <option value="Información comercial">Información comercial</option>
                        <option value="Solicitud de demo">Solicitud de demo</option>
                        <option value="Soporte técnico">Soporte técnico</option>
                        <option value="Colaboración">Oportunidades de colaboración</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Mensaje *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Contanos más detalles sobre tu consulta..."
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
                          Enviando consulta...
                        </>
                      ) : (
                        'Enviar Consulta'
                      )}
                    </button>

                    <p className="form-note">
                      * Campos obligatorios. Tu información será tratada de forma confidencial.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section additional-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <h3>¿Preferís una llamada?</h3>
              <p>
                Si preferís hablar directamente, envianos un email con tu número de teléfono 
                y horario preferido, y coordinamos una llamada.
              </p>
            </div>
            
            <div className="info-item">
              <h3>Seguinos en redes</h3>
              <p>
                Mantente al día con nuestras novedades y actualizaciones de productos 
                siguiéndonos en nuestras redes sociales.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
            
            <div className="info-item">
              <h3>Documentación</h3>
              <p>
                ¿Buscás información técnica? Visitá nuestra documentación para desarrolladores 
                y guías de implementación.
              </p>
              <a href="#" className="btn btn-secondary">Ver Documentación</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto

