import { motion } from "framer-motion"
import { LuArrowRight } from "react-icons/lu"

import hero_1 from "../../images/hero_1.jpg"
import hero_2 from "../../images/logo.jpg"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-pure-white overflow-hidden pt-20 lg:pt-0">
      <div className="absolute top-0 right-0 w-[53%] h-full bg-pine-teal/5 rounded-bl-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-8"
        >
          <h1 className="uppercase font-bold font-secondary text-5xl lg:text-7xl leading-[1.15] text-pine-teal tracking-wide">
            <span className="text-camel">Gardžios istorijos</span> kiekvienai jūsų dienai
          </h1>

          <p className="text-lg text-pine-teal/70 max-w-md font-light leading-relaxed font-primary">
            Pusryčiai, pietūs ir kitos gardžios istorijos Mūsų mažas, bet tvirtas kolektyvas jau daugiau nei dešimt metų rūpinasi jūsų pietumis
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6 font-primary">
            <a
              href="#menu"
              className="group relative px-8 py-4 bg-pine-teal text-pure-white rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-pine-teal/20 flex items-center gap-3"
            >
              <span className="relative z-10 font-medium">Valgiaraštis</span>
              <LuArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-camel translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 text-pine-teal font-medium border-b-2 border-transparent hover:border-camel transition-colors"
            >
              Kontaktai
            </a>
          </div>
        </motion.div>

        <div className="relative h-[560px] w-full hidden lg:block">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            src={hero_1}
            alt="Jaukus bistro interjeras"
            className="absolute top-0 right-0 w-[84%] h-[88%] object-cover rounded-tl-[80px] rounded-br-[80px] shadow-2xl z-10"
          />
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={hero_2}
            alt="Kava ir pusryčiai"
            className="absolute bottom-0 left-0 w-[58%] h-[56%] object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-xl z-20 border-8 border-pure-white"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute top-20 left-10 w-32 h-32 bg-camel/20 rounded-full blur-3xl z-0"
          />
        </div>
      </div>
    </section>
  )
}