import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const reviewsData = [
  // Página 1
  {
    id: 1,
    name: "Laura Lahoz",
    rating: 5,
    text: "Excelente atención Alexandra! Muy contenta como has tratado mi cabello y el peinado me ha encantado, y la atención de tus empleadas inmejorable. Volveré muy pronto de nuevo."
  },
  {
    id: 2,
    name: "Jorge Gascón Vergara",
    rating: 5,
    text: "Una verdadera maravilla de peluquería. Las chicas cortan el pelo genial, con mucho estilo."
  },
  {
    id: 3,
    name: "Maribel Cortes",
    rating: 5,
    text: "Ana fantástica siempre innovando en peinados."
  },
  // Página 2
  {
    id: 4,
    name: "Araceli Blanco",
    rating: 5,
    text: "Como he echado de menos, las manos de Ana. Hoy me ha dejado una melena de actriz. Eres única y conoces mi pelo!"
  },
  {
    id: 5,
    name: "Laura Martin",
    rating: 5,
    text: "Una maravilla, como profesional y como persona. Fuimos unas amigas y yo y salimos encantadas. Os la recomiendo 🥰"
  },
  {
    id: 6,
    name: "Miguel Angel Sanchez Prado",
    rating: 5,
    text: "Excelentes profesionales y un trato al público realmente excepcional, sin ninguna duda uno de los mejores centros de la ciudad, si no el mejor."
  },
  // Página 3
  {
    id: 7,
    name: "Evita Warrior",
    rating: 5,
    text: "Fui a hacerme una limpieza de cutis con Míriam y encantada, te explica todo con detalle y los masajes faciales buenísimos. La recomiendo."
  },
  {
    id: 8,
    name: "Belinda Gallardo",
    rating: 5,
    text: "Hay muchas peluquerías en el barrio pero nunca acababa de quedarme contenta. Aquí si. Voy tanto yo como a mis niños pequeños, a los que tratan siempre con mucha amabilidad y paciencia. La calidad del corte se nota, volveré seguro."
  },
  {
    id: 9,
    name: "Raquel Gracia-Moreno Ubeda",
    rating: 5,
    text: "Muchísimas gracias Sandra, por el gran trabajo que nos hiciste el día de la boda de mi hija. No podemos estar más contentas con los recogidos que nos dejaste."
  },
  // Página 4
  {
    id: 10,
    name: "Sandra Paredes",
    rating: 5,
    text: "Manicura perfecta! Muy buena experiencia, la atención es estupenda, me hicieron la manicura semipermanente con mucho cuidado y me quedó genial. Tienen mucha variedad de colores."
  },
  {
    id: 11,
    name: "Juan Carlos Andrea",
    rating: 5,
    text: "Gracias Alexandra por tu asesoramiento. Estoy muy contento con mi cambio de look."
  },
  {
    id: 12,
    name: "Alvaro Tiss",
    rating: 5,
    text: "Un trato súper amable y muy profesionales. Volveré seguro."
  },
  // Página 5
  {
    id: 13,
    name: "Jose Mon",
    rating: 5,
    text: "Sin duda una gran peluquería en la que trabajan excelentes profesionales. Acudo desde hace años por los buenos resultados y por el trato que recibo, cercano y agradable."
  },
  {
    id: 14,
    name: "Marta Perez Lopez",
    rating: 5,
    text: "El mejor salón de Zaragoza sin duda. Estoy muy contenta con la micropigmentación de cejas! Unas profesionales de 10."
  },
  {
    id: 15,
    name: "Silbi Perez",
    rating: 5,
    text: "Genial, artistas y estilismo."
  }
];

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(reviewsData.length / 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 10000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentReviews = reviewsData.slice(currentPage * 3, currentPage * 3 + 3);

  return (
    <section id="reviews" className="py-24 bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Tu opinión nos importa, deja tu reseña y ayuda a otros a conocernos.
          </p>
        </div>

        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {currentReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full"
                >
                  <div className="flex space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-6 italic flex-grow">"{review.text}"</p>
                  <p className="font-medium text-stone-900 uppercase tracking-wider text-sm">{review.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controles de Navegación */}
          <div className="flex justify-center items-center mt-10 gap-4">
            <button 
              onClick={prevPage}
              className="p-2 rounded-full border border-stone-300 text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentPage === i ? 'bg-stone-900' : 'bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Ir a página ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextPage}
              className="p-2 rounded-full border border-stone-300 text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Vicky+Legua/@41.6615267,-0.875284,17z/data=!4m8!3m7!1s0xd59148c0cd96805:0xcdb806fd16810bee!8m2!3d41.6615227!4d-0.8727091!9m1!1b1!16s%2Fg%2F11xjztt8d?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-stone-900 text-stone-900 rounded-full hover:bg-stone-900 hover:text-white transition-colors uppercase tracking-wider text-sm font-medium"
          >
            Dejar una reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
}
