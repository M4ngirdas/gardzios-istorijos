import { motion } from "framer-motion"
import { LuStar, LuQuote, LuExternalLink } from "react-icons/lu"

export default function Reviews() {
  const reviews = [
    {
      name: "Nijolė G.",
      rating: 5,
      text: "Labai gardu, sotu, gražu, jauku ir bendraujantis personalas. Ir prie viso to dar ir kainos draugiškos, stalo vandeniu vaišina. Užsukite!"
    },
    {
      name: "Kristina Š.",
      rating: 5,
      text: "Sužinojome apie šią vietą iš praeivio prie Kauno pilies ir nuėjusios likome labai patenkintos maistu bei aptarnavimu. Rekomenduoju!"
    },
    {
      name: "Mindaugas B.",
      rating: 5,
      text: "Patys skaniausi pietūs Kaune! Malonus kolektyvas, jauki aplinka."
    }
  ]

  return (
    <section id="reviews" className="py-24 bg-pure-white px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto font-primary"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-camel">Atsiliepimai</span>
          <h2 className="font-bold font-secondary text-4xl lg:text-6xl text-pine-teal uppercase tracking-wide">
            Ką apie mus sako svečiai
          </h2>
          <div className="w-20 h-1 bg-camel mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-primary">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pine-teal/5 p-8 rounded-[30px] flex flex-col justify-between space-y-6 relative border border-pine-teal/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <LuQuote className="w-10 h-10 text-camel/30 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex gap-1 text-camel">
                  {[...Array(review.rating)].map((_, i) => (
                    <LuStar key={i} className="w-4 h-4 fill-camel" />
                  ))}
                </div>
                <p className="text-pine-teal/80 font-light text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-pine-teal/10 flex justify-between items-center text-xs">
                <span className="font-bold font-secondary text-pine-teal uppercase tracking-wide">{review.name}</span>
                <span className="text-camel font-medium">5.0 ★</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pt-4 font-primary"
        >
          <a
            href="https://www.google.com/maps/place/Bistro+%22Gard%C5%BEios+istorijos%22+-+Senamiestis/@54.8982393,23.8842702,17z/data=!4m8!3m7!1s0x46e723ff0e3fef99:0xfa32da8a9b5282e7!8m2!3d54.8982362!4d23.8868451!9m1!1b1!16s%2Fg%2F11h00d4p8v?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-pine-teal text-pure-white rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-pine-teal/20"
          >
            <span className="relative z-10 font-medium">Palikti atsiliepimą Google</span>
            <LuExternalLink className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <div className="absolute inset-0 bg-camel translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}