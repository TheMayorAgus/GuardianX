import React, { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm'
import './Productos.css'

const Productos = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Scroll to section if hash is present
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="productos">
      {/* Hero Section */}
      <section className={`productos-hero ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1>Nuestros Productos</h1>
            <p className="hero-subtitle">
              Soluciones tecnológicas diseñadas para resolver problemas reales con inteligencia, 
              simplicidad y un enfoque genuinamente humano.
            </p>
          </div>
        </div>
      </section>

      {/* Sentinora */}
      <section id="sentinora" className="section product-section sentinora-section">
        <div className="container">
          <div className="product-content">
            <div className="product-header">
              <div className="product-icon sentinora-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="25" stroke="var(--primary-blue)" strokeWidth="2"/>
                  <path d="M20 30l8 8 16-16" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="30" cy="30" r="15" stroke="var(--primary-blue)" strokeWidth="1" opacity="0.5"/>
                  <circle cx="30" cy="30" r="8" stroke="var(--primary-blue)" strokeWidth="1" opacity="0.3"/>
                </svg>
              </div>
              <div className="product-title">
                <h2>Sentinora</h2>
                <p className="product-tagline">Seguridad Interna Inteligente</p>
              </div>
            </div>
            
            <div className="product-grid">
              <div className="product-info">
                <div className="pitch-section">
                  <h3>Pitch Ejecutivo</h3>
                  <p>
                    Plataforma avanzada de detección de amenazas internas con scoring de riesgo en tiempo real. 
                    Integra agentes ligeros en endpoints Windows y Linux, un backend modular en FastAPI y un 
                    motor de machine learning para detectar desviaciones de comportamiento, accesos anómalos 
                    y movimientos sospechosos.
                  </p>
                  <p>
                    Ideal para empresas que necesitan auditoría interna, prevención de fugas y visibilidad 
                    total sin un SIEM caro ni 20 analistas SOC.
                  </p>
                </div>
                
                <div className="features-section">
                  <h4>Características Principales</h4>
                  <ul className="features-list">
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Detección de amenazas en tiempo real
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Agentes ligeros multiplataforma
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Machine Learning integrado
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Scoring de riesgo automático
                    </li>
                  </ul>
                </div>
                
                <div className="cta-section">
                  <button className="btn btn-primary product-cta">
                    Solicitar Pre-Release
                  </button>
                </div>
              </div>
              
              <div className="product-form">
                <ContactForm 
                  title="Contacto Sentinora"
                  subtitle="Solicita información sobre nuestro sistema de seguridad interna"
                  productName="Sentinora"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnix */}
      <section id="turnix" className="section product-section turnix-section">
        <div className="container">
          <div className="product-content">
            <div className="product-header">
              <div className="product-icon turnix-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="10" y="10" width="40" height="40" rx="8" stroke="var(--accent-green)" strokeWidth="2"/>
                  <path d="M20 25h20M20 30h15M20 35h10" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="45" cy="20" r="3" fill="var(--accent-green)"/>
                </svg>
              </div>
              <div className="product-title">
                <h2>Turnix</h2>
                <p className="product-tagline">Gestión Operativa sin Fricción</p>
              </div>
            </div>
            
            <div className="product-grid">
              <div className="product-info">
                <div className="pitch-section">
                  <h3>Pitch Ejecutivo</h3>
                  <p>
                    Sistema pensado para PyMEs, locales y equipos en crecimiento. Permite organizar tareas, 
                    turnos, responsables y métricas clave en un entorno visual claro.
                  </p>
                  <p>
                    El jefe califica tareas (positiva o negativa), los empleados ganan insignias internas, 
                    y se pueden aplicar validaciones como contar stock o confirmar ubicación. Mezcla lo mejor 
                    del ERP, gamificación y control de operaciones en una solución plug & play.
                  </p>
                </div>
                
                <div className="features-section">
                  <h4>Características Principales</h4>
                  <ul className="features-list">
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Gestión visual de tareas y turnos
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Sistema de gamificación integrado
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Validaciones automáticas
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Métricas y reportes en tiempo real
                    </li>
                  </ul>
                </div>
                
                <div className="cta-section">
                  <button className="btn btn-primary product-cta turnix-btn">
                    Quiero Saber Más
                  </button>
                </div>
              </div>
              
              <div className="product-form">
                <ContactForm 
                  title="Contacto Turnix"
                  subtitle="Descubre cómo optimizar la gestión de tu equipo"
                  productName="Turnix"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnix Home */}
      <section id="turnix-home" className="section product-section turnix-home-section">
        <div className="container">
          <div className="product-content">
            <div className="product-header">
              <div className="product-icon turnix-home-icon">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30 10l20 15v25H10V25l20-15z" stroke="var(--accent-orange)" strokeWidth="2" fill="none"/>
                  <path d="M25 50V35h10v15" stroke="var(--accent-orange)" strokeWidth="2"/>
                  <circle cx="20" cy="30" r="2" fill="var(--accent-orange)"/>
                  <circle cx="40" cy="30" r="2" fill="var(--accent-orange)"/>
                  <path d="M30 15v10M25 20h10" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="product-title">
                <h2>Turnix Home</h2>
                <p className="product-tagline">IA para Tareas del Hogar</p>
                <div className="coming-soon-badge">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
            
            <div className="product-grid">
              <div className="product-info">
                <div className="pitch-section">
                  <h3>Pitch Ejecutivo</h3>
                  <p>
                    Pensado para hogares modernos con dinámica desigual en el reparto de tareas. 
                    Cada miembro puntúa las tareas según cuánto le molesta hacerlas, y el sistema 
                    reparte de forma justa usando IA con dados ponderados.
                  </p>
                  <p>
                    Ideal para parejas, roommates, o familias que quieren evitar fricciones cotidianas 
                    con un sistema objetivo y justo.
                  </p>
                </div>
                
                <div className="features-section">
                  <h4>Características Principales</h4>
                  <ul className="features-list">
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Reparto justo con IA
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Sistema de puntuación personalizado
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Dados ponderados inteligentes
                    </li>
                    <li>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10l3 3 7-7" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Evita conflictos domésticos
                    </li>
                  </ul>
                </div>
                
                <div className="cta-section">
                  <div className="coming-soon-cta">
                    <p>Próximamente disponible</p>
                  </div>
                </div>
              </div>
              
              <div className="product-form">
                <ContactForm 
                  title="Acceso Anticipado"
                  subtitle="Solicita participar en el piloto de Turnix Home"
                  productName="Turnix Home"
                  isComingSoon={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>¿Interesado en alguno de nuestros productos?</h2>
            <p>
              Contactanos para conocer más detalles, solicitar demos o participar en nuestros programas de acceso anticipado.
            </p>
            <div className="cta-actions">
              <a href="/contacto" className="btn btn-primary">
                Contacto General
              </a>
              <a href="/nosotros" className="btn btn-secondary">
                Conocé más sobre nosotros
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Productos

