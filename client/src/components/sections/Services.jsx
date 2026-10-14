import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

export default function Services() {
  const services = [
    {
      title: "Pristatymas į vietą",
      desc: "Pusryčių ir dienos pietų pristatymas į biurus, gamybines patalpas ar namus.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Maistas ir pusgaminiai",
      desc: "Pusgaminių arba pagamintų patiekalų užsakymas ir pristatymas į vietą.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Renginių aptarnavimas",
      desc: "Švenčių ir įvairių renginių profesionalus aptarnavimas.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Indų ir staltiesių nuoma",
      desc: "Indų bei staltiesių nuoma jūsų asmeninėms ar įmonės šventėms.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Patalpų nuoma šventėms",
      desc: "Erdvė šeimos ar įmonės renginiams ir teminiams vakarams.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Patalpų nuoma pristatymams",
      desc: "Patalpų nuoma parodoms, produktų pristatymams ir kitiems renginiams.",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <section id="paslaugos" className="pt-20 pb-28 bg-pure-white px-6 lg:px-16 font-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="space-y-4 max-w-4xl"
        >
          <h2 className="font-bold font-secondary text-4xl lg:text-6xl text-pine-teal tracking-tight leading-none uppercase">
            Nuo pietų iki švenčių.
          </h2>
          <p className="text-pine-teal/80 text-lg lg:text-xl leading-relaxed font-light pt-2">
            Nuo kasdienių dienos pietų iki pilno švenčių aptarnavimo. Rūpinamės maisto šviežumu, tiekimu ir reikiama įranga, kad kiekvienas renginys praeitų sklandžiai.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col space-y-6"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-pine-teal/5 border border-pine-teal/10 shadow-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4" />
              </div>
              <div className="space-y-3">
                <h3 className="font-medium font-primary text-2xl lg:text-3xl text-pine-teal leading-snug">
                  {service.title}
                </h3>
                <p className="text-pine-teal/75 text-base lg:text-lg leading-relaxed font-light max-w-xl">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}