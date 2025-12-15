import React, { useEffect, useRef, useState } from 'react';
import { COLORS } from '../utils/colors';

const AboutPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  const team = [
    { 
      name: 'Sergio Alexander', 
      surname: 'Mendoza Choque', 
      role: 'Gestión & Estrategia',
      image: 'ser.jpg'
    },
    { 
      name: 'Ilsen Ariana', 
      surname: 'Beltran Soliz', 
      role: 'Desarrollo de Producto',
      image: 'ari.jpg'},
    { 
      name: 'Luciana Cecilia', 
      surname: 'Yahuita Lazarte', 
      role: 'Marketing & Diseño',
      image: 'lu.jpg'
    },
    { 
      name: 'Einar Andrés', 
      surname: 'Guillen Boero', 
      role: 'Logística & Ventas',
      image: 'einar.jpg'
    },
  ];

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

    [heroRef, storyRef, processRef, teamRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: COLORS.fondo }}>
      {/* Hero con Grid */}
      <div 
        ref={heroRef}
        data-section="hero"
        className="relative overflow-hidden py-24"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Contenido Izquierdo */}
            <div
              style={{
                opacity: visibleSections.has('hero') ? 1 : 0,
                transform: visibleSections.has('hero') ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
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
                  Nuestra Historia
                </span>
              </div>

              <h1 
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: '800',
                  color: COLORS.textoOscuro,
                  letterSpacing: '-0.03em',
                  lineHeight: '1.05',
                  marginBottom: '1.5rem'
                }}
              >
                Cuidado Natural
                <br />
                <span style={{ color: COLORS.principal }}>Desde Bolivia</span>
              </h1>

              <p 
                style={{
                  fontSize: '1.15rem',
                  color: COLORS.textoPrincipal,
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}
              >
                En SPIN SOAP transformamos la riqueza natural de la espinaca en productos de lujo 
                para tu piel. Creando jabones artesanales con pasión y compromiso ambiental.
              </p>

              {/* Stats */}
              <div className="flex gap-8">
                {[
                  { number: '100%', label: 'Natural' },
                  { number: '2025', label: 'Fundado' },
                  { number: '🇧🇴', label: 'Bolivia' }
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

            {/* Imagen Derecha */}
            <div 
              className="relative"
              style={{
                opacity: visibleSections.has('hero') ? 1 : 0,
                transform: visibleSections.has('hero') ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}
            >
              <div 
                className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl"
                style={{ backgroundColor: COLORS.principal }}
              ></div>
              
              <img 
                src="IMG-20251214-WA0008.jpg"
                alt="Productos naturales"
                className="relative rounded-3xl w-full h-[500px] object-cover"
                style={{
                  border: `4px solid ${COLORS.blanco}`,
                  boxShadow: `0 20px 60px -15px ${COLORS.textoOscuro}20`
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
                  Hecho a mano
                </p>
                <p 
                  style={{ color: COLORS.textoSecundario, fontSize: '0.8rem' }}
                >
                  Cada jabón es único
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Misión y Visión con Imágenes */}
      <div 
        ref={storyRef}
        data-section="story"
        className="container mx-auto px-6 py-24"
      >
        {/* Título sección Misión y Visión */}
<div className="text-center mb-16 max-w-3xl mx-auto">
  <h2
    style={{
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '800',
      color: COLORS.textoOscuro,
      marginBottom: '1rem'
    }}
  >
    Nuestros Valores
  </h2>

  <p
    style={{
      color: COLORS.textoSecundario,
      fontSize: '1.05rem',
      lineHeight: '1.6'
    }}
  >
    Lo que nos guía como marca artesanal y natural
  </p>
</div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Misión */}
          <div 
            style={{
              opacity: visibleSections.has('story') ? 1 : 0,
              transform: visibleSections.has('story') ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div 
              className="rounded-3xl overflow-hidden"
              style={{
                backgroundColor: COLORS.blanco,
                border: `2px solid ${COLORS.borde}`
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="data:image/jpeg;base64,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"
                  alt="Misión"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div 
                  className="w-12 h-1 rounded-full mb-4"
                  style={{ backgroundColor: COLORS.principal }}
                ></div>
                <h3 
                  className="mb-4"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: COLORS.textoOscuro
                  }}
                >
                  Nuestra Misión
                </h3>
                <p 
                  style={{
                    color: COLORS.textoPrincipal,
                    lineHeight: '1.8'
                  }}
                >
                 La misión de Spin Soap es desarrollar y ofrecer jabones naturales y artesanales que aporten beneficios reales al cuidado de la piel, utilizando ingredientes vegetales como la espinaca, de manera responsable y sostenible. La empresa busca satisfacer las necesidades de consumidores urbanos que valoran la funcionalidad, la calidad y el bienestar, brindando productos accesibles que combinen nutrición cutánea, seguridad y respeto por el medio ambiente.
                </p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div 
            style={{
              opacity: visibleSections.has('story') ? 1 : 0,
              transform: visibleSections.has('story') ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s'
            }}
          >
            <div 
              className="rounded-3xl overflow-hidden"
              style={{
                backgroundColor: COLORS.blanco,
                border: `2px solid ${COLORS.borde}`
              }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src="data:image/jpeg;base64,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"
                  alt="Visión"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div 
                  className="w-12 h-1 rounded-full mb-4"
                  style={{ backgroundColor: COLORS.acento }}
                ></div>
                <h3 
                  className="mb-4"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: COLORS.textoOscuro
                  }}
                >
                  Nuestra Visión
                </h3>
                <p 
                  style={{
                    color: COLORS.textoPrincipal,
                    lineHeight: '1.8'
                  }}
                >
                  Inspirar a las personas a cuidar su piel de manera consciente y natural, demostrando que los ingredientes simples y honestos de la tierra pueden convertirse en bienestar diario. Spin Soap sueña con crecer como una marca boliviana que conecta naturaleza, salud y sostenibilidad, promoviendo un estilo de vida más respetuoso con el cuerpo y el entorno, y dejando una huella positiva en quienes eligen cuidarse de forma auténtica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proceso con Iconos Animados */}
      <div 
        ref={processRef}
        data-section="process"
        className="py-24"
        style={{ backgroundColor: COLORS.fondoSecundario }}
      >
        <div className="container mx-auto px-6">
          <div 
            className="text-center mb-16 max-w-3xl mx-auto"
            style={{
              opacity: visibleSections.has('process') ? 1 : 0,
              transform: visibleSections.has('process') ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <h2 
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '800',
                color: COLORS.textoOscuro,
                marginBottom: '1rem'
              }}
            >
              Proceso Artesanal
            </h2>
            <p 
              style={{
                color: COLORS.textoSecundario,
                fontSize: '1.05rem'
              }}
            >
              Cada jabón es elaborado con dedicación y cuidado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                title: 'Selección',
                desc: 'Hojas de espinaca frescas y aceites vírgenes de la más alta calidad',
                icon: '🌱'
              },
              {
                num: '02',
                title: 'Saponificación',
                desc: 'Proceso en frío para preservar propiedades naturales',
                icon: '⚗️'
              },
              {
                num: '03',
                title: 'Curado',
                desc: '4 semanas de reposo para suavidad y durabilidad perfecta',
                icon: '⏳'
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="group"
                style={{
                  opacity: visibleSections.has('process') ? 1 : 0,
                  transform: visibleSections.has('process') ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15 + 0.2}s`
                }}
              >
                <div 
                  className="p-8 rounded-2xl text-center h-full transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    backgroundColor: COLORS.blanco,
                    border: `2px solid ${COLORS.borde}`
                  }}
                >
                  <div 
                    className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{
                      backgroundColor: COLORS.secundario,
                      border: `2px solid ${COLORS.principal}30`
                    }}
                  >
                    {step.icon}
                  </div>

                  <div 
                    className="font-bold text-sm mb-3"
                    style={{
                      color: COLORS.principal,
                      letterSpacing: '0.1em'
                    }}
                  >
                    PASO {step.num}
                  </div>

                  <h3 
                    className="mb-3"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: COLORS.textoOscuro
                    }}
                  >
                    {step.title}
                  </h3>

                  <p 
                    style={{
                      color: COLORS.textoPrincipal,
                      lineHeight: '1.6',
                      fontSize: '0.9rem'
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipo con Fotos Reales */}
      <div 
        ref={teamRef}
        data-section="team"
        className="container mx-auto px-6 py-24"
      >
        <div 
          className="text-center mb-16"
          style={{
            opacity: visibleSections.has('team') ? 1 : 0,
            transition: 'all 0.8s ease'
          }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: COLORS.textoOscuro,
              marginBottom: '0.5rem'
            }}
          >
            Nuestro Equipo
          </h2>
          <p 
            style={{
              color: COLORS.textoSecundario,
              fontSize: '1.05rem'
            }}
          >
            Las personas detrás de cada producto
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, idx) => (
            <div 
              key={idx}
              className="group"
              style={{
                opacity: visibleSections.has('team') ? 1 : 0,
                transform: visibleSections.has('team') ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.1 + 0.2}s`
              }}
            >
              <div 
                className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03]"
                style={{
                  backgroundColor: COLORS.blanco,
                  border: `2px solid ${COLORS.borde}`
                }}
              >
                <div 
                  className="relative w-full aspect-square mx-auto mb-4 rounded-2xl overflow-hidden"
                  style={{
                    border: `3px solid ${COLORS.borde}`
                  }}
                >
                  <img 
                    src={member.image}
                    alt={`${member.name} ${member.surname}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 
                  className="font-bold text-center leading-tight mb-1"
                  style={{
                    fontSize: '1rem',
                    color: COLORS.textoOscuro
                  }}
                >
                  {member.name}
                  <br />
                  {member.surname}
                </h3>

                <p 
                  className="text-center text-sm"
                  style={{ 
                    color: COLORS.textoSecundario
                  }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-6 pb-24">
        <div 
          className="text-center p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${COLORS.secundario}80, ${COLORS.blanco})`,
            border: `2px solid ${COLORS.borde}`
          }}
        >
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
            ¿Listo para probar nuestros productos?
          </h3>
          <p 
            className="mb-8"
            style={{
              color: COLORS.textoPrincipal,
              fontSize: '1.05rem'
            }}
          >
            Descubre la diferencia de un cuidado natural y artesanal
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;