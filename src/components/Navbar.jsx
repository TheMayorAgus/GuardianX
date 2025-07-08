import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/nosotros') {
      window.location.href = `/nosotros#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    closeDropdowns()
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeDropdowns}>
          <span className="logo-text">SeAl Core</span>
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeDropdowns}
          >
            Home
          </Link>

          <div 
            className="navbar-dropdown"
            onMouseEnter={() => handleDropdownToggle('nosotros')}
            onMouseLeave={closeDropdowns}
          >
            <Link 
              to="/nosotros" 
              className={`navbar-link ${location.pathname === '/nosotros' ? 'active' : ''}`}
            >
              Nosotros
              <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            
            {activeDropdown === 'nosotros' && (
              <div className="dropdown-menu">
                <button 
                  onClick={() => scrollToSection('mision')}
                  className="dropdown-item"
                >
                  Nuestra Misión
                </button>
                <button 
                  onClick={() => scrollToSection('vision')}
                  className="dropdown-item"
                >
                  Nuestra Visión
                </button>
                <button 
                  onClick={() => scrollToSection('principios')}
                  className="dropdown-item"
                >
                  Nuestros Principios
                </button>
                <button 
                  onClick={() => scrollToSection('compromiso')}
                  className="dropdown-item"
                >
                  Nuestro Compromiso
                </button>
              </div>
            )}
          </div>

          <div 
            className="navbar-dropdown"
            onMouseEnter={() => handleDropdownToggle('productos')}
            onMouseLeave={closeDropdowns}
          >
            <Link 
              to="/productos" 
              className={`navbar-link ${location.pathname === '/productos' ? 'active' : ''}`}
            >
              Productos
              <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            
            {activeDropdown === 'productos' && (
              <div className="dropdown-menu">
                <Link 
                  to="/productos#sentinora" 
                  className="dropdown-item"
                  onClick={closeDropdowns}
                >
                  Sentinora
                </Link>
                <Link 
                  to="/productos#turnix" 
                  className="dropdown-item"
                  onClick={closeDropdowns}
                >
                  Turnix
                </Link>
                <Link 
                  to="/productos#turnix-home" 
                  className="dropdown-item"
                  onClick={closeDropdowns}
                >
                  Turnix Home
                </Link>
              </div>
            )}
          </div>

          <Link 
            to="/contacto" 
            className={`navbar-link ${location.pathname === '/contacto' ? 'active' : ''}`}
            onClick={closeDropdowns}
          >
            Contacto
          </Link>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

