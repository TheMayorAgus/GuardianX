import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProducts = () => {
    const element = document.getElementById('productos-preview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Tecnología real. 
                <span className="highlight"> Soluciones concretas.</span>
                <br />
                Un futuro más claro.
              </h1>
              
              <p className="hero-subtitle">
                En SeAl Core desarrollamos herramientas que trabajan a favor de las personas, no al revés.
              </p>
              
              <div className="hero-actions">
                <button 
                  onClick={scrollToProducts}
                  className="btn btn-primary hero-cta"
                >
                  Conocé nuestros productos
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <Link to="/nosotros" className="btn btn-secondary">
                  Conocé más sobre nosotros
                </Link>
              </div>
            </div>
            <div className="hero-image">
             <div className="hero-image">
              <img
                src="/assets/equipo-corporativo.png"
                alt="Equipo SeAl Core"
                style={{
                  width: "200%",
                  maxWidth: "800px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview de Productos */}
      <section id="productos-preview" className="section products-preview">
        <div className="container">
          <div className="section-header">
            <h2>Nuestras Soluciones</h2>
            <p>Herramientas diseñadas para resolver problemas reales con tecnología inteligente</p>
          </div>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="var(--primary-blue)" opacity="0.1"/>
                  <path d="M12 20l8 8 16-16" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Sentinora</h3>
              <p>Seguridad interna inteligente con detección de amenazas en tiempo real</p>
              <Link to="/productos#sentinora" className="product-link">
                Ver más
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            <div className="product-card">
              <div className="product-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="var(--accent-green)" opacity="0.1"/>
                  <path d="M8 12h24v16H8z" stroke="var(--accent-green)" strokeWidth="2" fill="none"/>
                  <path d="M12 16h16M12 20h12M12 24h8" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Turnix</h3>
              <p>Gestión operativa sin fricción para PyMEs y equipos en crecimiento</p>
              <Link to="/productos#turnix" className="product-link">
                Ver más
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            <div className="product-card">
              <div className="product-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="var(--accent-orange)" opacity="0.1"/>
                  <path d="M20 8v24M8 20h24" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="20" cy="20" r="12" stroke="var(--accent-orange)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Turnix Home</h3>
              <p>IA para tareas del hogar con reparto justo y objetivo</p>
              <div className="coming-soon">
                <span>Coming Soon</span>
              </div>
            </div>
          </div>
          
          <div className="section-cta">
            <Link to="/productos" className="btn btn-primary">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="section values-section">
        <div className="container">
          <div className="values-content">
            <div className="values-text">
              <h2>¿Por qué SeAl Core?</h2>
              <div className="values-list">
                <div className="value-item">
                  <div className="value-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12l2 2 4-4" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="var(--primary-blue)" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Tecnología Accesible</h3>
                    <p>Soluciones que no requieren ser un experto para aprovecharlas al máximo</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="var(--accent-green)" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Calidad Comprobada</h3>
                    <p>Cada producto nace de experiencias reales y se perfecciona con uso cotidiano</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="var(--accent-orange)" strokeWidth="2"/>
                      <circle cx="9" cy="7" r="4" stroke="var(--accent-orange)" strokeWidth="2"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="var(--accent-orange)" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Enfoque Humano</h3>
                    <p>Personas antes que procesos. Liderazgo genuino antes que autoridad impuesta</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-col gap-4">
              <div className="visual-element">
                <div className="floating-card">
                  <h4>Transparencia</h4>
                  <p>Antes que retórica</p>
                </div>
                <div className="floating-card">
                  <h4>Funcionalidad</h4>
                  <p>Antes que apariencia</p>
                </div>
                <div className="floating-card">
                  <h4>Propósito</h4>
                  <p>Tecnología con sentido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para empezar?</h2>
            <p>Descubrí cómo nuestras soluciones pueden transformar tu forma de trabajar</p>
            <div className="cta-actions">
              <Link to="/contacto" className="btn btn-primary">
                Contactanos
              </Link>
              <Link to="/productos" className="btn btn-secondary">
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

