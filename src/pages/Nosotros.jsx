import React, { useEffect, useState } from 'react'
import './Nosotros.css'

const Nosotros = () => {
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
    <div className="nosotros">
      {/* Hero Section */}
      <section className={`nosotros-hero ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="hero-content">
            <h1>Sobre Nosotros – SeAl Core</h1>
            <p className="hero-subtitle">
              En un mundo repleto de promesas infladas y tecnologías desconectadas de la realidad cotidiana, 
              nace <strong>SeAl Core</strong>. No como una compañía más, sino como un <em>nuevo paradigma</em> en 
              cómo se diseñan, construyen y utilizan las soluciones digitales.
            </p>
          </div>
        </div>
      </section>

      {/* Razón de Ser */}
      <section className="section razon-ser">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <div className="section-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="var(--primary-blue)" strokeWidth="2"/>
                  <path d="M16 24l6 6 12-12" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>✨ Nuestra Razón de Ser</h2>
              <p>
                SeAl Core existe para crear <strong>tecnología accesible, funcional y significativa</strong>, 
                enfocada en resolver problemas reales con inteligencia, empatía y sentido común.
              </p>
              <p>
                Cada uno de nuestros productos nace de la experiencia directa. No desde una torre de marfil, 
                sino desde el terreno: empleados frustrados, tareas mal distribuidas, procesos caóticos. 
                Hemos vivido esos desafíos y hoy los transformamos en soluciones concretas.
              </p>
            </div>
            <div className="content-visual">
              <div className="visual-card">
                <h3>Experiencia Real</h3>
                <p>Problemas vividos en primera persona</p>
              </div>
              <div className="visual-card">
                <h3>Soluciones Concretas</h3>
                <p>Tecnología que funciona en el mundo real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section id="mision" className="section mision">
        <div className="container">
          <div className="content-grid reverse">
            <div className="content-visual">
              <div className="mission-visual">
                <div className="orbit-container">
                  <div className="center-element">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="25" stroke="var(--primary-blue)" strokeWidth="2"/>
                      <path d="M20 30h20M30 20v20" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="orbit-item orbit-1">Organización</div>
                  <div className="orbit-item orbit-2">Transparencia</div>
                  <div className="orbit-item orbit-3">Motivación</div>
                </div>
              </div>
            </div>
            <div className="content-text">
              <div className="section-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 4l6 18h18l-14.5 10.5L40 50 24 36 8 50l6.5-17.5L0 22h18l6-18z" stroke="var(--accent-green)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h2 id="mision-title">🚀 Nuestra Misión</h2>
              <p>
                Desarrollar herramientas digitales que mejoren la <strong>organización</strong>, 
                <strong>transparencia</strong> y <strong>motivación</strong>, tanto en entornos 
                laborales como en la vida cotidiana.
              </p>
              <p>
                Desde sistemas de gestión operativa como <em>Turnix</em>, hasta plataformas de 
                ciberseguridad como <em>Sentinora</em>, pasando por soluciones inteligentes para 
                el hogar, todos nuestros desarrollos comparten un objetivo común:
              </p>
              <blockquote>
                Hacer que la tecnología trabaje <strong>a favor de las personas</strong>, no al revés.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section id="vision" className="section vision">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <div className="section-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="var(--primary-blue)" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="3" fill="var(--primary-blue)"/>
                  <path d="M24 14v-4M24 38v-4M34 24h4M10 24h4M31.5 16.5l2.8-2.8M13.7 34.3l2.8-2.8M31.5 31.5l2.8 2.8M13.7 13.7l2.8 2.8" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h2>🌍 Nuestra Visión</h2>
              <p>
                Consolidarnos como una <strong>software factory independiente y confiable</strong>, 
                capaz de construir productos modulares, conectados, potentes y simples. Un ecosistema 
                inclusivo, que no exija pertenecer a una élite tecnológica para ser aprovechado.
              </p>
              <p>Aspiramos a que SeAl Core sea sinónimo de:</p>
              <ul className="vision-list">
                <li>Soluciones sólidas y accesibles.</li>
                <li>Cultura laboral ética y motivadora.</li>
                <li>Innovación con propósito y sostenibilidad.</li>
              </ul>
            </div>
            <div className="content-visual">
              <div className="vision-visual">
                <div className="ecosystem-diagram">
                  <div className="ecosystem-center">SeAl Core</div>
                  <div className="ecosystem-node node-1">Accesible</div>
                  <div className="ecosystem-node node-2">Confiable</div>
                  <div className="ecosystem-node node-3">Modular</div>
                  <div className="ecosystem-node node-4">Inclusivo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principios */}
      <section id="principios" className="section principios">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="32" rx="4" stroke="var(--accent-orange)" strokeWidth="2"/>
                <path d="M16 20h16M16 24h12M16 28h8" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2>⚖️ Nuestros Principios</h2>
          </div>
          
          <div className="principios-grid">
            <div className="principio-card">
              <div className="principio-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 4v24M8 12l8-8 8 8" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Personas antes que procesos</h3>
              <p>El factor humano es siempre nuestra prioridad principal</p>
            </div>
            
            <div className="principio-card">
              <div className="principio-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="var(--accent-green)" strokeWidth="2"/>
                  <path d="M12 16l3 3 6-6" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Liderazgo genuino antes que autoridad impuesta</h3>
              <p>Inspiramos con el ejemplo, no con imposiciones</p>
            </div>
            
            <div className="principio-card">
              <div className="principio-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="24" height="24" rx="4" stroke="var(--accent-orange)" strokeWidth="2"/>
                  <path d="M12 16h8M16 12v8" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Transparencia antes que retórica</h3>
              <p>Comunicación clara y honesta en cada interacción</p>
            </div>
            
            <div className="principio-card">
              <div className="principio-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 16h16M16 8v16" stroke="var(--primary-blue)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="16" cy="16" r="12" stroke="var(--primary-blue)" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Funcionalidad antes que apariencia</h3>
              <p>Lo que importa es que funcione, no solo que se vea bien</p>
            </div>
            
            <div className="principio-card">
              <div className="principio-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 8v16M8 16h16" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="16" cy="16" r="12" stroke="var(--accent-green)" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Tecnología al servicio del usuario</h3>
              <p>Nunca al revés. El usuario es el centro de todo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="section compromiso">
        <div className="container">
          <div className="compromiso-content">
            <div className="section-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" stroke="var(--primary-blue)" strokeWidth="2"/>
                <path d="M20 32l8 8 16-16" stroke="var(--primary-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>🧱 Nuestro Compromiso</h2>
            <div className="compromiso-text">
              <p>
                No prometemos transformar el mundo de un día para otro. Pero sí estamos decididos 
                a mejorar el día a día de quienes lo habitan, una solución útil a la vez.
              </p>
              <p>
                Producto a producto. Idea a idea. Con integridad, criterio y vocación genuina.
              </p>
              <p className="compromiso-final">
                <strong>Esto recién empieza.</strong>
              </p>
            </div>
            
            <div className="compromiso-stats">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Compromiso</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Mejora Continua</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Solución a la vez</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nosotros

