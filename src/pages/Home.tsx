import React, { useEffect, useRef, useState } from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitSecction';
import { COLORS } from '../utils/colors';

const Home: React.FC = () => {
  const philosophyRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setVisibleSections(prev => new Set([...prev, sectionId]));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    if (philosophyRef.current) observer.observe(philosophyRef.current);
    if (productRef.current) observer.observe(productRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <HeroSection />

      {/* Sección Filosofía - Rediseñada */}
      <section 
        ref={philosophyRef}
        data-section="philosophy"
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: COLORS.blanco }}
      >
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
             style={{ backgroundColor: COLORS.secundarioMedio }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
             style={{ backgroundColor: COLORS.acento }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge superior */}
            <div 
              className="inline-block px-5 py-2 rounded-full mb-6"
              style={{
                backgroundColor: COLORS.secundario,
                border: `1px solid ${COLORS.borde}`,
                opacity: visibleSections.has('philosophy') ? 1 : 0,
                transform: visibleSections.has('philosophy') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <span style={{ 
                color: COLORS.principal,
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                Nuestra Esencia
              </span>
            </div>

            {/* Título */}
            <h2 
              className="mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: '800',
                color: COLORS.textoOscuro,
                letterSpacing: '-0.02em',
                lineHeight: '1.2',
                opacity: visibleSections.has('philosophy') ? 1 : 0,
                transform: visibleSections.has('philosophy') ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
              }}
            >
              Cuidado Natural, 
              <span style={{ color: COLORS.principal }}> Resultados Reales</span>
            </h2>

            {/* Descripción */}
            <p 
              className="mb-12 max-w-2xl mx-auto"
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.8',
                color: COLORS.textoPrincipal,
                fontWeight: '400',
                opacity: visibleSections.has('philosophy') ? 1 : 0,
                transform: visibleSections.has('philosophy') ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              Transformamos la riqueza natural de la espinaca en productos de lujo para tu piel. 
              Sin químicos agresivos, respetando tu cuerpo y el planeta.
            </p>

            {/* Cards de valores */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: '🌿', title: '100% Natural', desc: 'Ingredientes puros' },
                { icon: '🐰', title: 'Cruelty Free', desc: 'Libre de maltrato' },
                { icon: '🇧🇴', title: 'Hecho en Bolivia', desc: 'Orgullo nacional' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group"
                  style={{
                    opacity: visibleSections.has('philosophy') ? 1 : 0,
                    transform: visibleSections.has('philosophy') ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + index * 0.1}s`
                  }}
                >
                  <div 
                    className="p-8 rounded-2xl transition-all duration-300 cursor-pointer h-full hover:scale-[1.03]"
                    style={{
                      backgroundColor: COLORS.fondo,
                      border: `2px solid ${COLORS.borde}`,
                      boxShadow: `0 4px 20px -4px ${COLORS.textoOscuro}08`
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: COLORS.secundario,
                        fontSize: '2rem'
                      }}
                    >
                      {item.icon}
                    </div>
                    <h4 
                      className="font-bold mb-2"
                      style={{
                        fontSize: '1.1rem',
                        color: COLORS.textoOscuro
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: COLORS.textoSecundario
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <BenefitsSection />

      {/* Sección Producto Destacado - Rediseñada */}
      <section 
        ref={productRef}
        data-section="product"
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: COLORS.fondo }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Imagen del producto */}
              <div 
                className="relative"
                style={{
                  opacity: visibleSections.has('product') ? 1 : 0,
                  transform: visibleSections.has('product') ? 'translateX(0) rotate(0deg)' : 'translateX(-50px) rotate(-5deg)',
                  transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Decoración detrás de la imagen */}
                <div 
                  className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                  style={{ backgroundColor: COLORS.principal }}
                ></div>
                
                <img 
                  src="IMG-20251214-WA0035.jpg" 
                  alt="Spin Soap Bar" 
                  className="relative rounded-3xl shadow-2xl w-full transition-transform duration-500 hover:scale-105"
                  style={{
                    border: `4px solid ${COLORS.blanco}`
                  }}
                />

                {/* Badge flotante */}
                <div 
                  className="absolute -top-4 -right-4 px-6 py-3 rounded-full shadow-xl"
                  style={{
                    backgroundColor: COLORS.acento,
                    color: COLORS.blanco,
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    transform: visibleSections.has('product') ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                  }}
                >
                  🌟 Prueba lo mejor
                </div>
              </div>

              {/* Contenido */}
              <div
                style={{
                  opacity: visibleSections.has('product') ? 1 : 0,
                  transform: visibleSections.has('product') ? 'translateX(0)' : 'translateX(50px)',
                  transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }}
              >
                {/* Badge */}
                <div 
                  className="inline-block px-4 py-2 rounded-full mb-4"
                  style={{
                    backgroundColor: COLORS.secundario,
                    border: `1px solid ${COLORS.borde}`
                  }}
                >
                  <span style={{ 
                    color: COLORS.principal,
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase'
                  }}>
                    Producto 
                  </span>
                </div>

                {/* Título */}
                <h2 
                  className="mb-4"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '800',
                    color: COLORS.textoOscuro,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2'
                  }}
                >
                  El Jabón de Espinaca
                </h2>

                {/* Descripción */}
                <p 
                  className="mb-6"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: COLORS.textoPrincipal
                  }}
                >
                  Una barra cargada de nutrientes que transforma tu rutina de cuidado. 
                  Descubre por qué más de 20 clientes aman su piel después de usarlo.
                </p>

                {/* Stats rápidos */}
                <div className="flex gap-6 mb-8">
                  {[
                    { number: '100%', label: 'Natural' },
                    { number: '20+', label: 'Clientes felices' },
                    { number: '5★', label: 'Calificación' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div 
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: '800',
                          color: COLORS.principal,
                          lineHeight: '1'
                        }}
                      >
                        {stat.number}
                      </div>
                      <div 
                        style={{
                          fontSize: '0.8rem',
                          color: COLORS.textoSecundario,
                          marginTop: '0.25rem'
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div 
                  className="p-6 rounded-2xl mb-8 relative"
                  style={{
                    backgroundColor: COLORS.blanco,
                    borderLeft: `4px solid ${COLORS.principal}`,
                    boxShadow: `0 4px 20px -4px ${COLORS.textoOscuro}10`
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span style={{ fontSize: '2rem', lineHeight: '1' }}>💬</span>
                    <div>
                      <p 
                        style={{
                          fontSize: '1rem',
                          fontStyle: 'italic',
                          color: COLORS.textoPrincipal,
                          marginBottom: '0.5rem',
                          lineHeight: '1.6'
                        }}
                      >
                        "Mi piel nunca se había sentido tan suave y radiante. ¡Es increíble!"
                      </p>
                      <p style={{
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: COLORS.principal
                      }}>
                        — Ana M.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://spin-soap-oweb.vercel.app/producto"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: COLORS.principal,
                    color: COLORS.blanco,
                    fontSize: '1rem',
                    boxShadow: `0 8px 24px -8px ${COLORS.principal}60`
                  }}
                >
                  <span>Ver Producto Completo</span>
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
        </div>
      </section>
    </div>
  );
};

export default Home;