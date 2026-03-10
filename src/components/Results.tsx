import { motion } from 'motion/react';

const results = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773145439/638290836_18422425060143560_2055616294910272499_n._svj3tu.jpg",
    title: "Color y Brillo",
    category: "Coloración"
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773145439/631331515_18421103644143560_7485855769957554854_n._eav4mn.jpg",
    title: "Mechas Balayage",
    category: "Coloración"
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773145439/625342731_18152515858445311_5417843792840940504_n._waoa7i.jpg",
    title: "Estilo Personalizado",
    category: "Peluquería"
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773145439/486737741_1540482739957893_8373986912552793342_n._fbwlwj.jpg",
    title: "Corte y Peinado",
    category: "Peluquería"
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773145439/509941520_1238043331096895_1417324251157754301_n._ymkham.jpg",
    title: "Tratamiento Capilar",
    category: "Cuidado"
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dfbsqy5ul/image/upload/v1773142124/417562702_885151783610943_1061533677989361904_n_xrnb4a.jpg",
    title: "Vicky Legua",
    category: "Salón"
  }
];

export default function Results() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Nuestros Trabajos</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Descubre los resultados reales de nuestros tratamientos compartidos en nuestro Instagram. Cada cliente es único y nuestro objetivo es resaltar su belleza natural.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-100 cursor-pointer"
            >
              <img
                src={result.image}
                alt={result.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/80 text-sm uppercase tracking-wider font-medium mb-1">{result.category}</p>
                  <h3 className="text-white text-xl font-serif">{result.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/salonvickylegua/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-wider text-sm font-medium"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
