import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import chairs from "../../images/chairs.jpg"
import food_1 from "/images/food_1.jpg"
import detail from "../../images/detail.jpg"
import stacked_steps from "../../images/stacked_steps.svg"

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const plateY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const detailRotate = useTransform(scrollYProgress, [0, 1], [-6, 8])

  return (
    <section id="hero" ref={ref} className="relative grid min-h-screen bg-bg lg:grid-cols-12 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${stacked_steps})` }}
      />

      <div className="relative z-10 flex flex-col justify-between px-8 py-12 lg:col-span-7 lg:pl-16 lg:pr-12 lg:py-14 xl:pl-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative font-primary text-sm uppercase tracking-[0.25em] text-primary-text/60"
        >
          Bistro · Kaunas
        </motion.p>

        <div className="relative my-14 lg:my-8">
          <h1 className="font-secondary font-bold uppercase leading-[0.88] text-pine-teal">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease }}
                className="block text-3xl sm:text-4xl lg:text-5xl"
              >
                Sveiki atvykę į
              </motion.span>
            </span>
            <span className="block pb-2">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.12 }}
                className="block text-[3.2rem] italic text-accent sm:text-7xl lg:text-[5.5rem] xl:text-[7.5rem]"
              >
                gardžias
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.24 }}
                className="block text-[3.2rem] italic text-accent sm:text-7xl lg:text-[5.5rem] xl:text-[7.5rem]"
              >
                istorijas
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
            className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10"
          >
            <motion.img
              src={detail}
              alt="Bistro detalė"
              className="hidden h-32 w-32 shrink-0 border-[6px] border-bg object-cover sm:block lg:h-36 lg:w-36"
            />

            <div className="max-w-md">
              <p className="font-primary text-lg leading-relaxed text-primary-text/80">
                Mūsų mažas, bet tvirtas kolektyvas jau daugiau nei dešimt metų rūpinasi jūsų pietumis. Dirbame darbo dienomis, o savaitgaliais pagal klientų poreikį.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-10">
                <a
                  href="#menu"
                  className="bg-primary-text px-10 py-4 font-primary text-base font-medium uppercase text-bg transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Žiūrėti valgiaraštį
                </a>
                <a
                  href="#contact"
                  className="border-b border-primary-text pb-1 font-primary text-base font-medium uppercase text-primary-text transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Susisiekti
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative font-primary text-2xl font-light italic leading-snug text-primary-text sm:text-3xl"
        >
          Mums patinka maitinti žmones.
        </motion.p>
      </div>

      <div className="relative z-10 min-h-[34rem] lg:col-span-5">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            style={{ y: imageY }}
            src={chairs}
            alt="Šilta bistro erdvė Kauno senamiestyje"
            className="h-full w-full scale-110 object-cover"
          />
        </div>

        <motion.div
          style={{ y: plateY }}
          className="absolute left-0 top-1/2 hidden -translate-x-1/2 lg:block"
        >
          <img
            src={food_1}
            alt="Šviežiai paruošti pusryčiai"
            className="h-80 w-60 border-8 border-bg object-cover xl:h-96 xl:w-72"
          />
        </motion.div>
      </div>
    </section>
  )
}