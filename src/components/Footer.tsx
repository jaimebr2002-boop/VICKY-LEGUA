import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl text-white mb-6">Vicky Legua</h3>
            <p className="text-stone-400 mb-6">
              Peluquería profesional en Zaragoza, especialista en estilo y cuidado del cabello.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/salonvickylegua" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/salonvickylegua/?hl=es" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-stone-500 shrink-0 mt-0.5" />
                <span>C. del Valle de Zuriza, 19, local 8<br/>50015 Zaragoza</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-stone-500 shrink-0" />
                <span>976 29 04 75</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider mb-6">Horario</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Lunes</span>
                <span>Cerrado</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Mar - Jue</span>
                <span>10:00 – 19:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Viernes</span>
                <span>9:00 – 19:00</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Sábado</span>
                <span>8:00 – 14:00</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Vicky Legua. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://booksy.com/es-es/167756_salon-vicky-legua_peluqueria_33237_zaragoza?rwg_token=AFd1xnGSYLSSI-MBJKTsEjOucmEcGPAELmPJZervVl2njM6p3rYTkKz_dtJIgNvf4YicS5Bs-adOGuOckB5awoeOchxa48fh5A%3D%3D#ba_s=seo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stone-300 uppercase tracking-wider font-medium">
              Reservar Cita
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
