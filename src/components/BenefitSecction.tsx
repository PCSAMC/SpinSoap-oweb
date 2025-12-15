import React, { useEffect, useRef, useState } from 'react';
import { COLORS } from '../utils/colors';

const INGREDIENTS = [
  { 
    title: 'Espinaca Orgánica', 
    desc: 'Rica en vitaminas A, C y K. Antioxidantes naturales que combaten el envejecimiento y revitalizan tu piel desde la raíz.', 
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=800',
    benefits: ['Antioxidante', 'Revitaliza', 'Anti-edad']
  },
  { 
    title: 'Aceite Vegetal Mixto', 
    desc: 'Mezcla de aceites naturales que nutren profundamente, dejando tu piel suave, hidratada y con brillo natural.',
    image: 'data:image/jpeg;base64,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',
    benefits: ['Hidratación', 'Nutrición', 'Suavidad']
  },
  { 
    title: 'Esencia de Menta', 
    desc: 'Frescura natural que estimula, refresca y despierta tu piel. Propiedades calmantes y aromáticas únicas.',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&q=80&w=800',
    benefits: ['Frescura', 'Calmante', 'Aromático']
  },
  { 
    title: 'Agua Destilada', 
    desc: 'Base pura y limpia que garantiza la máxima calidad. Sin impurezas, solo lo mejor para tu piel.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800',
    benefits: ['Pureza', 'Calidad', 'Limpieza']
  },
];

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll('.ingredient-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 relative overflow-hidden"
      style={{ 
        backgroundColor: COLORS.fondoSecundario,
      }}
    >
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block px-6 py-2.5 rounded-full" style={{ 
            backgroundColor: COLORS.secundario,
            border: `1px solid ${COLORS.borde}`
          }}>
            <span style={{ 
              color: COLORS.principal,
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              Ingredientes Naturales
            </span>
          </div>
          
          <h2 style={{ 
            color: COLORS.textoOscuro,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            marginBottom: '1rem'
          }}>
            Lo Mejor de la Naturaleza
          </h2>
          
          <p style={{ 
            color: COLORS.textoSecundario,
            fontSize: '1.15rem',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Cada ingrediente ha sido seleccionado por sus propiedades únicas para nutrir y cuidar tu piel
          </p>
        </div>

        {/* Grid de ingredientes */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {INGREDIENTS.map((item, index) => {
            const isVisible = visibleCards.includes(index);
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index}
                data-index={index}
                className="ingredient-card group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`
                }}
              >
                <div 
                  className="relative h-full rounded-3xl overflow-hidden"
                  style={{
                    backgroundColor: COLORS.blanco,
                    border: `2px solid ${COLORS.borde}`,
                    boxShadow: `0 4px 24px -8px ${COLORS.textoOscuro}10`
                  }}
                >
                  {/* Imagen */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${COLORS.textoOscuro}DD, transparent)`
                      }}
                    ></div>
                    
                    {/* Título sobre imagen */}
                    <h3 
                      className="absolute bottom-6 left-6 right-6"
                      style={{ 
                        color: COLORS.blanco,
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        letterSpacing: '-0.02em',
                        textShadow: `0 4px 12px ${COLORS.textoOscuro}60`
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Contenido */}
                  <div className="p-8">
                    {/* Descripción */}
                    <p style={{ 
                      color: COLORS.textoPrincipal,
                      fontSize: '1rem',
                      lineHeight: '1.75',
                      marginBottom: '1.5rem'
                    }}>
                      {item.desc}
                    </p>

                    {/* Benefits tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.benefits.map((benefit, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: COLORS.secundario,
                            color: COLORS.principal,
                            border: `1px solid ${COLORS.borde}`
                          }}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decoración esquina */}
                  <div 
                    className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{
                      backgroundColor: COLORS.principal
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

     

      </div>
    </section>
  );
};

export default BenefitsSection;