import { Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden bg-stone-200"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.799793574945!2d-0.875284!3d41.6615267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59148c0cd96805%3A0xcdb806fd16810bee!2sVicky%20Legua!5e0!3m2!1ses!2ses!4v1710000000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Vicky Legua"
            ></iframe>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Sobre Nosotros</h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Vicky Legua ofrece servicios de peluquería, estética y bienestar con atención personalizada y profesional. Nuestro objetivo es realzar tu belleza natural en un ambiente relajante y acogedor.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-stone-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider">Dirección</h3>
                  <a 
                    href="https://www.google.com/maps/place/Vicky+Legua/@41.6615267,-0.875284,17z/data=!4m16!1m9!3m8!1s0xd59148c0cd96805:0xcdb806fd16810bee!2sVicky+Legua!8m2!3d41.6615227!4d-0.8727091!9m1!1b1!16s%2Fg%2F11xjztt8d!3m5!1s0xd59148c0cd96805:0xcdb806fd16810bee!8m2!3d41.6615227!4d-0.8727091!16s%2Fg%2F11xjztt8d?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-stone-600 hover:text-stone-900 transition-colors block"
                  >
                    C. del Valle de Zuriza, 19, local 8<br/>50015 Zaragoza
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-stone-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider">Teléfono</h3>
                  <p className="mt-1 text-stone-600">976 29 04 75</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6 text-stone-400" />
                </div>
                <div className="ml-4 w-full">
                  <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wider mb-2">Horario</h3>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex justify-between border-b border-stone-200 pb-2">
                      <span>Lunes</span>
                      <span>Cerrado</span>
                    </li>
                    <li className="flex justify-between border-b border-stone-200 pb-2">
                      <span>Martes - Jueves</span>
                      <span>10:00 – 19:00</span>
                    </li>
                    <li className="flex justify-between border-b border-stone-200 pb-2">
                      <span>Viernes</span>
                      <span>9:00 – 19:00</span>
                    </li>
                    <li className="flex justify-between border-b border-stone-200 pb-2">
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
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
