import React, { useEffect, useState } from 'react';
import { COLORS } from '../utils/colors';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image con Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://static9.depositphotos.com/1307373/1078/i/450/depositphotos_10787179-stock-photo-freshly-sown-sunflower-field.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Overlay oscuro simple */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${COLORS.textoOscuro}DD 0%, ${COLORS.principal}AA 100%)`
          }}
        ></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge superior minimalista */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              backgroundColor: `${COLORS.blanco}15`,
              border: `1px solid ${COLORS.blanco}25`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <span style={{ fontSize: '1rem' }}>🌿</span>
            <span 
              className="text-xs font-semibold tracking-wider uppercase"
              style={{ 
                color: COLORS.blanco,
                letterSpacing: '0.15em'
              }}
            >
              100% Natural
            </span>
          </div>

          {/* Título Principal */}
          <h1 
            className="mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              color: COLORS.blanco,
              textShadow: `0 4px 24px ${COLORS.textoOscuro}60`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            Nutrición Natural
            <br />
            <span style={{ color: COLORS.acento }}>
              Para Tu Piel
            </span>
          </h1>

          {/* Descripción */}
          <p 
            className="mb-12 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              lineHeight: '1.7',
              color: COLORS.blanco,
              fontWeight: '300',
              letterSpacing: '0.01em',
              textShadow: `0 2px 12px ${COLORS.textoOscuro}60`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}
          >
            Descubre el poder de la espinaca y los aceites esenciales para una piel radiante
          </p>

          {/* Un solo botón CTA */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
            }}
          >
            <a 
              href="https://wa.link/gsknol"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: COLORS.principal,
                color: COLORS.blanco,
                fontSize: '1.1rem',
                boxShadow: `0 8px 32px ${COLORS.principal}50`
              }}
            >
              <span>Comprar Ahora</span>
              
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        style={{
          opacity: isVisible ? 0.7 : 0,
          transition: 'opacity 1s ease 1s'
        }}
      >
        <div 
          className="w-6 h-10 rounded-full flex items-start justify-center p-2 cursor-pointer"
          style={{
            border: `2px solid ${COLORS.blanco}30`
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div 
            className="w-1 h-2 rounded-full animate-scroll-down"
            style={{ backgroundColor: COLORS.blanco }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-down {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(12px);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;