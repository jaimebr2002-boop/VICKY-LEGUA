import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { serviceCategories } from '../data/services';

export default function Services() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de tratamientos y servicios diseñados para ti.
          </p>
        </div>

        <div className="space-y-4">
          {serviceCategories.map((category) => (
            <div 
              key={category.id} 
              className="border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-4 sm:px-6 py-5 flex justify-between items-center bg-stone-50/50 hover:bg-stone-50 transition-colors focus:outline-none gap-4"
              >
                <h3 className="text-base sm:text-lg font-medium text-stone-900 tracking-wide text-left">{category.title}</h3>
                <div className="text-stone-400 shrink-0">
                  {openCategory === category.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 py-4 bg-white">
                      <ul className="divide-y divide-stone-100">
                        {category.services.map((service, index) => (
                          <li key={index} className="py-4 flex flex-row justify-between items-center gap-4 group">
                            <div className="flex-1 text-left">
                              <h4 className="text-stone-800 font-medium group-hover:text-stone-900 transition-colors leading-tight">{service.name}</h4>
                              <p className="text-sm text-stone-500 mt-1">{service.duration}</p>
                            </div>
                            <div className="text-stone-900 font-medium text-base sm:text-lg bg-stone-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg whitespace-nowrap shrink-0">
                              {service.price}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
