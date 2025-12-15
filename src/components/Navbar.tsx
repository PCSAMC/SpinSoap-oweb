import {React , useState , useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Package, Users, Mail } from 'lucide-react';
import { COLORS } from '../utils/colors';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Inicio', path: '/', icon: Home },
    { name: 'Producto', path: '/producto', icon: Package },
    { name: 'Nosotros', path: '/nosotros', icon: Users },
    { name: 'Contacto', path: '/contacto', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ 
          backgroundColor: isScrolled ? `${COLORS.blanco}F5` : `${COLORS.fondo}E6`,
          backdropFilter: 'blur(12px)',
          boxShadow: isScrolled 
            ? `0 4px 24px -8px ${COLORS.textoOscuro}15` 
            : 'none',
          borderBottom: `1px solid ${isScrolled ? COLORS.borde : 'transparent'}`
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <NavLink 
              to="/"
              className="flex items-center gap-3 group"
            >
              {/* Icono decorativo */}
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: COLORS.principal,
                  boxShadow: `0 4px 12px ${COLORS.principal}30`
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>🍃</span>
              </div>
              
              {/* Texto del logo */}
              <div className="flex flex-col">
                <span 
                  className="text-2xl font-bold tracking-tight leading-none"
                  style={{ 
                    color: COLORS.textoOscuro,
                    letterSpacing: '-0.02em'
                  }}
                >
                  SPIN SOAP
                </span>
                <span 
                  className="text-xs font-medium"
                  style={{ 
                    color: COLORS.principal,
                    letterSpacing: '0.1em'
                  }}
                >
                  Natural 
                </span>
              </div>
            </NavLink>
            
            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center gap-2">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group"
                    style={({ isActive }) => ({
                      color: isActive ? COLORS.principal : COLORS.textoPrincipal,
                      backgroundColor: isActive ? COLORS.secundario : 'transparent',
                      fontSize: '0.95rem',
                      fontWeight: '600'
                    })}
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10 flex items-center gap-2">
                          <Icon 
                            size={18} 
                            className="transition-transform duration-300 group-hover:scale-110"
                            style={{
                              strokeWidth: isActive ? 2.5 : 2
                            }}
                          />
                          {link.name}
                        </span>
                        {/* Underline animado que crece en hover Y cuando está activo */}
                        <div 
                          className="absolute left-1/2 h-0.5 rounded-full transition-all duration-500 ease-out group-hover:w-3/4"
                          style={{
                            bottom: '6px',
                            width: isActive ? '75%' : '0%',
                            backgroundColor: COLORS.principal,
                            transform: 'translateX(-50%)',
                            transformOrigin: 'center'
                          }}
                        ></div>
                        {/* Hover background */}
                        <div 
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{
                            backgroundColor: COLORS.secundario,
                            display: isActive ? 'none' : 'block'
                          }}
                        ></div>
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>
            
            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* CTA Desktop */}
              <a 
                href="https://wa.link/gsknol" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 group relative overflow-hidden"
                style={{ 
                  backgroundColor: COLORS.principal,
                  color: COLORS.blanco,
                  fontSize: '0.9rem',
                  boxShadow: `0 4px 16px ${COLORS.principal}30`
                }}
              >
                {/* Efecto de brillo al hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${COLORS.blanco}30, transparent)`,
                    transform: 'translateX(-100%)',
                    animation: 'shine 1.5s infinite'
                  }}
                ></div>
                
                <span className="relative z-10">Comprar Ahora</span>
                <svg 
                  className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Botón hamburguesa mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: isMobileMenuOpen ? COLORS.secundario : 'transparent',
                  color: COLORS.textoPrincipal
                }}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span 
                    className="w-full h-0.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: COLORS.textoOscuro,
                      transform: isMobileMenuOpen ? 'rotate(45deg) translateY(9px)' : 'none'
                    }}
                  ></span>
                  <span 
                    className="w-full h-0.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: COLORS.textoOscuro,
                      opacity: isMobileMenuOpen ? 0 : 1
                    }}
                  ></span>
                  <span 
                    className="w-full h-0.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: COLORS.textoOscuro,
                      transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-9px)' : 'none'
                    }}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <div 
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          backgroundColor: `${COLORS.textoOscuro}80`,
          backdropFilter: 'blur(8px)',
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className="absolute top-20 right-6 left-6 p-6 rounded-3xl shadow-2xl"
          style={{
            backgroundColor: COLORS.blanco,
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            border: `2px solid ${COLORS.borde}`
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-2">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 relative group"
                  style={({ isActive }) => ({
                    color: isActive ? COLORS.principal : COLORS.textoPrincipal,
                    backgroundColor: isActive ? COLORS.secundario : 'transparent',
                    fontSize: '1.05rem',
                    transitionDelay: `${index * 50}ms`
                  })}
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-3 relative z-10">
                        <Icon 
                          size={20} 
                          style={{
                            strokeWidth: isActive ? 2.5 : 2
                          }}
                        />
                        {link.name}
                      </span>
                      {/* Underline animado en mobile con hover */}
                      <div 
                        className="absolute left-1/2 h-0.5 rounded-full transition-all duration-500 ease-out group-hover:w-4/5"
                        style={{
                          bottom: '8px',
                          width: isActive ? '80%' : '0%',
                          backgroundColor: COLORS.principal,
                          transform: 'translateX(-50%)',
                          transformOrigin: 'center'
                        }}
                      ></div>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* CTA Mobile */}
          <a 
            href="https://wa.link/gsknol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all duration-300"
            style={{ 
              backgroundColor: COLORS.principal,
              color: COLORS.blanco,
              fontSize: '1rem',
              boxShadow: `0 4px 16px ${COLORS.principal}30`
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Comprar Ahora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </>
  );
};

export default Navbar;