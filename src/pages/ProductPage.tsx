import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaStar, FaCheck } from 'react-icons/fa';
import { COLORS } from '../utils/colors';

const ProductPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const product = {
    name: "Jabón Artesanal de Espinaca",
    price: 15.50,
    currency: "Bs",
    stock: 30,
    rating: 4.8,
    reviews: 20
  };

  const images = [
    "IMG-20251214-WA0034.jpg",
    "IMG-20251214-WA0008.jpg",
    "IMG-20251214-WA0030.jpg",
    "IMG-20251214-WA0040.jpg"
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isImageZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const whatsappMessage = `Hola SPIN SOAP! Quiero adquirir ${quantity} unidad(es) del ${product.name}. Mi nombre es:`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.fondo }}>
      <div className="container mx-auto px-6 py-16">
        
        {/* Breadcrumb minimalista */}
        <div className="flex items-center gap-2 mb-12 text-xs">
          <a href="/" className="transition-colors duration-300" style={{ color: COLORS.textoClaro }}>Inicio</a>
          <span style={{ color: COLORS.textoClaro }}>·</span>
          <span style={{ color: COLORS.textoPrincipal, fontWeight: '500' }}>Jabón de Espinaca</span>
        </div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-5 gap-16 mb-20">
          
          {/* Galería - 3 columnas */}
          <div className="lg:col-span-3 space-y-4">
            {/* Imagen Principal más ancha */}
            <div 
              className="relative bg-white rounded-2xl overflow-hidden cursor-zoom-in"
              style={{ 
                border: `1px solid ${COLORS.borde}`,
                aspectRatio: '4/3'
              }}
              onMouseEnter={() => setIsImageZoomed(true)}
              onMouseLeave={() => setIsImageZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <img 
                src={images[activeImage]}
                alt="Jabón Spin Soap" 
                className="w-full h-full object-cover transition-transform duration-300"
                style={{
                  transform: isImageZoomed ? 'scale(2)' : 'scale(1)',
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`
                }}
              />
              
              {/* Badge minimalista */}
              <div 
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-medium"
                style={{
                  backgroundColor: `${COLORS.blanco}E6`,
                  color: COLORS.principal,
                  border: `1px solid ${COLORS.borde}`
                }}
              >
                Lo mejor de la naturaleza
              </div>
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className="relative rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    border: activeImage === index 
                      ? `2px solid ${COLORS.principal}` 
                      : `1px solid ${COLORS.borde}`,
                    opacity: activeImage === index ? 1 : 0.6,
                    aspectRatio: '1/1'
                  }}
                >
                  <img 
                    src={img} 
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Información del Producto - 2 columnas */}
          <div className="lg:col-span-2 flex flex-col">
            
            {/* Header */}
            <div className="mb-8">
              <h1 
                className="mb-4"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: '700',
                  color: COLORS.textoOscuro,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2'
                }}
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      style={{ 
                        color: i < Math.floor(product.rating) ? COLORS.acento : COLORS.borde,
                        fontSize: '0.9rem'
                      }} 
                    />
                  ))}
                </div>
                <span style={{ color: COLORS.textoSecundario, fontSize: '0.85rem' }}>
                  {product.rating} · {product.reviews} reseñas
                </span>
              </div>

              {/* Precio */}
              <div className="flex items-baseline gap-2 mb-8">
                <span 
                  className="text-4xl font-bold"
                  style={{ color: COLORS.textoOscuro }}
                >
                  {(product.price * quantity).toFixed(2)}
                </span>
                <span 
                  className="text-lg font-medium"
                  style={{ color: COLORS.textoSecundario }}
                >
                  {product.currency}
                </span>
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-8">
              <p 
                className="leading-relaxed mb-6"
                style={{ 
                  color: COLORS.textoPrincipal,
                  lineHeight: '1.7',
                  fontSize: '0.95rem'
                }}
              >
                Elaborado con espinaca orgánica fresca, rico en vitaminas A, C y K. 
                Ideal para pieles que buscan luminosidad natural y cuidado profundo.
              </p>
              
              {/* Beneficios con checkmarks */}
              <div className="space-y-2.5">
                {[
                  'Reduce el acné',
                  'Hidratación profunda',
                  'Luminosidad natural',
                  'Piel sensible'
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2.5"
                  >
                    <div 
                      className="w-4 h-4 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: COLORS.secundario,
                        border: `1px solid ${COLORS.principal}`
                      }}
                    >
                      <FaCheck style={{ color: COLORS.principal, fontSize: '0.5rem' }} />
                    </div>
                    <span 
                      className="text-sm"
                      style={{ color: COLORS.textoPrincipal }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Separador */}
            <div className="h-px mb-8" style={{ backgroundColor: COLORS.borde }}></div>

            {/* Cantidad y Stock */}
            <div className="flex items-center justify-between mb-8">
         

              <div className="text-right">
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: COLORS.textoSecundario }}>
                  Stock
                </p>
                <p className="font-semibold" style={{ color: COLORS.principal }}>
                  {product.stock} und.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a 
              href={`https://wa.link/gsknol`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.01] mb-3"
              style={{ 
                backgroundColor: COLORS.principal,
                color: COLORS.blanco,
                fontSize: '0.95rem'
              }}
            >
              <FaWhatsapp className="text-lg transition-transform duration-300 group-hover:scale-110" />
              <span>Comprar Ahora</span>
            </a>
            
            <p 
              className="text-center text-xs"
              style={{ 
                color: COLORS.textoClaro
              }}
            >
              Pago seguro · Envío coordinado
            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;