import { motion } from "framer-motion"
import { LuCoffee, LuTruck, LuPartyPopper, LuBuilding, LuClock } from "react-icons/lu"

export default function About() {
  const services = [
    {
      icon: LuTruck,
      title: "Pristatymas į vietą",
      desc: "Pusryčių bei dienos pietų pristatymas į biurus, gamybines patalpas ar namus."
    },
    {
      icon: LuCoffee,
      title: "Maistas ir pusgaminiai",
      desc: "Pusgaminių arba jau pagamintų patiekalų užsakymas ir pristatymas."
    },
    {
      icon: LuPartyPopper,
      title: "Šventės ir nuoma",
      desc: "Švenčių aptarnavimas bei indų ir staltiesių nuoma jūsų renginiams."
    },
    {
      icon: LuBuilding,
      title: "Patalpų nuoma",
      desc: "Erdvė šeimos ar įmonės šventėms, teminiams vakarams bei produktų pristatymams."
    }
  ]

  return (
    <section id="about" className="py-24 bg-pure-white px-8 lg:px-16 font-primary">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-camel">Mūsų istorija</span>
          <h2 className="font-bold font-secondary text-4xl lg:text-5xl text-pine-teal uppercase tracking-wide">
            Tradicijos ir meilė maistui Kauno senamiestyje
          </h2>
          <div className="w-16 h-0.5 bg-camel mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-pine-teal text-pure-white p-8 lg:p-12 rounded-3xl flex flex-col justify-between relative overflow-hidden group shadow-xl"
          >
            <div className="space-y-6 relative z-10">
              <div className="p-3 bg-camel w-fit rounded-2xl text-pine-teal">
                <LuCoffee className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-secondary text-3xl uppercase tracking-wide">Daugiau nei 10 metų patirties</h3>
              <p className="text-pure-white/80 font-light leading-relaxed">
                Pusryčiai, pietūs ir kitos gardžios istorijos. Mūsų mažas, bet tvirtas kolektyvas jau daugiau nei dešimt metų rūpinasi jūsų pietumis. Mums tiesiog patinka maitinti žmones.
              </p>
            </div>
            <div className="pt-8 relative z-10 flex items-center gap-2 text-camel font-medium text-sm">
              <LuClock className="w-4 h-4" />
              <span>Dirbame I-V (savaitgaliais pagal poreikį)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-80 md:h-auto rounded-3xl overflow-hidden shadow-lg md:col-span-1"
          >
            <img
              src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop"
              alt="Bistro detalės"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-80 md:h-auto rounded-3xl overflow-hidden shadow-lg md:col-span-3 lg:col-span-1"
          >
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop"
              alt="Gourmet patiekalas"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="col-span-1 md:col-span-3 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-pine-teal/5 p-6 rounded-3xl flex flex-col space-y-3 border border-pine-teal/10 shadow-sm"
                >
                  <div className="p-3 bg-pine-teal text-pure-white w-fit rounded-2xl">
                    <Icon className="w-5 h-5 text-camel" />
                  </div>
                  <h4 className="font-bold font-secondary text-base text-pine-teal uppercase tracking-wide">
                    {service.title}
                  </h4>
                  <p className="text-pine-teal/70 text-xs font-light leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}