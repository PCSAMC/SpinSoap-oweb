import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { COLORS } from '../utils/colors';

const ContactPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const cardsRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  const contactChannels = [
    {
      icon: FaInstagram,
      title: 'Instagram',
      description: 'Contenido diario y tips naturales',
      href: 'https://www.instagram.com/sipin.soap/',
      handle: '@spinsoapbo',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800'
    },
    {
      icon: FaTiktok,
      title: 'TikTok',
      description: 'Videos del proceso artesanal',
      href: 'https://www.tiktok.com/@spin.soap?lang=es-419',
      handle: '@spinsoapbo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVj9ZU5C1Y9SRnJlL6YsYZa45IDw7xlwQrA&s'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: 'Pedidos y consultas directas',
      href: 'https://wa.link/gsknol',
      handle: '+591 69254578',
      image: 'data:image/jpeg;base64,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'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.fondo }}>
      {/* Hero Visual */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Contenido */}
              <div>
                <div 
                  className="inline-block px-4 py-2 rounded-full mb-6"
                  style={{
                    backgroundColor: COLORS.secundario,
                    border: `1px solid ${COLORS.borde}`
                  }}
                >
                  <span 
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: COLORS.principal }}
                  >
                    Conecta con nosotros
                  </span>
                </div>

                <h1 
                  className="mb-6"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: '800',
                    color: COLORS.textoOscuro,
                    letterSpacing: '-0.03em',
                    lineHeight: '1.05'
                  }}
                >
                  Estamos Aquí
                  <br />
                  <span style={{ color: COLORS.principal }}>Para Ti</span>
                </h1>

                <p 
                  className="mb-8"
                  style={{
                    fontSize: '1.15rem',
                    color: COLORS.textoPrincipal,
                    lineHeight: '1.7',
                    maxWidth: '500px'
                  }}
                >
                  ¿Tienes dudas sobre nuestros productos? ¿Necesitas información sobre pedidos mayoristas? 
                  Contáctanos por tu canal favorito.
                </p>

                {/* Stats */}
                <div className="flex gap-8">
                  {[
                    { number: '24h', label: 'Respuesta' },
                    { number: '100%', label: 'Natural' },
                    { number: '🇧🇴', label: 'Boliviano' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div 
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: '700',
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
              </div>

              {/* Imagen Hero */}
              <div className="relative">
                <div 
                  className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl"
                  style={{ backgroundColor: COLORS.principal }}
                ></div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1000"
                  alt="Contacto"
                  className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl"
                  style={{
                    border: `4px solid ${COLORS.blanco}`
                  }}
                />
                
                {/* Badge flotante */}
                <div 
                  className="absolute bottom-8 left-8 px-6 py-4 rounded-2xl backdrop-blur-md"
                  style={{
                    backgroundColor: `${COLORS.blanco}F5`,
                    border: `1px solid ${COLORS.borde}`,
                    boxShadow: `0 8px 32px ${COLORS.textoOscuro}20`
                  }}
                >
                  <p 
                    className="font-bold mb-1"
                    style={{ color: COLORS.textoOscuro, fontSize: '0.95rem' }}
                  >
                    Respuesta rápida
                  </p>
                  <p 
                    style={{ color: COLORS.textoSecundario, fontSize: '0.8rem' }}
                  >
                    Te respondemos en menos de 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards de Contacto con Imágenes */}
      <div className="container mx-auto px-6 py-24">
        <div 
          ref={cardsRef}
          data-section="cards"
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {contactChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{
                opacity: visibleSections.has('cards') ? 1 : 0,
                transform: visibleSections.has('cards') ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`
              }}
            >
              <div 
                className="h-full rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  backgroundColor: COLORS.blanco,
                  border: `2px solid ${COLORS.borde}`,
                  boxShadow: `0 4px 24px -8px ${COLORS.textoOscuro}10`
                }}
              >
                {/* Imagen superior */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={channel.image}
                    alt={channel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to top, ${COLORS.textoOscuro}AA, transparent)`,
                      opacity: 0.6
                    }}
                  ></div>
                  
                  {/* Icono flotante */}
                  <div 
                    className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md"
                    style={{
                      backgroundColor: `${COLORS.blanco}E6`,
                      border: `1px solid ${COLORS.blanco}30`
                    }}
                  >
                    <channel.icon 
                      className="text-2xl"
                      style={{ color: COLORS.principal }}
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  <h3 
                    className="font-bold mb-2"
                    style={{
                      fontSize: '1.5rem',
                      color: COLORS.textoOscuro
                    }}
                  >
                    {channel.title}
                  </h3>

                  <p 
                    className="mb-4 font-medium"
                    style={{
                      fontSize: '0.95rem',
                      color: COLORS.principal
                    }}
                  >
                    {channel.handle}
                  </p>

                  <p 
                    className="mb-6"
                    style={{
                      color: COLORS.textoPrincipal,
                      fontSize: '0.9rem',
                      lineHeight: '1.6'
                    }}
                  >
                    {channel.description}
                  </p>

                  {/* CTA */}
                  <div 
                    className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    style={{ color: COLORS.principal }}
                  >
                    <span>Contactar</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Final */}
        <div 
          className="mt-24 text-center p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${COLORS.secundario}80, ${COLORS.blanco})`,
            border: `2px solid ${COLORS.borde}`
          }}
        >
          {/* Decoración */}
          <div 
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-30 blur-2xl"
            style={{ backgroundColor: COLORS.principal }}
          ></div>

          <h3 
            className="mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '700',
              color: COLORS.textoOscuro
            }}
          >
            ¿Listo para conocer nuestros productos?
          </h3>
          <p 
            className="mb-8"
            style={{
              color: COLORS.textoPrincipal,
              fontSize: '1.05rem',
              lineHeight: '1.7'
            }}
          >
            Descubre nuestra línea de jabones artesanales 100% naturales
          </p>
          <a 
            href="/producto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: COLORS.principal,
              color: COLORS.blanco,
              boxShadow: `0 4px 20px ${COLORS.principal}30`
            }}
          >
            <span>Ver Productos</span>
            <svg 
              className="w-5 h-5" 
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
  );
};

export default ContactPage;