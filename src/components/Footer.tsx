import React from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaLeaf } from 'react-icons/fa';
import { COLORS } from '../utils/colors';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden" style={{ backgroundColor: COLORS.textoOscuro }}>
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
             style={{ backgroundColor: COLORS.principal }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl"
             style={{ backgroundColor: COLORS.acento }}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Logo y descripción */}
          <div className="md:col-span-1">
            <div className="mb-6">
  <div
    className="w-28 h-28 rounded-full flex items-center justify-center"
    style={{ backgroundColor: COLORS.principal }}
  >
    <div className="w-22 h-22 bg-white rounded-full flex items-center justify-center">
      <img
        src="https://lh3.google.com/u/0/d/1nCRi4P8mx_B4i4JsvsB-G8h7ud0_q7y8=k"
        alt="Spin Soap Logo"
        className="w-20 h-20 object-contain"
      />
    </div>
  </div>
</div>

            <p 
              className="text-sm leading-relaxed mb-6"
              style={{ 
                color: COLORS.textoClaro,
                lineHeight: '1.7'
              }}
            >
              Nutrición natural para tu piel. Hecho con pasión y conciencia ambiental en Bolivia.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {['🌱 Vegano', '🇧🇴 Bolivia', '♻️ Eco'].map((badge, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: `${COLORS.principal}20`,
                    color: COLORS.secundarioMedio,
                    border: `1px solid ${COLORS.principal}30`
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 
              className="font-bold mb-6 text-sm uppercase tracking-wider"
              style={{ color: COLORS.blanco }}
            >
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Producto', href: '/producto' },
                { name: 'Nosotros', href: '/nosotros' },
                { name: 'Contacto', href: '/contacto' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-all duration-300"
                    style={{ color: COLORS.textoClaro }}
                  >
                    <span 
                      className="w-0 h-0.5 group-hover:w-4 transition-all duration-300 rounded-full"
                      style={{ backgroundColor: COLORS.principal }}
                    ></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          {/* Columna 4: Redes sociales */}
          <div>
            <h4 
              className="font-bold mb-6 text-sm uppercase tracking-wider"
              style={{ color: COLORS.blanco }}
            >
              Síguenos
            </h4>
            <p 
              className="text-sm mb-6"
              style={{ 
                color: COLORS.textoClaro,
                lineHeight: '1.6'
              }}
            >
              Únete a nuestra comunidad y descubre tips de cuidado natural para tu piel.
            </p>

            {/* Iconos sociales */}
            <div className="flex gap-3">
              {[
                { Icon: FaInstagram, href: 'https://www.instagram.com/spin.soap?igsh=MWtwNDUyemg2d3dudQ%3D%3D&utm_source=qr ', label: 'Instagram' },
                { Icon: FaTiktok, href: 'https://www.tiktok.com/@spin.soap', label: 'TikTok' },
                { Icon: FaWhatsapp, href: 'https://wa.link/gsknol', label: 'WhatsApp' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: `${COLORS.principal}15`,
                    border: `1px solid ${COLORS.principal}30`,
                    color: COLORS.secundarioMedio
                  }}
                >
                  <social.Icon 
                    className="transition-transform duration-300 group-hover:scale-125"
                    style={{ fontSize: '1.4rem' }} 
                  />
                </a>
              ))}
            </div>

            {/* Newsletter mini */}
            <div className="mt-6">
              <p 
                className="text-xs mb-3"
                style={{ color: COLORS.textoClaro }}
              >
                Recibe ofertas especiales
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 rounded-lg text-sm outline-none transition-all duration-300"
                  style={{
                    backgroundColor: `${COLORS.blanco}10`,
                    border: `1px solid ${COLORS.blanco}20`,
                    color: COLORS.blanco
                  }}
                />
                <button
                  className="px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: COLORS.principal,
                    color: COLORS.blanco
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div 
          className="my-8 h-px"
          style={{ 
            backgroundColor: `${COLORS.blanco}10`
          }}
        ></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-xs"
            style={{ color: COLORS.textoClaro }}
          >
            © {currentYear} SPIN SOAP. Todos los derechos reservados. Hecho con 💚 en Bolivia.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <a 
              href="#"
              className="transition-colors duration-300 hover:opacity-70"
              style={{ color: COLORS.textoClaro }}
            >
              Mapa del Sitio
            </a>
            <span style={{ color: COLORS.textoClaro, opacity: 0.3 }}>•</span>
            <a 
              href="#"
              className="transition-colors duration-300 hover:opacity-70"
              style={{ color: COLORS.textoClaro }}
            >
              Cookies
            </a>
            <span style={{ color: COLORS.textoClaro, opacity: 0.3 }}>•</span>
            <a 
              href="#"
              className="transition-colors duration-300 hover:opacity-70"
              style={{ color: COLORS.textoClaro }}
            >
              Accesibilidad
            </a>
          </div>
        </div>
      </div>

      {/* Decoración inferior */}
      <div 
        className="h-1"
        style={{
          background: `linear-gradient(90deg, ${COLORS.principal}, ${COLORS.acento}, ${COLORS.principal})`
        }}
      ></div>
    </footer>
  );
};

export default Footer;