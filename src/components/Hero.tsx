import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773145839/480331613_1195311269261658_6999344463002564580_n_iqdhpk.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-stone-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight"
        >
          Vicky Legua
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-stone-100 mb-10 font-light tracking-wide max-w-2xl mx-auto"
        >
          Peluquería profesional en Zaragoza, especialista en estilo y cuidado del cabello.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://booksy.com/es-es/167756_salon-vicky-legua_peluqueria_33237_zaragoza?rwg_token=AFd1xnGSYLSSI-MBJKTsEjOucmEcGPAELmPJZervVl2njM6p3rYTkKz_dtJIgNvf4YicS5Bs-adOGuOckB5awoeOchxa48fh5A%3D%3D#ba_s=seo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 rounded-full uppercase tracking-wider text-sm font-medium hover:bg-stone-100 transition-colors"
          >
            Reservar Cita
          </a>
          <a 
            href="https://api.whatsapp.com/send/?phone=34619915259&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white rounded-full uppercase tracking-wider text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Contactar por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 z-20 flex space-x-6"
      >
        <a 
          href="https://www.facebook.com/salonvickylegua" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/80 hover:text-white transition-colors"
        >
          <Facebook size={24} />
          <span className="sr-only">Facebook</span>
        </a>
        <a 
          href="https://www.instagram.com/salonvickylegua/?hl=es" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/80 hover:text-white transition-colors"
        >
          <Instagram size={24} />
          <span className="sr-only">Instagram</span>
        </a>
      </motion.div>
    </section>
  );
}
