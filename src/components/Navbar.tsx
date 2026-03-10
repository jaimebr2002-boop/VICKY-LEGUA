import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Resultados', href: '#results' },
    { name: 'Reseñas', href: '#reviews' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <img 
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773142124/417562702_885151783610943_1061533677989361904_n_xrnb4a.jpg" 
                alt="Vicky Legua Logo" 
                className="h-12 w-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-2xl font-medium text-stone-900">
                Vicky Legua
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-stone-900 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://booksy.com/es-es/167756_salon-vicky-legua_peluqueria_33237_zaragoza?rwg_token=AFd1xnGSYLSSI-MBJKTsEjOucmEcGPAELmPJZervVl2njM6p3rYTkKz_dtJIgNvf4YicS5Bs-adOGuOckB5awoeOchxa48fh5A%3D%3D#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-stone-800 transition-colors"
            >
              Reservar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://booksy.com/es-es/167756_salon-vicky-legua_peluqueria_33237_zaragoza?rwg_token=AFd1xnGSYLSSI-MBJKTsEjOucmEcGPAELmPJZervVl2njM6p3rYTkKz_dtJIgNvf4YicS5Bs-adOGuOckB5awoeOchxa48fh5A%3D%3D#ba_s=seo"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-stone-900 hover:bg-stone-50 rounded-md"
            >
              Reservar Cita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
